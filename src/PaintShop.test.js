import React from 'react';
import ReactDOM from 'react-dom';
import PaintShop from './components/PaintShop';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Store from './store';
const StoreInstance = Store();

it('renders without crashing', () => {
  const tree = renderer.create(
    <PaintShop store={StoreInstance} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('updates PaintShop owner', () => {
//   const paintShop = shallow(<PaintShop store={StoreInstance} />);
//   expect(paintShop.text()).toEqual('George');
// });
//
// it('changes the roof color', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<PaintShop store={StoreInstance} />, div);
// });
