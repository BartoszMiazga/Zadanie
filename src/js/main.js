const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobileNav')
const mobileNavItems = document.querySelectorAll('.mobileNav__item')
const allSection = document.querySelectorAll('section')
const allNav = document.querySelectorAll('.nav')







const launchBurgerBtn = () => {
	mobileNav.classList.toggle('isActive')
	burgerBtn.classList.toggle('is-active')

}
const remove = () => {
	mobileNav.foreach.classList.remove('isActive')
}









burgerBtn.addEventListener('click', launchBurgerBtn)
mobileNavItems.forEach(item=> item.addEventListener('click', launchBurgerBtn))
