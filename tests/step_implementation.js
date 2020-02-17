"use strict";
const { focus, textBox, click, write, button, currentURL, waitFor, goto, into, title } = require('taiko');
const assert = require("assert");
const envi = process.env.envi;



step("Goto homepage <aplaceformom.com/>", async (homepage) => {
  await goto(envi + homepage);
   //  await goto("https://www.aplaceformom.com/");
})

step("Assert title of the page as <expectedtitle>", async (expectedtitle) => {
    var actualtitle = await title();
  //  var expected = envi + expectedtitle
    assert.equal(actualtitle, expectedtitle);
});

step("click on  text box", async () => {
    await focus(textBox({
        placeholder: "Enter city or postal code"
    }))
});

step("enter <98001> into  text box", async (value) => {
    await write(value, into(textBox({
        placeholder: "Enter city or postal code"
    })));
});

step("click on button <Start Your Search>", async (buttondisplayvalue) => {
    await focus(button(buttondisplayvalue))
    await click(button(buttondisplayvalue))
    // waitFor(async() => { await text('What Happens Next?').exists} )
})

step("verify url of the page as <expectedurl>", async (expectedurl) => {
    await waitFor(5000)
    const actualurl = await currentURL();
    assert.equal(actualurl, envi+expectedurl)
})

