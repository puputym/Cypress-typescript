import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {ChartPage} from "./pages/chart"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let chartPage = new ChartPage()

const URL = 'https://www.saucedemo.com/'

// add to cart 
it('Test add Product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsOnisie()
    chartPage.clickCart()
    chartPage.assertBacpackAndOnesie()
})


// remove product
it('Test Remove Product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsOnisie()
    chartPage.clickCart()
    chartPage.assertBacpackAndOnesie()
    chartPage.removeBackpakandOnisie()
})