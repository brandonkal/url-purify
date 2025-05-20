import { test, expect } from "vitest";
import { cleanURL } from "./main";

test('main does not add encoding', async () => {
	const input = "https://example.com/?arg=1&arg=https://yo.com#hash"
	const response = await cleanURL(input);
	expect(response).toBe(input);
})