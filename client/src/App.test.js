import React from 'react';
import ReactDOM from 'react-dom';
import { createShallow } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import App from './App';
import Category from './components/Category.js';
import { expect } from 'chai';
import ItemList from './components/itemList.js';
import Header from './components/Header.jsx';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });


// test for checking components and its functionality
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test for checking Category components and its functionality
describe('<App />', () => {
  it('renders one <Category /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Category)).to.have.lengthOf(1);
  });

  it('renders an `.adCategory`', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper.find('.adCategory')).to.have.lengthOf(1);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><Category className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});


// test for checking Header components and its functionality
describe('<App />', () => {
    it('renders one <Header /> components', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Header)).to.have.lengthOf(1);
    });

    it('renders an `.menu`', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.menu')).to.have.lengthOf(1);
    });

    it('click right in button', () => {
      const wrapper = shallow(<div><Header className="foo" /><div className="foo" /></div>);
      expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
    })
});


// test for checking ItemList components and its functionality
describe('<App />', () => {
  it('renders one <ItemList /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ItemList)).to.have.lengthOf(1);
  });

  it('renders an `.root`', () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper.find('.root')).to.have.lengthOf(1);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><ItemList className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});

