import { debuggingHtml } from './debuggingHtml';

describe('debuggingHtml', () => {
  it('checks dom for validation', () => {
		const htmlDom = new DOMParser().parseFromString(debuggingHtml(), 'text/html');
		const hasParagraphTag = htmlDom.getElementsByName('p') !== undefined;
		const hasUnorderedListTag = htmlDom.getElementsByName('ul') !== undefined;
		const hasListTag = htmlDom.getElementsByName('li') !== undefined;
		expect(hasParagraphTag).toBe(true);
		expect(hasUnorderedListTag).toBe(true);
		expect(hasListTag).toBe(true);
  });
});