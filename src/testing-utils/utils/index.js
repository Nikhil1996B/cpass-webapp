import checkPropTypes from 'check-prop-types'

export const checkProps = (component, expectedProps) => {
    const propErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propErr
}

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

