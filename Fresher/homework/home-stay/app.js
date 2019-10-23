// variables
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDom = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartTotal = document.querySelector('.cart-total')
const cartContent = document.querySelector('.cart-content')
const productsDom = document.querySelector('.products-center')
let cart = []
let buttonsDom = []

// getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("data/products.json")
      let data = await result.json()
      let products = data.items
      products = products.map( item => {
        const { title, price } = item.fields
        const { id } = item.sys
        const image = item.fields.image.fields.file.url
        return { title, price, id, image }
      })
      return products
    } 
    catch (error) {
      console.log(error) 
    }
  }
}

// display products
class UI {
  displayProducts(products) {
    let result = ''
    products.forEach( product => {
      result += `
        <!-- single product -->
          <article class="product">
            <div class="img-container">
              <img class="product-img" alt="product" src=${ product.image } >
              <button class="bag-btn" data-id=${ product.id } >
                <i class="fas fa-shopping-cart"></i>add to cart
              </button>
            </div>
            <h3>${ product.title }</h3>
            <h4>$${ product.price }</h4>
          </article>
        <!-- end of single product -->
      `
    })
    productsDom.innerHTML = result
  }

  getBagButton() {
    const buttons = [...document.querySelectorAll('.bag-btn')]
    buttonsDom = buttons
    buttons.forEach( button => {
      let id = button.dataset.id
      let inCart = cart.find( item => {
        item.id === id
      })
      if (inCart) {
        button.innerText = 'In Cart'
        button.disabled = true
      }
      button.addEventListener('click', event => {
        event.target.innerText = 'In Cart'
        event.target.disabled = true
        // get product from products
        let cartItem = {...Storage.getProduct(id), quantity: 1 }
        // add product
        cart = [...cart, cartItem ]
        Storage.saveCart(cart)
        this.setCartValues(cart)
        this.addCartItem(cartItem)
        this.showCart()
      })
    })
  }

  setCartValues(cart) {
    let tmpTotal = 0
    let itemsTotal = 0
    cart.map( item => {
      tmpTotal += item.price * item.quantity
      itemsTotal += item.quantity
    })
    cartTotal.innerText = parseFloat(tmpTotal.toFixed(2))
    cartItems.innerText = itemsTotal
  }

  addCartItem(item) {
    const div = document.createElement('div')
    div.classList.add('cart-item')
    div.innerHTML = `
      <img src=${ item.image } alt="product">
      <div>
        <h4>${ item.title }</h4>
        <h5>$${ item.price }</h5>
        <span class="remove-item" data-id=${ item.id }>
          <i class="fas fa-trash-alt"></i> remove
        </span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id=${ item.id }></i>
        <p class="item-quantity">${ item.quantity }</p>
        <i class="fas fa-chevron-down" data-id=${ item.id }></i>
      </div>
    `
    cartContent.appendChild(div)
  }

  showCart() {
    cartOverlay.classList.add('transparentBcg')
    cartDom.classList.add('showCart')
  }

  closeCart() {
    cartOverlay.classList.remove('transparentBcg')
    cartDom.classList.remove('showCart')
  }

  populateCart(cart) {
    cart.forEach( item => this.addCartItem(item) )
  }

  // cart task
  cartTask() {
    clearCartBtn.addEventListener('click', () => {
      this.clearCart()
    })
    cartContent.addEventListener('click', event => {
      // remove item
      if (event.target.classList.contains('remove-item')) {
        let removeItem = event.target
        let id = removeItem.dataset.id
        cartContent.removeChild(removeItem.parentElement.parentElement)
        this.clearItem(id)
      } 
      // add quantity
      else if (event.target.classList.contains('fa-chevron-up')) {
        let addQuantity = event.target
        let id = addQuantity.dataset.id
        let tmpItem = cart.find( item => item.id === id )
        tmpItem.quantity += 1
        Storage.saveCart(cart)
        this.setCartValues(cart)
        addQuantity.nextElementSibling.innerText = tmpItem.quantity
      }
      // subtract quantity
      else if (event.target.classList.contains('fa-chevron-down')) {
        let subQuantity = event.target
        let id = subQuantity.dataset.id
        let tmpItem = cart.find( item => item.id === id )
        tmpItem.quantity -= 1
        if (tmpItem.quantity > 0) {
          Storage.saveCart(cart)
          this.setCartValues(cart)
          subQuantity.previousElementSibling.innerText = tmpItem.quantity
        } else {
          cartContent.removeChild(subQuantity.parentElement.parentElement)
          this.clearItem(id)
        }
      }
    })
  }

  // clear cart
  clearCart() {
    let cartItems = cart.map( item => item.id )
    cartItems.forEach( id => this.clearItem(id) )
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0])
    }
    this.closeCart()
  }

  clearItem(id) {
    cart = cart.filter( item => item.id !== id)
    this.setCartValues(cart)
    Storage.saveCart(cart)
    let button = this.getSingleButton(id)
    button.disabled = false
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`
  }

  getSingleButton(id) {
    return buttonsDom.find( button => button.dataset.id === id)
  }

  // set up cart
  setUpApp() {
    cart = Storage.getCart()
    this.setCartValues(cart)
    this.populateCart(cart)
    cartBtn.addEventListener('click', this.showCart)
    closeCartBtn.addEventListener('click', this.closeCart)
  }
}

// local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products))
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'))
    return products.find(product => product.id === id)
  }
  static saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  const products = new Products()
  // set up app
  ui.setUpApp()
  // get all products
  products.getProducts().then( products => {
    ui.displayProducts(products) 
    Storage.saveProducts(products)
  }).then( () => {
    ui.getBagButton()
    ui.cartTask()
  })
})