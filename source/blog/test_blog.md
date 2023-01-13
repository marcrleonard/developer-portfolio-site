Title: Full blog
Date: 2023-01-07 10:20:01 MST
Category: Python, Another
Tags: python, django
Slug: test-blog
Authors: Marc Leonard
Summary: This is a test blog.

## Otter Wiki 🦦

**Otters** are really great. So are **Wikis**.

You may use common markdown highlighting like *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one


### Pictures

Here is a cute picture of an otter:

![](/img/logo/dark.png)

### Other great things about Otterwiki

Otterwiki supports these great features:

 1. Wiki pages are stored in .md files
 2. All pages are backed by git
 3. Use the wiki in either Annoymous Mode or Authenticated
 4. Markdown web editor has syntax highlighting

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

`this is one line code`

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

[//]: # ()
[//]: # (Tables can look like this:)

[//]: # ()
[//]: # (Name           Size  Material      Color)

[//]: # (------------- -----  ------------  ------------)

[//]: # (All Business      9  leather       brown)

[//]: # (Roundabout       10  hemp canvas   natural)

[//]: # (Cinderella       11  glass         transparent)

[//]: # ()
[//]: # (Table: Shoes sizes, materials, and colors.)

[//]: # ()
[//]: # (&#40;The above is the caption for the table.&#41; Pandoc also supports)

[//]: # (multi-line tables:)

[//]: # ()
[//]: # (--------  -----------------------)

[//]: # (Keyword   Text)

[//]: # (--------  -----------------------)

[//]: # (red       Sunsets, apples, and)

[//]: # (          other red or reddish)

[//]: # (          things.)

[//]: # ()
[//]: # (green     Leaves, grass, frogs)

[//]: # (          and other things it's)

[//]: # (          not easy being.)

[//]: # (--------  -----------------------)

A horizontal rule follows.

***


Again, text is indented 4 spaces. (Put a blank line between each
term and  its definition to spread things out more.)

Here's a "line block" (note how whitespace is honored):

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](/img/news/1.jpg "An exemplary image")

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
