import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    /* test('debe hacer match con el snapshot', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.html() ).toMatchSnapshot()  

    }) */

    test('H2 debe tener el valor por defecto "Counter"', () => {
        const h2 = wrapper.find('h2')

        expect( h2.exists() ).toBeTruthy()

        expect( h2.text() ).toBe('Counter')
    })    

    test('El valor por defecto de Counter debe ser 100', () => {
        /* 
        Prueba con findAll

        const paragraphs = wrapper.findAll('p') 

        expect( paragraphs.length ).toBe(2)
        expect( paragraphs[1].text() ).toBe('100')
        */

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('100')
    })
    
    test('Debe incrementar y decrementar el valor de Counter', async() => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click') 
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')     
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')   

        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('101') 

    })
    
})