import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const win = dom.window;

global.window = win;

Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

global.document = window.document;

console.log(document.body);

configure({adapter: new Adapter()});

chai.use(chaiImmutable);