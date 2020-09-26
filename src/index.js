import './scss/index.scss'


const show_monthly_price = (parent) => {
  const display_none_class = 'display-none'

  const monthly_price_value_class = 'price-value--monthly'
  const yearly_price_value_class = 'price-value--yearly'

  const monthly_price_value =
    parent.querySelector(`.${monthly_price_value_class}`)
  const yearly_price_value =
    parent.querySelector(`.${yearly_price_value_class}`)

  yearly_price_value.classList.add(display_none_class)
  monthly_price_value.classList.remove(display_none_class)
}



const show_yearly_price = (parent) => {
  const display_none_class = 'display-none'

  const monthly_price_value_class = 'price-value--monthly'
  const yearly_price_value_class = 'price-value--yearly'

  const monthly_price_value =
    parent.querySelector(`.${monthly_price_value_class}`)
  const yearly_price_value =
    parent.querySelector(`.${yearly_price_value_class}`)

  monthly_price_value.classList.add(display_none_class)
  yearly_price_value.classList.remove(display_none_class)
}



const switch_price = (parent) => {
  const toggle_switch_class = 'toggle__switch'
  const toggle_switch_selector = `.${toggle_switch_class}`
  const toggle_checkbox_selector = '.toggle__checkbox'
  const package_card_class = 'package'
  const toggle_selector = '.toggle'
  const toggle_switch_on_class = 'toggle__switch--on'

  const toggleSwitch = parent.querySelector(toggle_switch_selector)
  const packageCards =
    parent.querySelectorAll(`.${package_card_class}`)
  const toggle = parent.querySelector(toggle_selector)
  const toggleCheckbox =
    toggle.querySelector(toggle_checkbox_selector)

  if(toggleCheckbox.checked) {
    toggleSwitch.classList.add(toggle_switch_on_class)
    Array.prototype.forEach.call
      ( packageCards
      , show_monthly_price
      )
  } else {
    toggleSwitch.classList.remove(toggle_switch_on_class)
    Array.prototype.forEach.call
      ( packageCards
      , show_yearly_price
      )
  }
}



const main = (document) => {
  document.addEventListener
    ( 'DOMContentLoaded'
    , () => {
        const container_selector = '.container'
        const toggle_checkbox_selector = '.toggle__checkbox'

        const container = document.querySelector(container_selector)
        const toggleCheckbox =
          container.querySelector(toggle_checkbox_selector)

        switch_price(container)

        toggleCheckbox.addEventListener
          ( 'change'
          , () => switch_price(container)
          )
      }
    )
}


main(document)
