# generator-riot-element
Generator for riot elements.
Creates a folder /tags/elements/{elementname}. With a .tag-file and a .css-file.

This is intended for use with this webpack-riotjs setup =>
<a href="https://github.com/opture/generator-webpack-riotjs">generator-webpack-riotjs</a>

## Usage
Create a new element.<br>
<code>
yo riot-element element-name [--path put/it/under/this/path]
</code>

Create a new page element<br>
<code>
yo riot-element:page element-name [--path put/it/under/this/path]
</code>
This will create a page element, it will register for listening to the dispatcher.
It creates boilerplate for setting up the events to listen to.

Create a new store element<br>
<code>
yo riot-element:store element-name [--path put/it/under/this/path]
</code>
This will create a store with boilerplate to register with the dispatcher (if there is one).

Create a new functional element<br>
<code>
yo riot-element:functional element-name [--path put/it/under/this/path]
</code>

--path is a optional and creates subdirectories under which the tag is stored.

Elements, page elements and functional elements dont differ in much except the folders they are created in, and that functional elements dont include a css-file.
