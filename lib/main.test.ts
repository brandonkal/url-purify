import { expect, test } from 'vitest';
import { cleanURL } from './main';

test('main does not add encoding', async () => {
	const input = 'https://example.com/?arg=1&arg=https://yo.com#hash';
	const response = await cleanURL(input);
	expect(response.url).toBe(input);
});

test('twitter example', async () => {
	const input =
		'https://twitter.com/Br_Nowak/status/1586618354307039234?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1586669502292434944%7Ctwgr%5E2432a774390f7dcbd3b885ac9570cacdb3c48c9d%7Ctwcon%5Es3_&ref_url=https%3A%2F%2Fwww.wprost.pl%2Fpolityka%2F10927933%2Fkuriozalny-wpis-malopolskiej-kurator-oswiaty-przed-1-listopada-internauci-bezlitosni.html';
	const output = await cleanURL(input);
	expect(output).toStrictEqual({
		changes: 2,
		embed: false,
		redirect: false,
		url: 'https://twitter.com/Br_Nowak/status/1586618354307039234',
	});
});

test('YouTube Convert', async () => {
	const input = 'https://youtu.be/kPa7bsKwL-c?si=redacted';
	const output = await cleanURL(input, true);
	expect(output).toStrictEqual({
		changes: 1,
		embed: true,
		redirect: false,
		url: 'https://www.youtube-nocookie.com/embed/kPa7bsKwL-c?mute=1&autoplay=1',
	});
});
