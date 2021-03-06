/**
 * Full HTML5 compatibility rule set
 * These rules define which tags and CSS classes are supported and which tags should be specially treated.
 *
 * Examples based on this rule set:
 *
 *    <a href="http://foobar.com">foo</a>
 *    ... becomes ...
 *    <a href="http://foobar.com" target="_blank" rel="nofollow">foo</a>
 *
 *    <img align="left" src="http://foobar.com/image.png">
 *    ... becomes ...
 *    <img class="wysiwyg-float-left" src="http://foobar.com/image.png" alt="">
 *
 *    <div>foo<script>alert(document.cookie)</script></div>
 *    ... becomes ...
 *    <div>foo</div>
 *
 *    <marquee>foo</marquee>
 *    ... becomes ...
 *    <span>foo</span>
 *
 *    foo <br clear="both"> bar
 *    ... becomes ...
 *    foo <br class="both"> bar
 *
 *    <div>hello <iframe src="http://google.com"></iframe></div>
 *    ... becomes ...
 *    <div>hello </div>
 *
 *    <center>hello</center>
 *    ... becomes ...
 *    <div class="wysiwyg-text-align-center">hello</div>
 */
var wysihtml5ParserRules = {
    /**
     * CSS Class white-list
     * Following CSS classes won't be removed when parsed by the wysihtml5 HTML parser
     */
    "classes": {
        "both": 1,
        "left": 1,
        "right": 1,
        "aqua": 1,
        "black": 1,
        "blue": 1,
        "fuchsia": 1,
        "gray": 1,
        "green": 1,
        "lime": 1,
        "maroon": 1,
        "navy": 1,
        "olive": 1,
        "purple": 1,
        "red": 1,
        "silver": 1,
        "teal": 1,
        "white": 1,
        "yellow": 1,
        "pull-left": 1,
        "pull-right": 1,
        "font-size-large": 1,
        "font-size-larger": 1,
        "font-size-medium": 1,
        "font-size-small": 1,
        "font-size-smaller": 1,
        "font-size-x-large": 1,
        "font-size-x-small": 1,
        "font-size-xx-large": 1,
        "font-size-xx-small": 1,
        "wysiwyg-text-align-center": 1,
        "wysiwyg-text-align-justify": 1,
        "wysiwyg-text-align-left": 1,
        "wysiwyg-text-align-right": 1,
        "text-center":1,
        "text-right":1,
        "text-left":1,
        "container":1,
        "container-fluid":1,
        "row":1,
        ".col-lg-1":1,
		"col-lg-1":1,
		"col-lg-10":1,
		"col-lg-11":1,
		"col-lg-12":1,
		"col-lg-2":1,
		"col-lg-3":1,
		"col-lg-4":1,
		"col-lg-5":1,
		"col-lg-6":1,
		"col-lg-7":1,
		"col-lg-8":1,
		"col-lg-9":1,
		"col-md-1":1,
		"col-md-10":1,
		"col-md-11":1,
		"col-md-12":1,
		"col-md-2":1,
		"col-md-3":1,
		"col-md-4":1,
		"col-md-5":1,
		"col-md-6":1,
		"col-md-7":1,
		"col-md-8":1,
		"col-md-9":1,
		"col-sm-1":1,
		"col-sm-10":1,
		"col-sm-11":1,
		"col-sm-12":1,
		"col-sm-2":1,
		"col-sm-3":1,
		"col-sm-4":1,
		"col-sm-5":1,
		"col-sm-6":1,
		"col-sm-7":1,
		"col-sm-8":1,
		"col-sm-9":1,
		"col-xs-1":1,
		"col-xs-10":1,
		"col-xs-11":1,
		"col-xs-12":1,
		"col-xs-2":1,
		"col-xs-3":1,
		"col-xs-4":1,
		"col-xs-5":1,
		"col-xs-6":1,
		"col-xs-7":1,
		"col-xs-8":1,
		"col-xs-9":1
    },
    /**
     * Tag list
     *
     * The following options are available:
     *
     *    - add_class:        converts and deletes the given HTML4 attribute (align, clear, ...) via the given method to a css class
     *                        The following methods are implemented in wysihtml5.dom.parse:
     *                          - align_text:  converts align attribute values (right/left/center/justify) to their corresponding css class "wysiwyg-text-align-*")
     *                            <p align="center">foo</p> ... becomes ... <p> class="wysiwyg-text-align-center">foo</p>
     *                          - clear_br:    converts clear attribute values left/right/all/both to their corresponding css class "*"
     *                            <br clear="all"> ... becomes ... <br class="both">
     *                          - align_img:    converts align attribute values (right/left) on <img> to their corresponding css class "wysiwyg-float-*"
     *                          
     *    - remove:             removes the element and its content
     *
     *    - rename_tag:         renames the element to the given tag
     *
     *    - set_class:          adds the given class to the element (note: make sure that the class is in the "classes" white list above)
     *
     *    - set_attributes:     sets/overrides the given attributes
     *
     *    - check_attributes:   checks the given HTML attribute via the given method
     *                            - url:            allows only valid urls (starting with http:// or https://)
     *                            - src:            allows something like "/foobar.jpg", "http://google.com", ...
     *                            - href:           allows something like "mailto:bert@foo.com", "http://google.com", "/foobar.jpg"
     *                            - alt:            strips unwanted characters. if the attribute is not set, then it gets set (to ensure valid and compatible HTML)
     *                            - numbers:  ensures that the attribute only contains numeric characters
     */
    "tags": {
        "tr": {
            "add_class": {
                "align": "align_text"
            }
        },
        "strike": {

        },
        "form": {
            "rename_tag": "div"
        },
        "rt": {
            "rename_tag": "span"
        },
        "code": {},
        "acronym": {
            "rename_tag": "span"
        },
        "br": {
            "add_class": {
                "clear": "clear_br"
            }
        },
        "details": {
            "rename_tag": "div"
        },
        "h4": {
            "add_class": {
                "align": "align_text"
            }
        },
        "em": {},
        "title": {

        },
        "multicol": {
            "rename_tag": "div"
        },
        "figure": {
            "rename_tag": "div"
        },
        "xmp": {
            "rename_tag": "span"
        },
        "small": {
            "rename_tag": "span",
            "set_class": "font-size-smaller"
        },
        "area": {

        },
        "time": {
            "rename_tag": "span"
        },
        "dir": {
            "rename_tag": "ul"
        },
        "bdi": {
            "rename_tag": "span"
        },
        "command": {

        },
        "ul": {},
        "progress": {
            "rename_tag": "span"
        },
        "dfn": {
            "rename_tag": "span"
        },
        "iframe": {
                "width": "numbers",
                "alt": "alt",
                "src": "url", // if you compiled master manually then change this from 'url' to 'src'
                "height": "numbers"
        },
        "figcaption": {
            "rename_tag": "div"
        },
        "a": {
            "check_attributes": {
                "href": "url" // if you compiled master manually then change this from 'url' to 'href'
            },
            "set_attributes": {
                "rel": "nofollow",
                "target": "_blank"
            }
        },
        "img": {
            "check_attributes": {
                "width": "numbers",
                "alt": "alt",
                "src": "url", // if you compiled master manually then change this from 'url' to 'src'
                "height": "numbers"
            },
            "add_class": {
                "align": "align_img"
            }
        },
        "rb": {
            "rename_tag": "span"
        },
        "footer": {
            "rename_tag": "div"
        },
        "noframes": {

        },
        "abbr": {
            "rename_tag": "span"
        },
        "u": {},
        "bgsound": {

        },
        "sup": {
            "rename_tag": "span"
        },
        "address": {
            "rename_tag": "div"
        },
        "basefont": {

        },
        "nav": {
            "rename_tag": "div"
        },
        "h1": {
            "add_class": {
                "align": "align_text"
            }
        },
        "head": {

        },
        "tbody": {
            "add_class": {
                "align": "align_text"
            }
        },
        "dd": {
            "rename_tag": "div"
        },
        "s": {
            "rename_tag": "span"
        },
        "li": {},
        "td": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            },
            "add_class": {
                "align": "align_text"
            }
        },
        "object": {

        },
        "div": {
            "add_class": {
                "align": "align_text"
            }
        },
        "option": {
            "rename_tag": "span"
        },
        "select": {
            "rename_tag": "span"
        },
        "i": {},
        "track": {

        },
        "wbr": {

        },
        "fieldset": {
            "rename_tag": "div"
        },
        "big": {
            "rename_tag": "span",
            "set_class": "font-size-larger"
        },
        "button": {
            "rename_tag": "span"
        },
        "noscript": {

        },
        "svg": {

        },
        "input": {

        },
        "table": {},
        "keygen": {

        },
        "h5": {
            "add_class": {
                "align": "align_text"
            }
        },
        "meta": {

        },
        "map": {
            "rename_tag": "div"
        },
        "isindex": {

        },
        "mark": {
            "rename_tag": "span"
        },
        "caption": {
            "add_class": {
                "align": "align_text"
            }
        },
        "tfoot": {
            "add_class": {
                "align": "align_text"
            }
        },
        "base": {

        },
        "video": {

        },
        "strong": {},
        "canvas": {

        },
        "output": {
            "rename_tag": "span"
        },
        "marquee": {
            "rename_tag": "span"
        },
        "b": {},
        "q": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "applet": {

        },
        "span": {},
        "rp": {
            "rename_tag": "span"
        },
        "spacer": {

        },
        "source": {

        },
        "aside": {
            "rename_tag": "div"
        },
        "frame": {

        },
        "section": {
            "rename_tag": "div"
        },
        "body": {
            "rename_tag": "div"
        },
        "ol": {},
        "nobr": {
            "rename_tag": "span"
        },
        "html": {
            "rename_tag": "div"
        },
        "summary": {
            "rename_tag": "span"
        },
        "var": {
            "rename_tag": "span"
        },
        "del": {

        },
        "blockquote": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "style": {

        },
        "device": {

        },
        "meter": {
            "rename_tag": "span"
        },
        "h3": {
            "add_class": {
                "align": "align_text"
            }
        },
        "textarea": {
            "rename_tag": "span"
        },
        "embed": {

        },
        "hgroup": {
            "rename_tag": "div"
        },
        "font": {
            "rename_tag": "span",
            "add_class": {
                "size": "size_font"
            }
        },
        "tt": {
            "rename_tag": "span"
        },
        "noembed": {

        },
        "thead": {
            "add_class": {
                "align": "align_text"
            }
        },
        "blink": {
            "rename_tag": "span"
        },
        "plaintext": {
            "rename_tag": "span"
        },
        "xml": {

        },
        "h6": {
            "add_class": {
                "align": "align_text"
            }
        },
        "param": {

        },
        "th": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            },
            "add_class": {
                "align": "align_text"
            }
        },
        "legend": {
            "rename_tag": "span"
        },
        "hr": {},
        "label": {
            "rename_tag": "span"
        },
        "dl": {
            "rename_tag": "div"
        },
        "kbd": {
            "rename_tag": "span"
        },
        "listing": {
            "rename_tag": "div"
        },
        "dt": {
            "rename_tag": "span"
        },
        "nextid": {

        },
        "pre": {},
        "center": {
            "rename_tag": "div",
            "set_class": "wysiwyg-text-align-center"
        },
        "audio": {

        },
        "datalist": {
            "rename_tag": "span"
        },
        "samp": {
            "rename_tag": "span"
        },
        "col": {

        },
        "article": {
            "rename_tag": "div"
        },
        "cite": {},
        "link": {

        },
        "script": {

        },
        "bdo": {
            "rename_tag": "span"
        },
        "menu": {
            "rename_tag": "ul"
        },
        "colgroup": {

        },
        "ruby": {
            "rename_tag": "span"
        },
        "h2": {
            "add_class": {
                "align": "align_text"
            }
        },
        "ins": {
            "rename_tag": "span"
        },
        "p": {
            "add_class": {
                "align": "align_text"
            }
        },
        "sub": {
            "rename_tag": "span"
        },
        "comment": {

        },
        "frameset": {

        },
        "optgroup": {
            "rename_tag": "span"
        },
        "header": {
            "rename_tag": "div"
        }
    }
};
