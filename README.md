#### JS Testing project for the CleRB presentation

You can watch [Joe Fiorini's](http://http://joefiorini.com/) and my presentation on our history of JavaScript Testing [here](http://www.leandog.tv/clerb-video/).

The project uses the [String Calculator kata](http://osherove.com/tdd-kata-1/).

The [master](https://github.com/adomokos/js_testing) branch introduces the problem. Please take a look at the ```public/index.html``` file.

The [01-jasmine-browser](https://github.com/adomokos/js_testing/tree/01-jasmine-browser) branch has Jasmine's browser example. Check out the branch
and open ```spec/SpecRunner.html```. A new JS file was created under ```public/js/string_calculator.js```. This object is being covered in the ```spec/string_calculator_spec.js``` file.

[02-jasmine-node](https://github.com/adomokos/js_testing/tree/02-jasmine-node) branch introduces jasmine-node. You need to run the necessary npm packages. Plesae run ```npm install``` after you
made sure you have node.js and npm installed. You can execute the tests by running ```make test```. The command ```make test-doc``` will give you the documentation from the spec.

[03-mocha](https://github.com/adomokos/js_testing/tree/03-mocha) will show you the Mocha examples. You need to install the npm packages and run the specs with make.

The [03b-mocha-exports](https://github.com/adomokos/js_testing/tree/03b-mocha-exports) branch has the Mocha exports examples. Please take a look at the spec file in the ```test/string_calculator_spec.js``` file.
You can run the specs by executing ```make test-exports``` in the terminal.

[04-mocha-browser](https://github.com/adomokos/js_testing/tree/04-mocha-browser) branch contains the browser based examples for Mocha. It's very similar to the 01-jasmine-browser example where the specs are executed in the browser.
Run the specs by opening up the ```test/browser/index.html``` in your browser.

Please ping me if you have any questions.
