# generator-riot-element
Generator for riot elements. 
Creates a folder /tags/elements/{elementname}. With a .tag-file and a .css-file.

I use this for skipping boilerplate in my webpack-riot-js setup.

##Usage
Create a new element.
<code><pre>yo riot-element [element-name]
yo riot-element [element-name] [--path put/it/under/this/path]
</pre>
</code>

Create a new page element
<code><pre>yo riot-element:page [element-name]
yo riot-element:page [element-name] [--path put/it/under/this/path]
</pre>
</code>

Create a new functional element
<code><pre>yo riot-element:functional [element-name]
yo riot-element:functional [element-name] [--path put/it/under/this/path]
</pre>
</code>

Elements, page elements and functional elements dont differ in much except the folders they are created in, and that functional elements dont include a css-file.
