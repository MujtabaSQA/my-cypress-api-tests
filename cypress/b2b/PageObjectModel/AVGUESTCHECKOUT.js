class AVGUESTCHECKOUT{

    AVGUESTCHECKOUTEmail()
    {
        return cy.get('#customer-email')
    }

    AVGUESTCHECKOUTFirstName()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'firstname']")
    }

    AVGUESTCHECKOUTLastName()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'lastname']")
    }
    AVGUESTCHECKOUTphonenumber()
    {
        return cy.xpath("//input[@type = 'tel' and @name = 'telephone']")
    }
    AVGUESTCHECKOUTaddress1()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'street[0]']")
    }
    AVGUESTCHECKOUTaddress2()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'street[1]']")
    }
    AVGUESTCHECKOUTcity()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'city']")
    }
    AVGUESTCHECKOUTstate()
    {
        return cy.xpath("//div[@id='shipping-new-address-form']/div[6]/div/select")
    }
    AVGUESTCHECKOUTzipcode()
    {
        return cy.xpath("//input[@type = 'text' and @name = 'postcode']")
    }
    AVGUESTCHECKOUTshipping()
    {
        return cy.get('#checkout-shipping-method-load').eq(0).click()
    }
    AVGUESTCHECKOUTcreditcardnumber()
    {
        return cy.xpath("//input[@id='credit-card-number']")
    }
    AVGUESTCHECKOUTexpiredate()
    {
        return cy.xpath("//input[@id='expiration']")
    }
    AVGUESTCHECKOUTcvv()
    {
        return cy.xpath("//input[@id='cvv']")
    }
    AVGUESTCHECKOUTtermsandcondition()
    {
        return cy.get('#checkout .amcheckout-step-container .checkout-agreement input[type=checkbox]').check({ force: true });

    }
}

export default AVGUESTCHECKOUT;