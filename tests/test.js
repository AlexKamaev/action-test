fixture `f`
    .page `http://example.com`;

test('t', async t => {
    await t.click('h1');
})
