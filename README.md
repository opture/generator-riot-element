# generator-riot-element
Generator for riot elements. 
Creates a folder /tags/elements/{elementname}. With a .tag-file and a .css-file.

This is intended for use with my webpack-riotjs setup.
<a href="https://github.com/opture/webpack-riotjs">webpack-riotjs</a>

##Usage
Create a new element.
<code>
yo riot-element element-name [--path put/it/under/this/path]
</code>

Create a new page element
<code>
yo riot-element:page element-name [--path put/it/under/this/path]
</code>

Create a new functional element
yo riot-element:functional element-name [--path put/it/under/this/path]
</code>

--path is a optional and creates subdirectories to where the tags are stored.

Elements, page elements and functional elements dont differ in much except the folders they are created in, and that functional elements dont include a css-file.
