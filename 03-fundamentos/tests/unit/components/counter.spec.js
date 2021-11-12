import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe('Counter Component', () => {

    /* test('debe hacer match con el snapshot', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.html() ).toMatchSnapshot()  

    }) */

    test('H2 debe tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount( Counter )
        const h2 = wrapper.find('h2')

        expect( h2.exists() ).toBeTruthy()

        expect( h2.text() ).toBe('Counter')
    })    

})