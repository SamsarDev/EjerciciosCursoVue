import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe('Counter Component', () => {

    let wrapper, counterValue

    beforeEach(() => {
        wrapper = shallowMount( Counter )
        counterValue = wrapper.find('[data-testid="counter"]').text()
    })

    /* test('debe hacer match con el snapshot', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.html() ).toMatchSnapshot()  

    }) */

    test('"start" debe tener un valor por defecto', () => {

        const { start } = wrapper.props()

        expect( start ).toBe( Number(counterValue) )
        
    })

    test('el valor por defecto de "start" debe ser 100', () => {
        /* 
        Prueba con findAll

        const paragraphs = wrapper.findAll('p') 

        expect( paragraphs.length ).toBe(2)
        expect( paragraphs[1].text() ).toBe('100')
        */

        expect( counterValue ).toBe('100')
    })
    
    test('debe incrementar y decrementar el valor de "counter"', async() => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click') 
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')     
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')   

        counterValue = wrapper.find('[data-testid="counter"]').text()
        expect( counterValue ).toBe('101') 

    })
    
    test('"title" en h2 debe tener el texto por defecto "Counter"', () => {
        const h2 = wrapper.find('h2')

        expect( h2.exists() ).toBeTruthy()

        expect( h2.text() ).toBe('Counter')
    })    

    test('debe actualizar la propiedad "title"', () => {
        const title = 'Hola mundo!!!'
        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        })

        expect( wrapper.find('h2').text() ).toBe( title )
    })
    

})