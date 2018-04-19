import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import Note from './Note';

const props = { note: { text: 'test_note' }}

describe('Note', () => {
  let note = mount(<Note {...props} />);
  it('renders the note text', () => {
    // console.log(note.debug());
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});
