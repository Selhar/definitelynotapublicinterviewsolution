import React from 'react'
import renderer from 'react-test-renderer'
import IndexPage from '../pages/index.js'

describe('With Snapshot Testing', () => {
  it('Index page matches snapshot', () => {
    const component = renderer.create(<IndexPage />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
