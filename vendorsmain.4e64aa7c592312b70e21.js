/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4700], {
        986907: (e, t, n) => {
            "use strict";
            const r = n(471313);
            e.exports = r
        },
        471313: (e, t, n) => {
            "use strict";
            var r = n(587592),
                i = n(389408),
                o = n(376969),
                s = n(932998);

            function l(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }

            function a(e) {
                let t = s.$getSelection();
                if (null == t) throw Error("Expected valid LexicalSelection");
                return s.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length ? "" : r.$generateHtmlFromNodes(e, t)
            }

            function u(e) {
                let t = s.$getSelection();
                if (null == t) throw Error("Expected valid LexicalSelection");
                return s.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length ? null : JSON.stringify(g(e, t))
            }

            function c(e, t, n) {
                (s.DEPRECATED_$isGridSelection(n) || null !== o.$findMatchingParent(n.anchor.getNode(), (e => s.DEPRECATED_$isGridCellNode(e))) && null !== o.$findMatchingParent(n.focus.getNode(), (e => s.DEPRECATED_$isGridCellNode(e)))) && 1 === t.length && s.DEPRECATED_$isGridNode(t[0]) ? function(e, t, n, r) {
                    1 === e.length && s.DEPRECATED_$isGridNode(e[0]) || l(42);
                    var i = e[0];
                    e = i.getChildren(), n = i.getFirstChildOrThrow().getChildrenSize();
                    var a = i.getChildrenSize(),
                        u = o.$findMatchingParent(t.anchor.getNode(), (e => s.DEPRECATED_$isGridCellNode(e)));
                    t = (i = u && o.$findMatchingParent(u, (e => s.DEPRECATED_$isGridRowNode(e)))) && o.$findMatchingParent(i, (e => s.DEPRECATED_$isGridNode(e))), s.DEPRECATED_$isGridCellNode(u) && s.DEPRECATED_$isGridRowNode(i) && s.DEPRECATED_$isGridNode(t) || l(43);
                    var c = i.getIndexWithinParent(),
                        d = Math.min(t.getChildrenSize() - 1, c + a - 1);
                    let g, f;
                    a = u.getIndexWithinParent(), u = Math.min(i.getChildrenSize() - 1, a + n - 1), n = Math.min(a, u), i = Math.min(c, d), a = Math.max(a, u), c = Math.max(c, d), d = t.getChildren(), u = 0;
                    for (let t = i; t <= c; t++) {
                        var h = d[t];
                        s.DEPRECATED_$isGridRowNode(h) || l(24);
                        var p = e[u];
                        s.DEPRECATED_$isGridRowNode(p) || l(24), h = h.getChildren(), p = p.getChildren();
                        let r = 0;
                        for (let e = n; e <= a; e++) {
                            let o = h[e];
                            s.DEPRECATED_$isGridCellNode(o) || l(25);
                            let u = p[r];
                            s.DEPRECATED_$isGridCellNode(u) || l(25), t === i && e === n ? g = o.getKey() : t === c && e === a && (f = o.getKey());
                            let d = o.getChildren();
                            u.getChildren().forEach((e => {
                                s.$isTextNode(e) && s.$createParagraphNode().append(e), o.append(e)
                            })), d.forEach((e => e.remove())), r++
                        }
                        u++
                    }
                    g && f && ((e = s.DEPRECATED_$createGridSelection()).set(t.getKey(), g, f), s.$setSelection(e), r.dispatchCommand(s.SELECTION_CHANGE_COMMAND, void 0))
                }(t, n, !1, e) : function(e, t) {
                    let n = [],
                        r = null;
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t],
                            o = s.$isLineBreakNode(i);
                        if (o || s.$isDecoratorNode(i) && i.isInline() || s.$isElementNode(i) && i.isInline() || s.$isTextNode(i) || i.isParentRequired()) {
                            if (null === r && (r = i.createParentElementNode(), n.push(r), o)) continue;
                            null !== r && r.append(i)
                        } else n.push(i), r = null
                    }
                    s.$isRangeSelection(t) ? t.insertNodes(n) : s.DEPRECATED_$isGridSelection(t) && (e = t.anchor.getNode(), s.DEPRECATED_$isGridCellNode(e) || l(41), e.append(...n))
                }(t, n)
            }

            function d(e, t, n, r = []) {
                let o = null == t || n.isSelected(t),
                    a = s.$isElementNode(n) && n.excludeFromCopy("html");
                var u = n;
                if (null !== t) {
                    var c = i.$cloneWithProperties(n);
                    u = c = s.$isTextNode(c) && null != t ? i.$sliceSelectedTextNodeContent(t, c) : c
                }
                let g = s.$isElementNode(u) ? u.getChildren() : [];
                var f = u;
                (c = f.exportJSON()).type !== f.constructor.getType() && l(58);
                var h = c.children;
                for (s.$isElementNode(f) && (Array.isArray(h) || l(59)), s.$isTextNode(u) && (0 < (u = u.__text).length ? c.text = u : o = !1), u = 0; u < g.length; u++) h = d(e, t, f = g[u], c.children), !o && s.$isElementNode(n) && h && n.extractWithChild(f, t, "clone") && (o = !0);
                if (o && !a) r.push(c);
                else if (Array.isArray(c.children))
                    for (e = 0; e < c.children.length; e++) r.push(c.children[e]);
                return o
            }

            function g(e, t) {
                let n = [],
                    r = s.$getRoot().getChildren();
                for (let i = 0; i < r.length; i++) d(e, t, r[i], n);
                return {
                    namespace: e._config.namespace,
                    nodes: n
                }
            }

            function f(e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                    let r = s.$parseSerializedNode(e[n]);
                    s.$isTextNode(r) && i.$addNodeStyle(r), t.push(r)
                }
                return t
            }
            let h = null;

            function p(e, t) {
                var n = window.getSelection();
                if (!n) return !1;
                var r = n.anchorNode;
                if (n = n.focusNode, null !== r && null !== n && !s.isSelectionWithinEditor(e, r, n)) return !1;
                if (t.preventDefault(), t = t.clipboardData, r = s.$getSelection(), null === t || null === r) return !1;
                n = a(e), e = u(e);
                let i = "";
                return null !== r && (i = r.getTextContent()), null !== n && t.setData("text/html", n), null !== e && t.setData("application/x-lexical-editor", e), t.setData("text/plain", i), !0
            }
            t.$generateJSONFromSelectedNodes = g, t.$generateNodesFromSerializedNodes = f, t.$getHtmlContent = a, t.$getLexicalContent = u, t.$insertDataTransferForPlainText = function(e, t) {
                null != (e = e.getData("text/plain") || e.getData("text/uri-list")) && t.insertRawText(e)
            }, t.$insertDataTransferForRichText = function(e, t, n) {
                var i = e.getData("application/x-lexical-editor");
                if (i) try {
                    let e = JSON.parse(i);
                    if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) {
                        return c(n, f(e.nodes), t)
                    }
                } catch {}
                if (i = e.getData("text/html")) try {
                    var o = (new DOMParser).parseFromString(i, "text/html"),
                        l = r.$generateNodesFromDOM(n, o);
                    return c(n, l, t)
                } catch {}
                if (null != (e = e.getData("text/plain") || e.getData("text/uri-list")))
                    if (s.$isRangeSelection(t))
                        for (n = (e = e.split(/(\r?\n|\t)/)).length, o = 0; o < n; o++) "\n" === (l = e[o]) || "\r\n" === l ? t.insertParagraph() : "\t" === l ? t.insertNodes([s.$createTabNode()]) : t.insertText(l);
                    else t.insertRawText(e)
            }, t.$insertGeneratedNodes = c, t.copyToClipboard = async function(e, t) {
                if (null !== h) return !1;
                if (null !== t) return new Promise((n => {
                    e.update((() => {
                        n(p(e, t))
                    }))
                }));
                var n = e.getRootElement();
                let r = document.getSelection();
                if (null === n || null === r) return !1;
                let i = document.createElement("span");
                return i.style.cssText = "position: fixed; top: -1000px;", i.append(document.createTextNode("#")), n.append(i), (n = new Range).setStart(i, 0), n.setEnd(i, 1), r.removeAllRanges(), r.addRange(n), new Promise((t => {
                    let n = e.registerCommand(s.COPY_COMMAND, (r => (r instanceof ClipboardEvent && (n(), null !== h && (window.clearTimeout(h), h = null), t(p(e, r))), !0)), s.COMMAND_PRIORITY_CRITICAL);
                    h = window.setTimeout((() => {
                        n(), h = null, t(!1)
                    }), 50), document.execCommand("copy"), i.remove()
                }))
            }
        },
        323277: (e, t, n) => {
            "use strict";
            const r = n(588233);
            e.exports = r
        },
        588233: (e, t, n) => {
            "use strict";
            var r = n(915660);
            n(735433), n(939980), n(524335), n(424064), n(804279), n(115251), n(11426), n(335266), n(180366), n(470767), n(590874), n(496836), n(652503), n(402731);
            var i = n(376969),
                o = n(932998);
            let s = e => null != e && r.languages.hasOwnProperty(e) ? e : void 0;

            function l(e, t) {
                for (let n of e.childNodes) {
                    if (i.isHTMLElement(n) && n.tagName === t) return !0;
                    l(n, t)
                }
                return !1
            }
            class a extends o.ElementNode {
                static getType() {
                    return "code"
                }
                static clone(e) {
                    return new a(e.__language, e.__key)
                }
                constructor(e, t) {
                    super(t), this.__language = s(e)
                }
                createDOM(e) {
                    let t = document.createElement("code");
                    return i.addClassNamesToElement(t, e.theme.code), t.setAttribute("spellcheck", "false"), (e = this.getLanguage()) && t.setAttribute("data-highlight-language", e), t
                }
                updateDOM(e, t) {
                    let n = this.__language;
                    return e = e.__language, n ? n !== e && t.setAttribute("data-highlight-language", n) : e && t.removeAttribute("data-highlight-language"), !1
                }
                static importDOM() {
                    return {
                        code: e => null != e.textContent && (/\r?\n/.test(e.textContent) || l(e, "BR")) ? {
                            conversion: d,
                            priority: 1
                        } : null,
                        div: () => ({
                            conversion: g,
                            priority: 1
                        }),
                        pre: () => ({
                            conversion: d,
                            priority: 0
                        }),
                        table: e => _(e) ? {
                            conversion: f,
                            priority: 3
                        } : null,
                        td: e => {
                            let t = e.closest("table");
                            return e.classList.contains("js-file-line") ? {
                                conversion: p,
                                priority: 3
                            } : t && _(t) ? {
                                conversion: h,
                                priority: 3
                            } : null
                        },
                        tr: e => (e = e.closest("table")) && _(e) ? {
                            conversion: h,
                            priority: 3
                        } : null
                    }
                }
                static importJSON(e) {
                    let t = u(e.language);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        language: this.getLanguage(),
                        type: "code",
                        version: 1
                    }
                }
                insertNewAfter(e, t = !0) {
                    var n = this.getChildren(),
                        r = n.length;
                    if (2 <= r && "\n" === n[r - 1].getTextContent() && "\n" === n[r - 2].getTextContent() && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === r) return n[r - 1].remove(), n[r - 2].remove(), e = o.$createParagraphNode(), this.insertAfter(e, t), e;
                    if (t = e.anchor, n = e.focus, C(t = (t.isBefore(n) ? t : n).getNode()) || o.$isTabNode(t)) {
                        for (t = x(t), n = [];;)
                            if (o.$isTabNode(t)) n.push(o.$createTabNode()), t = t.getNextSibling();
                            else {
                                if (!C(t)) break; {
                                    r = 0;
                                    let e = t.getTextContent(),
                                        i = t.getTextContentSize();
                                    for (; r < i && " " === e[r]; r++);
                                    if (0 !== r && n.push(E(" ".repeat(r))), r !== i) break;
                                    t = t.getNextSibling()
                                }
                            }
                        if (0 < n.length) return e.insertNodes([o.$createLineBreakNode(), ...n]), n[n.length - 1]
                    }
                    return null
                }
                canIndent() {
                    return !1
                }
                collapseAtStart() {
                    let e = o.$createParagraphNode();
                    return this.getChildren().forEach((t => e.append(t))), this.replace(e), !0
                }
                setLanguage(e) {
                    this.getWritable().__language = s(e)
                }
                getLanguage() {
                    return this.getLatest().__language
                }
            }

            function u(e) {
                return o.$applyNodeReplacement(new a(e))
            }

            function c(e) {
                return e instanceof a
            }

            function d() {
                return {
                    node: u()
                }
            }

            function g(e) {
                let t = null !== e.style.fontFamily.match("monospace");
                return t || function(e) {
                    for (e = e.parentElement; null !== e;) {
                        if (null !== e.style.fontFamily.match("monospace")) return !0;
                        e = e.parentElement
                    }
                    return !1
                }(e) ? {
                    after: t => {
                        let n = e.parentNode;
                        return null != n && e !== n.lastChild && t.push(o.$createLineBreakNode()), t
                    },
                    node: t ? u() : null
                } : {
                    node: null
                }
            }

            function f() {
                return {
                    node: u()
                }
            }

            function h() {
                return {
                    node: null
                }
            }

            function p(e) {
                return {
                    after: t => (e.parentNode && e.parentNode.nextSibling && t.push(o.$createLineBreakNode()), t),
                    node: null
                }
            }

            function _(e) {
                return e.classList.contains("js-file-line-container")
            }
            let m = {
                    c: "C",
                    clike: "C-like",
                    cpp: "C++",
                    css: "CSS",
                    html: "HTML",
                    java: "Java",
                    js: "JavaScript",
                    markdown: "Markdown",
                    objc: "Objective-C",
                    plain: "Plain Text",
                    py: "Python",
                    rust: "Rust",
                    sql: "SQL",
                    swift: "Swift",
                    typescript: "TypeScript",
                    xml: "XML"
                },
                y = {
                    cpp: "cpp",
                    java: "java",
                    javascript: "js",
                    md: "markdown",
                    plaintext: "plain",
                    python: "py",
                    text: "plain",
                    ts: "typescript"
                };

            function N(e) {
                return y[e] || e
            }
            class v extends o.TextNode {
                constructor(e, t, n) {
                    super(e, n), this.__highlightType = t
                }
                static getType() {
                    return "code-highlight"
                }
                static clone(e) {
                    return new v(e.__text, e.__highlightType || void 0, e.__key)
                }
                getHighlightType() {
                    return this.getLatest().__highlightType
                }
                createDOM(e) {
                    let t = super.createDOM(e);
                    return e = T(e.theme, this.__highlightType), i.addClassNamesToElement(t, e), t
                }
                updateDOM(e, t, n) {
                    let r = super.updateDOM(e, t, n);
                    return (e = T(n.theme, e.__highlightType)) !== (n = T(n.theme, this.__highlightType)) && (e && i.removeClassNamesFromElement(t, e), n && i.addClassNamesToElement(t, n)), r
                }
                static importJSON(e) {
                    let t = E(e.text, e.highlightType);
                    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        highlightType: this.getHighlightType(),
                        type: "code-highlight",
                        version: 1
                    }
                }
                setFormat() {
                    return this
                }
                isParentRequired() {
                    return !0
                }
                createParentElementNode() {
                    return u()
                }
            }

            function T(e, t) {
                return t && e && e.codeHighlight && e.codeHighlight[t]
            }

            function E(e, t) {
                return o.$applyNodeReplacement(new v(e, t))
            }

            function C(e) {
                return e instanceof v
            }

            function x(e) {
                let t = e;
                for (; C(e) || o.$isTabNode(e);) t = e, e = e.getPreviousSibling();
                return t
            }

            function b(e) {
                let t = e;
                for (; C(e) || o.$isTabNode(e);) t = e, e = e.getNextSibling();
                return t
            }
            let S = {
                defaultLanguage: "javascript",
                tokenize(e, t) {
                    return r.tokenize(e, r.languages[t || ""] || r.languages[this.defaultLanguage])
                }
            };

            function A(e, t) {
                let n = null;
                var r = null,
                    i = e;
                let s = t,
                    l = e.getTextContent();
                for (;;) {
                    if (0 === s) {
                        if (null === (i = i.getPreviousSibling())) break;
                        if (!(C(i) || o.$isTabNode(i) || o.$isLineBreakNode(i))) throw Error("Expected a valid Code Node: CodeHighlightNode, TabNode, LineBreakNode");
                        if (o.$isLineBreakNode(i)) {
                            n = {
                                node: i,
                                offset: 1
                            };
                            break
                        }
                        s = Math.max(0, i.getTextContentSize() - 1), l = i.getTextContent()
                    } else s--;
                    let e = l[s];
                    C(i) && " " !== e && (r = {
                        node: i,
                        offset: s
                    })
                }
                if (null !== r) return r;
                if (r = null, t < e.getTextContentSize() ? C(e) && (r = e.getTextContent()[t]) : C(i = e.getNextSibling()) && (r = i.getTextContent()[0]), null !== r && " " !== r) return n;
                e: for (r = e, i = e.getTextContent(), e = e.getTextContentSize();;) {
                    if (!C(r) || t === e) {
                        if (null === (r = r.getNextSibling()) || o.$isLineBreakNode(r)) {
                            e = null;
                            break e
                        }
                        C(r) && (t = 0, i = r.getTextContent(), e = r.getTextContentSize())
                    }
                    if (C(r)) {
                        if (" " !== i[t]) {
                            e = {
                                node: r,
                                offset: t
                            };
                            break e
                        }
                        t++
                    }
                }
                return null !== e ? e : n
            }

            function O(e) {
                if (e = b(e), o.$isLineBreakNode(e)) throw Error("Unexpected lineBreakNode in getEndOfCodeInLine");
                return e
            }

            function w(e, t, n) {
                let r = e.getParent();
                c(r) ? R(r, t, n) : C(e) && e.replace(o.$createTextNode(e.__text))
            }
            let k = new Set;

            function R(e, t, n) {
                let r = e.getKey();
                k.has(r) || (k.add(r), void 0 === e.getLanguage() && e.setLanguage(n.defaultLanguage), t.update((() => {
                    ! function(e, t) {
                        if (c(e = o.$getNodeByKey(e)) && e.isAttached()) {
                            var n = o.$getSelection();
                            if (o.$isRangeSelection(n)) {
                                var r = (n = n.anchor).offset,
                                    i = "element" === n.type && o.$isLineBreakNode(e.getChildAtIndex(n.offset - 1)),
                                    s = 0;
                                if (!i) {
                                    let e = n.getNode();
                                    s = r + e.getPreviousSiblings().reduce(((e, t) => e + t.getTextContentSize()), 0)
                                }
                                t() && (i ? n.getNode().select(r, r) : e.getChildren().some((e => {
                                    let t = o.$isTextNode(e);
                                    if (t || o.$isLineBreakNode(e)) {
                                        let n = e.getTextContentSize();
                                        if (t && n >= s) return e.select(s, s), !0;
                                        s -= n
                                    }
                                    return !1
                                })))
                            } else t()
                        }
                    }(r, (() => {
                        var t = o.$getNodeByKey(r);
                        if (!c(t) || !t.isAttached()) return !1;
                        var i = t.getTextContent();
                        i = D(i = n.tokenize(i, t.getLanguage() || n.defaultLanguage));
                        var s = t.getChildren();
                        for (t = 0; t < s.length && M(s[t], i[t]);) t++;
                        var l = s.length;
                        let a = i.length,
                            u = Math.min(l, a) - t,
                            d = 0;
                        for (; d < u;)
                            if (d++, !M(s[l - d], i[a - d])) {
                                d--;
                                break
                            }
                        s = t, l -= d, i = i.slice(t, a - d);
                        let {
                            from: g,
                            to: f,
                            nodesForReplacement: h
                        } = {
                            from: s,
                            nodesForReplacement: i,
                            to: l
                        };
                        return !(g === f && !h.length) && (e.splice(g, f - g, h), !0)
                    }))
                }), {
                    onUpdate: () => {
                        k.delete(r)
                    },
                    skipTransforms: !0
                }))
            }

            function D(e) {
                let t = [];
                return e.forEach((e => {
                    if ("string" == typeof e) {
                        var n = (e = e.split(/(\n|\t)/)).length;
                        for (let r = 0; r < n; r++) {
                            let n = e[r];
                            "\n" === n || "\r\n" === n ? t.push(o.$createLineBreakNode()) : "\t" === n ? t.push(o.$createTabNode()) : 0 < n.length && t.push(E(n))
                        }
                    } else({
                        content: n
                    } = e), "string" == typeof n ? t.push(E(n, e.type)) : Array.isArray(n) && 1 === n.length && "string" == typeof n[0] ? t.push(E(n[0], e.type)) : Array.isArray(n) && t.push(...D(n))
                })), t
            }

            function M(e, t) {
                return C(e) && C(t) && e.__text === t.__text && e.__highlightType === t.__highlightType || o.$isTabNode(e) && o.$isTabNode(t) || o.$isLineBreakNode(e) && o.$isLineBreakNode(t)
            }

            function $(e) {
                if (!o.$isRangeSelection(e)) return !1;
                var t = e.anchor.getNode();
                return e = e.focus.getNode(), !(!t.is(e) || !c(t)) || c(t = t.getParent()) && t.is(e.getParent())
            }

            function I(e) {
                let t = [
                    []
                ];
                if (1 === (e = e.getNodes()).length && c(e[0])) return t;
                let n = t[0];
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if (!(C(i) || o.$isTabNode(i) || o.$isLineBreakNode(i))) throw Error("Expected selection to be inside CodeBlock and consisting of CodeHighlightNode, TabNode and LineBreakNode");
                    o.$isLineBreakNode(i) ? 0 !== r && 0 < n.length && (n = [], t.push(n)) : n.push(i)
                }
                return t
            }

            function P(e) {
                var t = o.$getSelection();
                if (!o.$isRangeSelection(t) || !$(t)) return !1;
                var n = I(t);
                let r = n.length;
                if (1 < n.length) {
                    for (t = 0; t < r; t++) {
                        var i = n[t];
                        0 < i.length && (i = i[0], 0 === t && (i = x(i)), null !== i && (e === o.INDENT_CONTENT_COMMAND ? i.insertBefore(o.$createTabNode()) : o.$isTabNode(i) && i.remove()))
                    }
                    return !0
                }
                if (!(c(n = t.getNodes()[0]) || C(n) || o.$isTabNode(n) || o.$isLineBreakNode(n))) throw Error("Expected selection firstNode to be CodeHighlightNode or CodeTabNode");
                if (c(n)) return e === o.INDENT_CONTENT_COMMAND && t.insertNodes([o.$createTabNode()]), !0;
                if (null === (n = x(n))) throw Error("Expected getFirstCodeNodeOfLine to return a valid Code Node");
                return e === o.INDENT_CONTENT_COMMAND ? o.$isLineBreakNode(n) ? n.insertAfter(o.$createTabNode()) : n.insertBefore(o.$createTabNode()) : o.$isTabNode(n) && n.remove(), !0
            }

            function L(e, t) {
                let n = o.$getSelection();
                if (!o.$isRangeSelection(n)) return !1;
                let {
                    anchor: r,
                    focus: i
                } = n, s = r.offset, l = i.offset, a = r.getNode(), u = i.getNode();
                var c = e === o.KEY_ARROW_UP_COMMAND;
                if (!$(n) || !C(a) && !o.$isTabNode(a) || !C(u) && !o.$isTabNode(u)) return !1;
                if (!t.altKey) {
                    if (n.isCollapsed())
                        if (e = a.getParentOrThrow(), c && 0 === s && null === a.getPreviousSibling()) {
                            if (null === e.getPreviousSibling()) return e.selectPrevious(), t.preventDefault(), !0
                        } else if (!c && s === a.getTextContentSize() && null === a.getNextSibling() && null === e.getNextSibling()) return e.selectNext(), t.preventDefault(), !0;
                    return !1
                }
                let d;
                if (a.isBefore(u)) {
                    var g = x(a);
                    d = b(u)
                } else g = x(u), d = b(a);
                if (null == g || null == d) return !1;
                let f = g.getNodesBetween(d);
                for (let e = 0; e < f.length; e++) {
                    let t = f[e];
                    if (!C(t) && !o.$isTabNode(t) && !o.$isLineBreakNode(t)) return !1
                }
                if (t.preventDefault(), t.stopPropagation(), t = c ? g.getPreviousSibling() : d.getNextSibling(), !o.$isLineBreakNode(t)) return !0;
                if (null == (g = c ? t.getPreviousSibling() : t.getNextSibling())) return !0;
                let h = null != (c = C(g) || o.$isTabNode(g) || o.$isLineBreakNode(g) ? c ? x(g) : b(g) : null) ? c : g;
                return t.remove(), f.forEach((e => e.remove())), e === o.KEY_ARROW_UP_COMMAND ? (f.forEach((e => h.insertBefore(e))), h.insertBefore(t)) : (h.insertAfter(t), h = t, f.forEach((e => {
                    h.insertAfter(e), h = e
                }))), n.setTextNodeRange(a, s, u, l), !0
            }

            function F(e, t) {
                let n = o.$getSelection();
                if (!o.$isRangeSelection(n)) return !1;
                let {
                    anchor: r,
                    focus: i
                } = n;
                var s = r.getNode();
                let l = i.getNode();
                if (e = e === o.MOVE_TO_START, !C(s) && !o.$isTabNode(s) || !C(l) && !o.$isTabNode(l)) return !1;
                if (e)
                    if (null !== (s = A(l, i.offset))) {
                        let {
                            node: e,
                            offset: t
                        } = s;
                        o.$isLineBreakNode(e) ? e.selectNext(0, 0) : n.setTextNodeRange(e, t, e, t)
                    } else l.getParentOrThrow().selectStart();
                else O(l).select();
                return t.preventDefault(), t.stopPropagation(), !0
            }
            t.$createCodeHighlightNode = E, t.$createCodeNode = u, t.$isCodeHighlightNode = C, t.$isCodeNode = c, t.CODE_LANGUAGE_FRIENDLY_NAME_MAP = m, t.CODE_LANGUAGE_MAP = y, t.CodeHighlightNode = v, t.CodeNode = a, t.DEFAULT_CODE_LANGUAGE = "javascript", t.PrismTokenizer = S, t.getCodeLanguages = () => Object.keys(r.languages).filter((e => "function" != typeof r.languages[e])).sort(), t.getDefaultCodeLanguage = () => "javascript", t.getEndOfCodeInLine = O, t.getFirstCodeNodeOfLine = x, t.getLanguageFriendlyName = function(e) {
                return e = N(e), m[e] || e
            }, t.getLastCodeNodeOfLine = b, t.getStartOfCodeInLine = A, t.normalizeCodeLang = N, t.registerCodeHighlighting = function(e, t) {
                if (!e.hasNodes([a, v])) throw Error("CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor");
                return null == t && (t = S), i.mergeRegister(e.registerMutationListener(a, (t => {
                    e.update((() => {
                        for (let [i, s] of t)
                            if ("destroyed" !== s) {
                                var n = o.$getNodeByKey(i);
                                if (null !== n) e: {
                                    var r = n;
                                    if (null === (n = e.getElementByKey(r.getKey()))) break e;
                                    let t = (r = r.getChildren()).length;
                                    if (t === n.__cachedChildrenLength) break e;n.__cachedChildrenLength = t;
                                    let i = "1",
                                        s = 1;
                                    for (let e = 0; e < t; e++) o.$isLineBreakNode(r[e]) && (i += "\n" + ++s);n.setAttribute("data-gutter", i)
                                }
                            }
                    }))
                })), e.registerNodeTransform(a, (n => R(n, e, t))), e.registerNodeTransform(o.TextNode, (n => w(n, e, t))), e.registerNodeTransform(v, (n => w(n, e, t))), e.registerCommand(o.KEY_TAB_COMMAND, (t => {
                    let n = function(e) {
                        var t = o.$getSelection();
                        if (!o.$isRangeSelection(t) || !$(t)) return null;
                        let n = e ? o.OUTDENT_CONTENT_COMMAND : o.INDENT_CONTENT_COMMAND;
                        if (e = e ? o.OUTDENT_CONTENT_COMMAND : o.INSERT_TAB_COMMAND, 1 < I(t).length) return n;
                        var r = t.getNodes()[0];
                        if (!(c(r) || C(r) || o.$isTabNode(r) || o.$isLineBreakNode(r))) throw Error("Expected selection firstNode to be CodeHighlightNode or TabNode");
                        if (c(r)) return n;
                        let i = x(r);
                        r = b(r);
                        var s = t.anchor;
                        let l = t.focus;
                        return l.isBefore(s) ? t = l : (t = s, s = l), null !== i && null !== r && t.key === i.getKey() && 0 === t.offset && s.key === r.getKey() && s.offset === r.getTextContentSize() ? n : e
                    }(t.shiftKey);
                    return null !== n && (t.preventDefault(), e.dispatchCommand(n, void 0), !0)
                }), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.INSERT_TAB_COMMAND, (() => !!$(o.$getSelection()) && (o.$insertNodes([o.$createTabNode()]), !0)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.INDENT_CONTENT_COMMAND, (() => P(o.INDENT_CONTENT_COMMAND)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.OUTDENT_CONTENT_COMMAND, (() => P(o.OUTDENT_CONTENT_COMMAND)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.KEY_ARROW_UP_COMMAND, (e => L(o.KEY_ARROW_UP_COMMAND, e)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.KEY_ARROW_DOWN_COMMAND, (e => L(o.KEY_ARROW_DOWN_COMMAND, e)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.MOVE_TO_END, (e => F(o.MOVE_TO_END, e)), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.MOVE_TO_START, (e => F(o.MOVE_TO_START, e)), o.COMMAND_PRIORITY_LOW))
            }
        },
        570573: (e, t, n) => {
            "use strict";
            const r = n(97370);
            e.exports = r
        },
        97370: (e, t, n) => {
            "use strict";
            var r = n(932998);
            t.registerDragonSupport = function(e) {
                let t = window.location.origin,
                    n = n => {
                        if (n.origin === t) {
                            var i = e.getRootElement();
                            if (document.activeElement === i && "string" == typeof(i = n.data)) {
                                try {
                                    var o = JSON.parse(i)
                                } catch (e) {
                                    return
                                }
                                if (o && "nuanria_messaging" === o.protocol && "request" === o.type && (o = o.payload) && "makeChanges" === o.functionId && (o = o.args)) {
                                    const [t, i, s, l, a] = o;
                                    e.update((() => {
                                        const e = r.$getSelection();
                                        if (r.$isRangeSelection(e)) {
                                            var o = e.anchor;
                                            let u = o.getNode(),
                                                c = 0,
                                                d = 0;
                                            r.$isTextNode(u) && 0 <= t && 0 <= i && (c = t, d = t + i, e.setTextNodeRange(u, c, u, d)), c === d && "" === s || (e.insertRawText(s), u = o.getNode()), r.$isTextNode(u) && (c = l, d = l + a, c = c > (o = u.getTextContentSize()) ? o : c, d = d > o ? o : d, e.setTextNodeRange(u, c, u, d)), n.stopImmediatePropagation()
                                        }
                                    }))
                                }
                            }
                        }
                    };
                return window.addEventListener("message", n, !0), () => {
                    window.removeEventListener("message", n, !0)
                }
            }
        },
        548854: (e, t, n) => {
            "use strict";
            const r = n(654379);
            e.exports = r
        },
        654379: (e, t, n) => {
            "use strict";
            var r = n(376969),
                i = n(932998);

            function o(e, t) {
                let n = Date.now(),
                    r = 0;
                return (o, s, l, a, u, c) => {
                    let d = Date.now();
                    if (c.has("historic")) return r = 0, n = d, 2;
                    let g = function(e, t, n, r, o) {
                            if (null === e || 0 === n.size && 0 === r.size && !o) return 0;
                            var s = t._selection,
                                l = e._selection;
                            if (o) return 1;
                            if (!(i.$isRangeSelection(s) && i.$isRangeSelection(l) && l.isCollapsed() && s.isCollapsed())) return 0;
                            o = t._nodeMap;
                            let a = [];
                            for (let e of n) void 0 !== (n = o.get(e)) && a.push(n);
                            for (let [e, t] of r) t && (void 0 === (r = o.get(e)) || i.$isRootNode(r) || a.push(r));
                            return 0 === a.length ? 0 : 1 < a.length ? (t = (r = t._nodeMap).get(s.anchor.key), l = r.get(l.anchor.key), t && l && !e._nodeMap.has(t.__key) && i.$isTextNode(t) && 1 === t.__text.length && 1 === s.anchor.offset ? 2 : 0) : (t = a[0], e = e._nodeMap.get(t.__key), i.$isTextNode(e) && i.$isTextNode(t) && e.__mode === t.__mode ? (e = e.__text) === (t = t.__text) ? 0 : (s = s.anchor, l = l.anchor, s.key !== l.key || "text" !== s.type ? 0 : (s = s.offset, l = l.offset, 1 == (e = t.length - e.length) && l === s - 1 ? 2 : -1 === e && l === s + 1 ? 3 : -1 === e && l === s ? 4 : 0)) : 0)
                        }(o, s, a, u, e.isComposing()),
                        f = (() => {
                            var f = null === l || l.editor === e,
                                h = c.has("history-push");
                            if (!h && f && c.has("history-merge")) return 0;
                            if (null === o) return 1;
                            var p = s._selection;
                            if (!(0 < a.size || 0 < u.size)) return null !== p ? 0 : 2;
                            if (!1 === h && 0 !== g && g === r && d < n + t && f) return 0;
                            if (1 === a.size) {
                                {
                                    h = Array.from(a)[0], f = o._nodeMap.get(h), h = s._nodeMap.get(h), p = o._selection;
                                    let e = s._selection,
                                        t = !1;
                                    i.$isRangeSelection(p) && i.$isRangeSelection(e) && (t = "element" === p.anchor.type && "element" === p.focus.type && "text" === e.anchor.type && "text" === e.focus.type), f = !(t || !i.$isTextNode(f) || !i.$isTextNode(h)) && (f.__type === h.__type && f.__text === h.__text && f.__mode === h.__mode && f.__detail === h.__detail && f.__style === h.__style && f.__format === h.__format && f.__parent === h.__parent)
                                }
                                if (f) return 0
                            }
                            return 1
                        })();
                    return n = d, r = g, f
                }
            }
            t.createEmptyHistoryState = function() {
                return {
                    current: null,
                    redoStack: [],
                    undoStack: []
                }
            }, t.registerHistory = function(e, t, n) {
                let s = o(e, n);
                n = ({
                    editorState: n,
                    prevEditorState: r,
                    dirtyLeaves: o,
                    dirtyElements: l,
                    tags: a
                }) => {
                    const u = t.current,
                        c = t.redoStack,
                        d = t.undoStack,
                        g = null === u ? null : u.editorState;
                    if (null === u || n !== g) {
                        if (1 === (r = s(r, n, u, o, l, a))) 0 !== c.length && (t.redoStack = [], e.dispatchCommand(i.CAN_REDO_COMMAND, !1)), null !== u && (d.push({ ...u
                        }), e.dispatchCommand(i.CAN_UNDO_COMMAND, !0));
                        else if (2 === r) return;
                        t.current = {
                            editor: e,
                            editorState: n
                        }
                    }
                };
                let l = r.mergeRegister(e.registerCommand(i.UNDO_COMMAND, (() => {
                        let n = t.redoStack,
                            r = t.undoStack;
                        if (0 !== r.length) {
                            let o = t.current,
                                s = r.pop();
                            null !== o && (n.push(o), e.dispatchCommand(i.CAN_REDO_COMMAND, !0)), 0 === r.length && e.dispatchCommand(i.CAN_UNDO_COMMAND, !1), t.current = s || null, s && s.editor.setEditorState(s.editorState, {
                                tag: "historic"
                            })
                        }
                        return !0
                    }), i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.REDO_COMMAND, (() => {
                        let n = t.redoStack;
                        var r = t.undoStack;
                        if (0 !== n.length) {
                            let o = t.current;
                            null !== o && (r.push(o), e.dispatchCommand(i.CAN_UNDO_COMMAND, !0)), r = n.pop(), 0 === n.length && e.dispatchCommand(i.CAN_REDO_COMMAND, !1), t.current = r || null, r && r.editor.setEditorState(r.editorState, {
                                tag: "historic"
                            })
                        }
                        return !0
                    }), i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_EDITOR_COMMAND, (() => (t.undoStack = [], t.redoStack = [], t.current = null, !1)), i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_HISTORY_COMMAND, (() => (t.undoStack = [], t.redoStack = [], t.current = null, e.dispatchCommand(i.CAN_REDO_COMMAND, !1), e.dispatchCommand(i.CAN_UNDO_COMMAND, !1), !0)), i.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n)),
                    a = e.registerUpdateListener(n);
                return () => {
                    l(), a()
                }
            }
        },
        587592: (e, t, n) => {
            "use strict";
            const r = n(164478);
            e.exports = r
        },
        164478: (e, t, n) => {
            "use strict";
            var r = n(389408),
                i = n(932998);

            function o(e, t, n, s = null) {
                let l = null == s || t.isSelected(s),
                    a = i.$isElementNode(t) && t.excludeFromCopy("html");
                var u = t;
                null !== s && (u = r.$cloneWithProperties(t), u = i.$isTextNode(u) && null != s ? r.$sliceSelectedTextNodeContent(s, u) : u);
                let c = i.$isElementNode(u) ? u.getChildren() : [],
                    {
                        element: d,
                        after: g
                    } = u.exportDOM(e);
                if (!d) return !1;
                let f = document.createDocumentFragment();
                for (let n = 0; n < c.length; n++) {
                    let r = c[n],
                        a = o(e, r, f, s);
                    !l && i.$isElementNode(t) && a && t.extractWithChild(r, s, "html") && (l = !0)
                }
                return l && !a ? (d.append(f), n.append(d), g && (e = g.call(u, d)) && d.replaceWith(e)) : n.append(f), l
            }
            let s = new Set(["STYLE", "SCRIPT"]);

            function l(e, t, n = new Map, r) {
                let o = [];
                if (s.has(e.nodeName)) return o;
                let a = null;
                var u, {
                        nodeName: c
                    } = e,
                    d = t._htmlConversions.get(c.toLowerCase());
                if (c = null, void 0 !== d)
                    for (u of d) null !== (d = u(e)) && (null === c || c.priority < d.priority) && (c = d);
                if (c = (u = null !== c ? c.conversion : null) ? u(e) : null, u = null, null !== c) {
                    if (u = c.after, d = c.node, a = Array.isArray(d) ? d[d.length - 1] : d, null !== a) {
                        for (var [, g] of n)
                            if (a = g(a, r), !a) break;
                        a && o.push(...Array.isArray(d) ? d : [a])
                    }
                    null != c.forChild && n.set(e.nodeName, c.forChild)
                }
                for (e = e.childNodes, r = [], g = 0; g < e.length; g++) r.push(...l(e[g], t, new Map(n), a));
                return null != u && (r = u(r)), null == a ? o = o.concat(r) : i.$isElementNode(a) && a.append(...r), o
            }
            t.$generateHtmlFromNodes = function(e, t) {
                if ("undefined" == typeof document || "undefined" == typeof window) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
                let n = document.createElement("div"),
                    r = i.$getRoot().getChildren();
                for (let i = 0; i < r.length; i++) o(e, r[i], n, t);
                return n.innerHTML
            }, t.$generateNodesFromDOM = function(e, t) {
                t = t.body ? t.body.childNodes : [];
                let n = [];
                for (let i = 0; i < t.length; i++) {
                    var r = t[i];
                    s.has(r.nodeName) || null !== (r = l(r, e)) && (n = n.concat(r))
                }
                return n
            }
        },
        873435: (e, t, n) => {
            "use strict";
            const r = n(813906);
            e.exports = r
        },
        813906: (e, t, n) => {
            "use strict";
            var r = n(376969),
                i = n(932998);
            let o = new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
            class s extends i.ElementNode {
                static getType() {
                    return "link"
                }
                static clone(e) {
                    return new s(e.__url, {
                        rel: e.__rel,
                        target: e.__target,
                        title: e.__title
                    }, e.__key)
                }
                constructor(e, t = {}, n) {
                    super(n);
                    let {
                        target: r = null,
                        rel: i = null,
                        title: o = null
                    } = t;
                    this.__url = e, this.__target = r, this.__rel = i, this.__title = o
                }
                createDOM(e) {
                    let t = document.createElement("a");
                    return t.href = this.sanitizeUrl(this.__url), null !== this.__target && (t.target = this.__target), null !== this.__rel && (t.rel = this.__rel), null !== this.__title && (t.title = this.__title), r.addClassNamesToElement(t, e.theme.link), t
                }
                updateDOM(e, t) {
                    let n = this.__url,
                        r = this.__target,
                        i = this.__rel,
                        o = this.__title;
                    return n !== e.__url && (t.href = n), r !== e.__target && (r ? t.target = r : t.removeAttribute("target")), i !== e.__rel && (i ? t.rel = i : t.removeAttribute("rel")), o !== e.__title && (o ? t.title = o : t.removeAttribute("title")), !1
                }
                static importDOM() {
                    return {
                        a: () => ({
                            conversion: l,
                            priority: 1
                        })
                    }
                }
                static importJSON(e) {
                    let t = a(e.url, {
                        rel: e.rel,
                        target: e.target,
                        title: e.title
                    });
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                sanitizeUrl(e) {
                    try {
                        let t = new URL(e);
                        if (!o.has(t.protocol)) return "about:blank"
                    } catch {}
                    return e
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        rel: this.getRel(),
                        target: this.getTarget(),
                        title: this.getTitle(),
                        type: "link",
                        url: this.getURL(),
                        version: 1
                    }
                }
                getURL() {
                    return this.getLatest().__url
                }
                setURL(e) {
                    this.getWritable().__url = e
                }
                getTarget() {
                    return this.getLatest().__target
                }
                setTarget(e) {
                    this.getWritable().__target = e
                }
                getRel() {
                    return this.getLatest().__rel
                }
                setRel(e) {
                    this.getWritable().__rel = e
                }
                getTitle() {
                    return this.getLatest().__title
                }
                setTitle(e) {
                    this.getWritable().__title = e
                }
                insertNewAfter(e, t = !0) {
                    return e = this.getParentOrThrow().insertNewAfter(e, t), i.$isElementNode(e) ? (t = a(this.__url, {
                        rel: this.__rel,
                        target: this.__target,
                        title: this.__title
                    }), e.append(t), t) : null
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
                canBeEmpty() {
                    return !1
                }
                isInline() {
                    return !0
                }
                extractWithChild(e, t) {
                    if (!i.$isRangeSelection(t)) return !1;
                    e = t.anchor.getNode();
                    let n = t.focus.getNode();
                    return this.isParentOf(e) && this.isParentOf(n) && 0 < t.getTextContent().length
                }
            }

            function l(e) {
                let t = null;
                if (r.isHTMLAnchorElement(e)) {
                    let n = e.textContent;
                    null !== n && "" !== n && (t = a(e.getAttribute("href") || "", {
                        rel: e.getAttribute("rel"),
                        target: e.getAttribute("target"),
                        title: e.getAttribute("title")
                    }))
                }
                return {
                    node: t
                }
            }

            function a(e, t) {
                return i.$applyNodeReplacement(new s(e, t))
            }

            function u(e) {
                return e instanceof s
            }
            class c extends s {
                static getType() {
                    return "autolink"
                }
                static clone(e) {
                    return new c(e.__url, {
                        rel: e.__rel,
                        target: e.__target,
                        title: e.__title
                    }, e.__key)
                }
                static importJSON(e) {
                    let t = d(e.url, {
                        rel: e.rel,
                        target: e.target,
                        title: e.title
                    });
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                static importDOM() {
                    return null
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "autolink",
                        version: 1
                    }
                }
                insertNewAfter(e, t = !0) {
                    return e = this.getParentOrThrow().insertNewAfter(e, t), i.$isElementNode(e) ? (t = d(this.__url, {
                        rel: this._rel,
                        target: this.__target,
                        title: this.__title
                    }), e.append(t), t) : null
                }
            }

            function d(e, t) {
                return i.$applyNodeReplacement(new c(e, t))
            }
            let g = i.createCommand("TOGGLE_LINK_COMMAND");
            t.$createAutoLinkNode = d, t.$createLinkNode = a, t.$isAutoLinkNode = function(e) {
                return e instanceof c
            }, t.$isLinkNode = u, t.AutoLinkNode = c, t.LinkNode = s, t.TOGGLE_LINK_COMMAND = g, t.toggleLink = function(e, t = {}) {
                let {
                    target: n,
                    title: r
                } = t, o = void 0 === t.rel ? "noopener" : t.rel;
                if (t = i.$getSelection(), i.$isRangeSelection(t))
                    if (t = t.extract(), null === e) t.forEach((e => {
                        if (u(e = e.getParent())) {
                            let t = e.getChildren();
                            for (let n = 0; n < t.length; n++) e.insertBefore(t[n]);
                            e.remove()
                        }
                    }));
                    else {
                        if (1 === t.length) {
                            var s = t[0];
                            if (null !== (s = u(s) ? s : function(e, t) {
                                    for (; null !== e && null !== (e = e.getParent()) && !t(e););
                                    return e
                                }(s, u))) return s.setURL(e), void 0 !== n && s.setTarget(n), null !== o && s.setRel(o), void(void 0 !== r && s.setTitle(r))
                        }
                        let l = null,
                            c = null;
                        t.forEach((t => {
                            var s = t.getParent();
                            if (s !== c && null !== s && (!i.$isElementNode(t) || t.isInline()))
                                if (u(s)) c = s, s.setURL(e), void 0 !== n && s.setTarget(n), null !== o && c.setRel(o), void 0 !== r && c.setTitle(r);
                                else if (s.is(l) || (l = s, c = a(e, {
                                    rel: o,
                                    target: n
                                }), u(s) ? null === t.getPreviousSibling() ? s.insertBefore(c) : s.insertAfter(c) : t.insertBefore(c)), u(t)) {
                                if (!t.is(c)) {
                                    if (null !== c) {
                                        s = t.getChildren();
                                        for (let e = 0; e < s.length; e++) c.append(s[e])
                                    }
                                    t.remove()
                                }
                            } else null !== c && c.append(t)
                        }))
                    }
            }
        },
        244783: (e, t, n) => {
            "use strict";
            const r = n(319206);
            e.exports = r
        },
        319206: (e, t, n) => {
            "use strict";
            var r = n(932998),
                i = n(376969);

            function o(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }

            function s(e) {
                let t = 1;
                for (e = e.getParent(); null != e;) {
                    if (E(e)) {
                        if (w(e = e.getParent())) {
                            t++, e = e.getParent();
                            continue
                        }
                        o(40)
                    }
                    break
                }
                return t
            }

            function l(e) {
                w(e = e.getParent()) || o(40);
                let t = e;
                for (; null !== t;) t = t.getParent(), w(t) && (e = t);
                return e
            }

            function a(e) {
                let t = [];
                e = e.getChildren().filter(E);
                for (let n = 0; n < e.length; n++) {
                    let r = e[n],
                        i = r.getFirstChild();
                    w(i) ? t = t.concat(a(i)) : t.push(r)
                }
                return t
            }

            function u(e) {
                return E(e) && w(e.getFirstChild())
            }

            function c(e) {
                return T().append(e)
            }

            function d(e, t) {
                return E(e) && (0 === t.length || 1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize())
            }

            function g(e, t) {
                e.splice(e.getChildrenSize(), 0, t)
            }

            function f(e, t) {
                if (w(e)) return e;
                let n = e.getPreviousSibling(),
                    r = e.getNextSibling(),
                    i = T();
                return i.setFormat(e.getFormatType()), i.setIndent(e.getIndent()), g(i, e.getChildren()), w(n) && t === n.getListType() ? (n.append(i), e.remove(), w(r) && t === r.getListType() && (g(n, r.getChildren()), r.remove()), n) : w(r) && t === r.getListType() ? (r.getFirstChildOrThrow().insertBefore(i), e.remove(), r) : ((t = O(t)).append(i), e.replace(t), p(t), t)
            }

            function h(e, t) {
                var n = e.getLastChild();
                let r = t.getFirstChild();
                n && r && u(n) && u(r) && (h(n.getFirstChild(), r.getFirstChild()), r.remove()), 0 < (n = t.getChildren()).length && (e.append(...n), p(e)), t.remove()
            }

            function p(e, t) {
                if (void 0 !== (e = t || e.getChildren()))
                    for (t = 0; t < e.length; t++) {
                        let s = e[t];
                        if (E(s)) {
                            let e = s.getValue();
                            var n = s,
                                r = n.getParent(),
                                i = 1;
                            for (null != r && (w(r) ? i = r.getStart() : o(44)), n = n.getPreviousSiblings(), r = 0; r < n.length; r++) {
                                let e = n[r];
                                E(e) && !w(e.getFirstChild()) && i++
                            }
                            e !== i && s.setValue(i)
                        }
                    }
            }

            function _(e) {
                if (!u(e)) {
                    var t = e.getParent(),
                        n = t ? t.getParent() : void 0,
                        r = n ? n.getParent() : void 0;
                    if (w(r) && E(n) && w(t)) {
                        var i = t ? t.getFirstChild() : void 0,
                            o = t ? t.getLastChild() : void 0;
                        if (e.is(i)) n.insertBefore(e), t.isEmpty() && n.remove();
                        else if (e.is(o)) n.insertAfter(e), t.isEmpty() && n.remove();
                        else {
                            var s = t.getListType();
                            i = T();
                            let r = O(s);
                            i.append(r), e.getPreviousSiblings().forEach((e => r.append(e))), o = T(), s = O(s), o.append(s), g(s, e.getNextSiblings()), n.insertBefore(i), n.insertAfter(o), n.replace(e)
                        }
                        p(t), p(r)
                    }
                }
            }
            class m extends r.ElementNode {
                static getType() {
                    return "listitem"
                }
                static clone(e) {
                    return new m(e.__value, e.__checked, e.__key)
                }
                constructor(e, t, n) {
                    super(n), this.__value = void 0 === e ? 1 : e, this.__checked = t
                }
                createDOM(e) {
                    let t = document.createElement("li"),
                        n = this.getParent();
                    return w(n) && "check" === n.getListType() && N(t, this, null), t.value = this.__value, y(t, e.theme, this), t
                }
                updateDOM(e, t, n) {
                    let r = this.getParent();
                    return w(r) && "check" === r.getListType() && N(t, this, e), t.value = this.__value, y(t, n.theme, this), !1
                }
                static transform() {
                    return e => {
                        let t = e.getParent();
                        w(t) && (p(t), "check" !== t.getListType() && null != e.getChecked() && e.setChecked(void 0))
                    }
                }
                static importDOM() {
                    return {
                        li: () => ({
                            conversion: v,
                            priority: 0
                        })
                    }
                }
                static importJSON(e) {
                    let t = new m(e.value, e.checked);
                    return t.setFormat(e.format), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        checked: this.getChecked(),
                        type: "listitem",
                        value: this.getValue(),
                        version: 1
                    }
                }
                append(...e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        if (r.$isElementNode(n) && this.canMergeWith(n)) {
                            let e = n.getChildren();
                            this.append(...e), n.remove()
                        } else super.append(n)
                    }
                    return this
                }
                replace(e, t) {
                    if (E(e)) return super.replace(e);
                    this.setIndent(0);
                    let n = this.getParentOrThrow();
                    if (!w(n)) return e;
                    if (n.__first === this.getKey()) n.insertBefore(e);
                    else if (n.__last === this.getKey()) n.insertAfter(e);
                    else {
                        let t = O(n.getListType()),
                            r = this.getNextSibling();
                        for (; r;) {
                            let e = r;
                            r = r.getNextSibling(), t.append(e)
                        }
                        n.insertAfter(e), e.insertAfter(t)
                    }
                    return t && this.getChildren().forEach((t => {
                        e.append(t)
                    })), this.remove(), 0 === n.getChildrenSize() && n.remove(), e
                }
                insertAfter(e, t = !0) {
                    var n = this.getParentOrThrow();
                    w(n) || o(39);
                    var r = this.getNextSiblings();
                    if (E(e)) return t = super.insertAfter(e, t), w(e = e.getParentOrThrow()) && p(e), t;
                    if (w(e)) {
                        for (n = e, r = (e = e.getChildren()).length - 1; 0 <= r; r--) n = e[r], this.insertAfter(n, t);
                        return n
                    }
                    if (n.insertAfter(e, t), 0 !== r.length) {
                        let i = O(n.getListType());
                        r.forEach((e => i.append(e))), e.insertAfter(i, t)
                    }
                    return e
                }
                remove(e) {
                    let t = this.getPreviousSibling(),
                        n = this.getNextSibling();
                    super.remove(e), t && n && u(t) && u(n) ? (h(t.getFirstChild(), n.getFirstChild()), n.remove()) : n && (w(e = n.getParent()) && p(e))
                }
                insertNewAfter(e, t = !0) {
                    return e = T(null == this.__checked && void 0), this.insertAfter(e, t), e
                }
                collapseAtStart(e) {
                    let t = r.$createParagraphNode();
                    this.getChildren().forEach((e => t.append(e)));
                    var n = this.getParentOrThrow(),
                        i = n.getParentOrThrow();
                    let o = E(i);
                    return 1 === n.getChildrenSize() ? o ? (n.remove(), i.select()) : (n.insertBefore(t), n.remove(), n = e.anchor, e = e.focus, i = t.getKey(), "element" === n.type && n.getNode().is(this) && n.set(i, n.offset, "element"), "element" === e.type && e.getNode().is(this) && e.set(i, e.offset, "element")) : (n.insertBefore(t), this.remove()), !0
                }
                getValue() {
                    return this.getLatest().__value
                }
                setValue(e) {
                    this.getWritable().__value = e
                }
                getChecked() {
                    return this.getLatest().__checked
                }
                setChecked(e) {
                    this.getWritable().__checked = e
                }
                toggleChecked() {
                    this.setChecked(!this.__checked)
                }
                getIndent() {
                    var e = this.getParent();
                    if (null === e) return this.getLatest().__indent;
                    e = e.getParentOrThrow();
                    let t = 0;
                    for (; E(e);) e = e.getParentOrThrow().getParentOrThrow(), t++;
                    return t
                }
                setIndent(e) {
                    "number" == typeof e && -1 < e || o(117);
                    let t = this.getIndent();
                    for (; t !== e;)
                        if (t < e) {
                            e: {
                                var n = new Set;
                                if (u(this) || n.has(this.getKey())) break e;
                                let e = this.getParent();
                                var r = this.getNextSibling(),
                                    i = this.getPreviousSibling();
                                if (u(r) && u(i)) {
                                    if (w(i = i.getFirstChild())) {
                                        i.append(this);
                                        var s = r.getFirstChild();
                                        w(s) && (g(i, s = s.getChildren()), r.remove(), n.add(r.getKey())), p(i)
                                    }
                                } else u(r) ? w(r = r.getFirstChild()) && (null !== (n = r.getFirstChild()) && n.insertBefore(this), p(r)) : u(i) ? w(r = i.getFirstChild()) && (r.append(this), p(r)) : w(e) && (n = T(), s = O(e.getListType()), n.append(s), s.append(this), i ? i.insertAfter(n) : r ? r.insertBefore(n) : e.append(n), p(s));w(e) && p(e)
                            }
                            t++
                        }
                    else _(this), t--;
                    return this
                }
                insertBefore(e) {
                    if (E(e)) {
                        let e = this.getParentOrThrow();
                        if (w(e)) {
                            p(e, this.getNextSiblings())
                        }
                    }
                    return super.insertBefore(e)
                }
                canInsertAfter(e) {
                    return E(e)
                }
                canReplaceWith(e) {
                    return E(e)
                }
                canMergeWith(e) {
                    return r.$isParagraphNode(e) || E(e)
                }
                extractWithChild(e, t) {
                    if (!r.$isRangeSelection(t)) return !1;
                    e = t.anchor.getNode();
                    let n = t.focus.getNode();
                    return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t.getTextContent().length
                }
                isParentRequired() {
                    return !0
                }
                createParentElementNode() {
                    return O("bullet")
                }
            }

            function y(e, t, n) {
                let r = [],
                    o = [];
                var s = (t = t.list) ? t.listitem : void 0;
                if (t && t.nested) var l = t.nested.listitem;
                if (void 0 !== s && (s = s.split(" "), r.push(...s)), t) {
                    s = w(s = n.getParent()) && "check" === s.getListType();
                    let e = n.getChecked();
                    s && !e || o.push(t.listitemUnchecked), s && e || o.push(t.listitemChecked), s && r.push(e ? t.listitemChecked : t.listitemUnchecked)
                }
                void 0 !== l && (l = l.split(" "), n.getChildren().some((e => w(e))) ? r.push(...l) : o.push(...l)), 0 < o.length && i.removeClassNamesFromElement(e, ...o), 0 < r.length && i.addClassNamesToElement(e, ...r)
            }

            function N(e, t, n) {
                w(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false"))
            }

            function v(e) {
                return {
                    node: T(e = i.isHTMLElement(e) && "true" === e.getAttribute("aria-checked"))
                }
            }

            function T(e) {
                return r.$applyNodeReplacement(new m(void 0, e))
            }

            function E(e) {
                return e instanceof m
            }
            class C extends r.ElementNode {
                static getType() {
                    return "list"
                }
                static clone(e) {
                    return new C(e.__listType || A[e.__tag], e.__start, e.__key)
                }
                constructor(e, t, n) {
                    super(n), this.__listType = e = A[e] || e, this.__tag = "number" === e ? "ol" : "ul", this.__start = t
                }
                getTag() {
                    return this.__tag
                }
                setListType(e) {
                    let t = this.getWritable();
                    t.__listType = e, t.__tag = "number" === e ? "ol" : "ul"
                }
                getListType() {
                    return this.__listType
                }
                getStart() {
                    return this.__start
                }
                createDOM(e) {
                    let t = document.createElement(this.__tag);
                    return 1 !== this.__start && t.setAttribute("start", String(this.__start)), t.__lexicalListType = this.__listType, x(t, e.theme, this), t
                }
                updateDOM(e, t, n) {
                    return e.__tag !== this.__tag || (x(t, n.theme, this), !1)
                }
                static importDOM() {
                    return {
                        ol: () => ({
                            conversion: S,
                            priority: 0
                        }),
                        ul: () => ({
                            conversion: S,
                            priority: 0
                        })
                    }
                }
                static importJSON(e) {
                    let t = O(e.listType, e.start);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportDOM(e) {
                    return ({
                        element: e
                    } = super.exportDOM(e)), e && (1 !== this.__start && e.setAttribute("start", String(this.__start)), "check" === this.__listType && e.setAttribute("__lexicalListType", "check")), {
                        element: e
                    }
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        listType: this.getListType(),
                        start: this.getStart(),
                        tag: this.getTag(),
                        type: "list",
                        version: 1
                    }
                }
                canBeEmpty() {
                    return !1
                }
                canIndent() {
                    return !1
                }
                append(...e) {
                    for (let n = 0; n < e.length; n++) {
                        var t = e[n];
                        if (E(t)) super.append(t);
                        else {
                            let e = T();
                            w(t) ? e.append(t) : r.$isElementNode(t) ? (t = r.$createTextNode(t.getTextContent()), e.append(t)) : e.append(t), super.append(e)
                        }
                    }
                    return p(this), this
                }
                extractWithChild(e) {
                    return E(e)
                }
            }

            function x(e, t, n) {
                let r = [],
                    o = [];
                var l = t.list;
                if (void 0 !== l) {
                    let e = l[`${n.__tag}Depth`] || [],
                        i = (t = s(n) - 1) % e.length;
                    var a = e[i];
                    let u, c = l[n.__tag];
                    if (void 0 !== (l = l.nested) && l.list && (u = l.list), void 0 !== c && r.push(c), void 0 !== a)
                        for (a = a.split(" "), r.push(...a), a = 0; a < e.length; a++) a !== i && o.push(n.__tag + a);
                    void 0 !== u && (n = u.split(" "), 1 < t ? r.push(...n) : o.push(...n))
                }
                0 < o.length && i.removeClassNamesFromElement(e, ...o), 0 < r.length && i.addClassNamesToElement(e, ...r)
            }

            function b(e) {
                let t = [];
                for (let r = 0; r < e.length; r++) {
                    var n = e[r];
                    E(n) ? (t.push(n), 1 < (n = n.getChildren()).length && n.forEach((e => {
                        w(e) && t.push(c(e))
                    }))) : t.push(c(n))
                }
                return t
            }

            function S(e) {
                let t = e.nodeName.toLowerCase(),
                    n = null;
                return "ol" === t ? n = O("number", e.start) : "ul" === t && (n = i.isHTMLElement(e) && "check" === e.getAttribute("__lexicallisttype") ? O("check") : O("bullet")), {
                    after: b,
                    node: n
                }
            }
            let A = {
                ol: "number",
                ul: "bullet"
            };

            function O(e, t = 1) {
                return r.$applyNodeReplacement(new C(e, t))
            }

            function w(e) {
                return e instanceof C
            }
            let k = r.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
                R = r.createCommand("INSERT_ORDERED_LIST_COMMAND"),
                D = r.createCommand("INSERT_CHECK_LIST_COMMAND"),
                M = r.createCommand("REMOVE_LIST_COMMAND");
            t.$createListItemNode = T, t.$createListNode = O, t.$getListDepth = s, t.$handleListInsertParagraph = function() {
                var e = r.$getSelection();
                if (!r.$isRangeSelection(e) || !e.isCollapsed()) return !1;
                if (!E(e = e.anchor.getNode()) || "" !== e.getTextContent()) return !1;
                var t = l(e),
                    n = e.getParent();
                w(n) || o(40);
                let i, s = n.getParent();
                if (r.$isRootOrShadowRoot(s)) i = r.$createParagraphNode(), t.insertAfter(i);
                else {
                    if (!E(s)) return !1;
                    i = T(), s.insertAfter(i)
                }
                if (i.select(), 0 < (t = e.getNextSiblings()).length) {
                    let e = O(n.getListType());
                    r.$isParagraphNode(i) ? i.insertAfter(e) : ((n = T()).append(e), i.insertAfter(n)), t.forEach((t => {
                        t.remove(), e.append(t)
                    }))
                }
                return function(e) {
                    for (; null == e.getNextSibling() && null == e.getPreviousSibling();) {
                        let t = e.getParent();
                        if (null == t || !E(e) && !w(e)) break;
                        e = t
                    }
                    e.remove()
                }(e), !0
            }, t.$isListItemNode = E, t.$isListNode = w, t.INSERT_CHECK_LIST_COMMAND = D, t.INSERT_ORDERED_LIST_COMMAND = R, t.INSERT_UNORDERED_LIST_COMMAND = k, t.ListItemNode = m, t.ListNode = C, t.REMOVE_LIST_COMMAND = M, t.insertList = function(e, t) {
                e.update((() => {
                    var e = r.$getSelection();
                    if (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e)) {
                        var n = e.getNodes(),
                            i = (e = e.anchor.getNode()).getParent();
                        if (d(e, n)) n = O(t), r.$isRootOrShadowRoot(i) ? (e.replace(n), i = T(), r.$isElementNode(e) && (i.setFormat(e.getFormatType()), i.setIndent(e.getIndent())), n.append(i)) : E(e) && (g(n, (e = e.getParentOrThrow()).getChildren()), e.replace(n));
                        else
                            for (e = new Set, i = 0; i < n.length; i++) {
                                var o = n[i];
                                if (r.$isElementNode(o) && o.isEmpty() && !e.has(o.getKey())) f(o, t);
                                else if (r.$isLeafNode(o))
                                    for (o = o.getParent(); null != o;) {
                                        let n = o.getKey();
                                        if (w(o)) {
                                            if (!e.has(n)) {
                                                var s = O(t);
                                                g(s, o.getChildren()), o.replace(s), p(s), e.add(n)
                                            }
                                            break
                                        }
                                        if (s = o.getParent(), r.$isRootOrShadowRoot(s) && !e.has(n)) {
                                            e.add(n), f(o, t);
                                            break
                                        }
                                        o = s
                                    }
                            }
                    }
                }))
            }, t.removeList = function(e) {
                e.update((() => {
                    let e = r.$getSelection();
                    if (r.$isRangeSelection(e)) {
                        var t = new Set,
                            n = e.getNodes(),
                            o = e.anchor.getNode();
                        if (d(o, n)) t.add(l(o));
                        else
                            for (o = 0; o < n.length; o++) {
                                var s = n[o];
                                r.$isLeafNode(s) && (null != (s = i.$getNearestNodeOfType(s, m)) && t.add(l(s)))
                            }
                        for (let i of t) {
                            t = i, n = a(i);
                            for (let i of n) g(n = r.$createParagraphNode(), i.getChildren()), t.insertAfter(n), t = n, i.__key === e.anchor.key && e.anchor.set(n.getKey(), 0, "element"), i.__key === e.focus.key && e.focus.set(n.getKey(), 0, "element"), i.remove();
                            i.remove()
                        }
                    }
                }))
            }
        },
        329428: (e, t, n) => {
            "use strict";
            const r = n(174301);
            e.exports = r
        },
        174301: (e, t, n) => {
            "use strict";
            var r = n(932998),
                i = n(376969);
            class o extends r.ElementNode {
                static getType() {
                    return "mark"
                }
                static clone(e) {
                    return new o(Array.from(e.__ids), e.__key)
                }
                static importDOM() {
                    return null
                }
                static importJSON(e) {
                    let t = s(e.ids);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        ids: this.getIDs(),
                        type: "mark",
                        version: 1
                    }
                }
                constructor(e, t) {
                    super(t), this.__ids = e || []
                }
                createDOM(e) {
                    let t = document.createElement("mark");
                    return i.addClassNamesToElement(t, e.theme.mark), 1 < this.__ids.length && i.addClassNamesToElement(t, e.theme.markOverlap), t
                }
                updateDOM(e, t, n) {
                    e = e.__ids.length;
                    let r = this.__ids.length;
                    return n = n.theme.markOverlap, e !== r && (1 === e ? 2 === r && i.addClassNamesToElement(t, n) : 1 === r && i.removeClassNamesFromElement(t, n)), !1
                }
                hasID(e) {
                    let t = this.getIDs();
                    for (let n = 0; n < t.length; n++)
                        if (e === t[n]) return !0;
                    return !1
                }
                getIDs() {
                    let e = this.getLatest();
                    return l(e) ? e.__ids : []
                }
                addID(e) {
                    var t = this.getWritable();
                    if (l(t)) {
                        let n = t.__ids;
                        for (t.__ids = n, t = 0; t < n.length; t++)
                            if (e === n[t]) return;
                        n.push(e)
                    }
                }
                deleteID(e) {
                    var t = this.getWritable();
                    if (l(t)) {
                        let n = t.__ids;
                        for (t.__ids = n, t = 0; t < n.length; t++)
                            if (e === n[t]) {
                                n.splice(t, 1);
                                break
                            }
                    }
                }
                insertNewAfter(e, t = !0) {
                    return e = this.getParentOrThrow().insertNewAfter(e, t), r.$isElementNode(e) ? (t = s(this.__ids), e.append(t), t) : null
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
                canBeEmpty() {
                    return !1
                }
                isInline() {
                    return !0
                }
                extractWithChild(e, t, n) {
                    if (!r.$isRangeSelection(t) || "html" === n) return !1;
                    let i = t.anchor,
                        o = t.focus;
                    return e = i.getNode(), n = o.getNode(), t = t.isBackward() ? i.offset - o.offset : o.offset - i.offset, this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t
                }
                excludeFromCopy(e) {
                    return "clone" !== e
                }
            }

            function s(e) {
                return r.$applyNodeReplacement(new o(e))
            }

            function l(e) {
                return e instanceof o
            }
            t.$createMarkNode = s, t.$getMarkIDs = function(e, t) {
                for (; null !== e;) {
                    if (l(e)) return e.getIDs();
                    if (r.$isTextNode(e) && t === e.getTextContentSize()) {
                        let t = e.getNextSibling();
                        if (l(t)) return t.getIDs()
                    }
                    e = e.getParent()
                }
                return null
            }, t.$isMarkNode = l, t.$unwrapMarkNode = function(e) {
                let t = e.getChildren(),
                    n = null;
                for (let r = 0; r < t.length; r++) {
                    let i = t[r];
                    null === n ? e.insertBefore(i) : n.insertAfter(i), n = i
                }
                e.remove()
            }, t.$wrapSelectionInMarkNode = function(e, t, n, i) {
                let o = e.getNodes();
                var a = e.anchor.offset,
                    u = e.focus.offset;
                e = o.length;
                let c, d, g = t ? u : a;
                for (a = t ? a : u, u = 0; u < e; u++) {
                    var f = o[u];
                    if (r.$isElementNode(d) && d.isParentOf(f)) continue;
                    var h = 0 === u;
                    let t = u === e - 1;
                    var p = null;
                    if (r.$isTextNode(f)) {
                        p = f.getTextContentSize();
                        let e = h ? g : 0,
                            n = t ? a : p;
                        if (0 === e && 0 === n) continue;
                        p = 1 < (f = f.splitText(e, n)).length && (3 === f.length || h && !t || n === p) ? f[1] : f[0]
                    } else {
                        if (l(f)) continue;
                        r.$isElementNode(f) && f.isInline() && (p = f)
                    }
                    null !== p ? p && p.is(c) || (null != (h = p.getParent()) && h.is(c) || (d = void 0), c = h, void 0 === d && (d = (i || s)([n]), p.insertBefore(d)), d.append(p)) : d = c = void 0
                }
                r.$isElementNode(d) && (t ? d.selectStart() : d.selectEnd())
            }, t.MarkNode = o
        },
        99299: (e, t, n) => {
            "use strict";
            const r = n(161490);
            e.exports = r
        },
        161490: (e, t, n) => {
            "use strict";
            var r = n(986907),
                i = n(389408),
                o = n(376969),
                s = n(932998);
            let l = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                a = l && "documentMode" in document ? document.documentMode : null;
            l && /Mac|iPod|iPhone|iPad/.test(navigator.platform), l && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            let u = !(!l || !("InputEvent" in window) || a) && "getTargetRanges" in new window.InputEvent("input"),
                c = l && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                d = l && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                g = l && /^(?=.*Chrome).*/i.test(navigator.userAgent),
                f = l && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !g;

            function h(e, t) {
                t.update((() => {
                    let n = e instanceof KeyboardEvent ? null : e.clipboardData,
                        i = s.$getSelection();
                    if (null !== i && null != n) {
                        e.preventDefault();
                        let o = r.$getHtmlContent(t);
                        null !== o && n.setData("text/html", o), n.setData("text/plain", i.getTextContent())
                    }
                }))
            }
            t.registerPlainText = function(e) {
                return o.mergeRegister(e.registerCommand(s.DELETE_CHARACTER_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteWord(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteLine(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, (e => {
                    const t = s.$getSelection();
                    if (!s.$isRangeSelection(t)) return !1;
                    if ("string" == typeof e) t.insertText(e);
                    else {
                        const n = e.dataTransfer;
                        null != n ? r.$insertDataTransferForPlainText(n, t) : (e = e.data) && t.insertText(e)
                    }
                    return !0
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, (() => {
                    const e = s.$getSelection();
                    return !!s.$isRangeSelection(e) && (e.removeText(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, (() => {
                    const e = s.$getSelection();
                    return !!s.$isRangeSelection(e) && (e.insertLineBreak(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, (e => {
                    const t = s.$getSelection();
                    if (!s.$isRangeSelection(t)) return !1;
                    const n = e.shiftKey;
                    return !!i.$shouldOverrideDefaultCharacterSelection(t, !0) && (e.preventDefault(), i.$moveCharacter(t, n, !0), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, (e => {
                    const t = s.$getSelection();
                    if (!s.$isRangeSelection(t)) return !1;
                    const n = e.shiftKey;
                    return !!i.$shouldOverrideDefaultCharacterSelection(t, !1) && (e.preventDefault(), i.$moveCharacter(t, n, !1), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, (t => {
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, !0))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, (t => {
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, !1))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, (t => {
                    const n = s.$getSelection();
                    if (!s.$isRangeSelection(n)) return !1;
                    if (null !== t) {
                        if ((d || c || f) && u) return !1;
                        t.preventDefault()
                    }
                    return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, !1)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, (t => {
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (h(t, e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, (t => {
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (function(e, t) {
                        h(e, t), t.update((() => {
                            let e = s.$getSelection();
                            s.$isRangeSelection(e) && e.removeText()
                        }))
                    }(t, e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, (t => {
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (function(e, t) {
                        e.preventDefault(), t.update((() => {
                            let t = s.$getSelection(),
                                n = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
                            null != n && s.$isRangeSelection(t) && r.$insertDataTransferForPlainText(n, t)
                        }), {
                            tag: "paste"
                        })
                    }(t, e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (e.preventDefault(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (e.preventDefault(), !0)
                }), s.COMMAND_PRIORITY_EDITOR))
            }
        },
        111356: (e, t, n) => {
            "use strict";
            const r = n(650024);
            e.exports = r
        },
        650024: (e, t, n) => {
            "use strict";
            var r = n(84260),
                i = n(932998),
                o = n(667294),
                s = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o.useLayoutEffect : o.useEffect;
            t.ClearEditorPlugin = function({
                onClear: e
            }) {
                let [t] = r.useLexicalComposerContext();
                return s((() => t.registerCommand(i.CLEAR_EDITOR_COMMAND, (() => (t.update((() => {
                    if (null == e) {
                        let e = i.$getRoot(),
                            t = i.$getSelection(),
                            n = i.$createParagraphNode();
                        e.clear(), e.append(n), null !== t && n.select()
                    } else e()
                })), !0)), i.COMMAND_PRIORITY_EDITOR)), [t, e]), null
            }
        },
        822292: (e, t, n) => {
            "use strict";
            const r = n(544149);
            e.exports = r
        },
        544149: (e, t, n) => {
            "use strict";
            var r = n(84260),
                i = n(932998),
                o = n(667294);
            let s = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
            var l = s ? o.useLayoutEffect : o.useEffect;
            let a = {
                tag: "history-merge"
            };
            t.LexicalComposer = function({
                initialConfig: e,
                children: t
            }) {
                let n = o.useMemo((() => {
                    const {
                        theme: t,
                        namespace: n,
                        editor__DEPRECATED: o,
                        nodes: l,
                        onError: u,
                        editorState: c
                    } = e, d = r.createLexicalComposerContext(null, t);
                    let g = o || null;
                    if (null === g) {
                        const r = i.createEditor({
                            editable: e.editable,
                            namespace: n,
                            nodes: l,
                            onError: e => u(e, r),
                            theme: t
                        });
                        ! function(e, t) {
                            if (null !== t)
                                if (void 0 === t) e.update((() => {
                                    var t = i.$getRoot();
                                    if (t.isEmpty()) {
                                        let n = i.$createParagraphNode();
                                        t.append(n), t = s ? document.activeElement : null, (null !== i.$getSelection() || null !== t && t === e.getRootElement()) && n.select()
                                    }
                                }), a);
                                else if (null !== t) switch (typeof t) {
                                case "string":
                                    let n = e.parseEditorState(t);
                                    e.setEditorState(n, a);
                                    break;
                                case "object":
                                    e.setEditorState(t, a);
                                    break;
                                case "function":
                                    e.update((() => {
                                        i.$getRoot().isEmpty() && t(e)
                                    }), a)
                            }
                        }(r, c), g = r
                    }
                    return [g, d]
                }), []);
                return l((() => {
                    let t = e.editable,
                        [r] = n;
                    r.setEditable(void 0 === t || t)
                }), []), o.createElement(r.LexicalComposerContext.Provider, {
                    value: n
                }, t)
            }
        },
        84260: (e, t, n) => {
            "use strict";
            const r = n(433489);
            e.exports = r
        },
        433489: (e, t, n) => {
            "use strict";
            var r = n(667294);
            let i = r.createContext(null);
            t.LexicalComposerContext = i, t.createLexicalComposerContext = function(e, t) {
                let n = null;
                return null != e && (n = e[1]), {
                    getTheme: function() {
                        return null != t ? t : null != n ? n.getTheme() : null
                    }
                }
            }, t.useLexicalComposerContext = function() {
                let e = r.useContext(i);
                if (null == e) throw Error("Minified Lexical error #8; visit https://lexical.dev/docs/error?code=8 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                return e
            }
        },
        777943: (e, t, n) => {
            "use strict";
            const r = n(279848);
            e.exports = r
        },
        279848: (e, t, n) => {
            "use strict";
            var r = n(667294);

            function i(e, t) {
                return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var o = {
                    error: null
                },
                s = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = o, t.resetErrorBoundary = function() {
                            for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset()
                        }, t
                    }! function(e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t)
                    }(t, e), t.getDerivedStateFromError = function(e) {
                        return {
                            error: e
                        }
                    };
                    var n = t.prototype;
                    return n.reset = function() {
                        this.setState(o)
                    }, n.componentDidCatch = function(e, t) {
                        var n, r;
                        null == (n = (r = this.props).onError) || n.call(r, e, t)
                    }, n.componentDidUpdate = function(e, t) {
                        var n, r, i = this.props.resetKeys;
                        null !== this.state.error && null !== t.error && function(e, t) {
                            return void 0 === e && (e = []), void 0 === t && (t = []), e.length !== t.length || e.some((function(e, n) {
                                return !Object.is(e, t[n])
                            }))
                        }(e.resetKeys, i) && (null == (n = (r = this.props).onResetKeysChange) || n.call(r, e.resetKeys, i), this.reset())
                    }, n.render = function() {
                        var e = this.state.error,
                            t = this.props,
                            n = t.fallbackRender,
                            i = t.FallbackComponent;
                        if (t = t.fallback, null !== e) {
                            if (e = {
                                    error: e,
                                    resetErrorBoundary: this.resetErrorBoundary
                                }, r.isValidElement(t)) return t;
                            if ("function" == typeof n) return n(e);
                            if (i) return r.createElement(i, e);
                            throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                        }
                        return this.props.children
                    }, t
                }(r.Component);
            e.exports = function({
                children: e,
                onError: t
            }) {
                return r.createElement(s, {
                    fallback: r.createElement("div", {
                        style: {
                            border: "1px solid #f00",
                            color: "#f00",
                            padding: "8px"
                        }
                    }, "An error was thrown."),
                    onError: t
                }, e)
            }
        },
        704506: (e, t, n) => {
            "use strict";
            const r = n(800548);
            e.exports = r
        },
        800548: (e, t, n) => {
            "use strict";
            var r = n(84260),
                i = n(548854),
                o = n(667294);
            t.createEmptyHistoryState = i.createEmptyHistoryState, t.HistoryPlugin = function({
                externalHistoryState: e
            }) {
                let [t] = r.useLexicalComposerContext();
                return function(e, t, n = 1e3) {
                    let r = o.useMemo((() => t || i.createEmptyHistoryState()), [t]);
                    o.useEffect((() => i.registerHistory(e, r, n)), [n, e, r])
                }(t, e), null
            }
        },
        717150: (e, t, n) => {
            "use strict";
            const r = n(224800);
            e.exports = r
        },
        224800: (e, t, n) => {
            "use strict";
            var r = n(84260),
                i = n(909722),
                o = n(667294),
                s = n(302977),
                l = n(376969),
                a = n(973935),
                u = n(570573),
                c = n(99299),
                d = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o.useLayoutEffect : o.useEffect;

            function g(e) {
                return e.getEditorState().read(s.$canShowPlaceholderCurry(e.isComposing()))
            }

            function f({
                content: e
            }) {
                var [t] = r.useLexicalComposerContext();
                t = function(e) {
                    let [t, n] = o.useState((() => g(e)));
                    return d((() => {
                        function t() {
                            let t = g(e);
                            n(t)
                        }
                        return t(), l.mergeRegister(e.registerUpdateListener((() => {
                            t()
                        })), e.registerEditableListener((() => {
                            t()
                        })))
                    }), [e]), t
                }(t);
                let n = i();
                return t ? "function" == typeof e ? e(n) : e : null
            }
            t.PlainTextPlugin = function({
                contentEditable: e,
                placeholder: t,
                ErrorBoundary: n
            }) {
                let [i] = r.useLexicalComposerContext();
                return n = function(e, t) {
                        let [n, r] = o.useState((() => e.getDecorators()));
                        return d((() => e.registerDecoratorListener((e => {
                            a.flushSync((() => {
                                r(e)
                            }))
                        }))), [e]), o.useEffect((() => {
                            r(e.getDecorators())
                        }), [e]), o.useMemo((() => {
                            let r = [],
                                i = Object.keys(n);
                            for (let s = 0; s < i.length; s++) {
                                let l = i[s],
                                    u = o.createElement(t, {
                                        onError: t => e._onError(t)
                                    }, o.createElement(o.Suspense, {
                                        fallback: null
                                    }, n[l])),
                                    c = e.getElementByKey(l);
                                null !== c && r.push(a.createPortal(u, c, l))
                            }
                            return r
                        }), [t, n, e])
                    }(i, n),
                    function(e) {
                        d((() => l.mergeRegister(c.registerPlainText(e), u.registerDragonSupport(e))), [e])
                    }(i), o.createElement(o.Fragment, null, e, o.createElement(f, {
                        content: t
                    }), n)
            }
        },
        847480: (e, t, n) => {
            "use strict";
            const r = n(22210);
            e.exports = r
        },
        22210: (e, t, n) => {
            "use strict";
            var r = n(587592),
                i = n(873435),
                o = n(329428),
                s = n(376969),
                l = n(932998),
                a = n(667294);
            let u = Object.freeze({
                    "\t": "\\t",
                    "\n": "\\n"
                }),
                c = new RegExp(Object.keys(u).join("|"), "g"),
                d = Object.freeze({
                    ancestorHasNextSibling: "|",
                    ancestorIsLastChild: " ",
                    hasNextSibling: "├",
                    isLastChild: "└",
                    selectedChar: "^",
                    selectedLine: ">"
                });

            function g(e, t, n) {
                let s = e.getEditorState(),
                    a = e._config,
                    u = e._compositionKey,
                    g = e._editable;
                if (n) {
                    let t = "";
                    return s.read((() => {
                        var n = r.$generateHtmlFromNodes(e);
                        let i = document.createElement("div");
                        i.innerHTML = n.trim(), t = T(i, 0).innerHTML
                    })), t
                }
                let p = " root\n";
                if (n = s.read((() => {
                        const e = l.$getSelection();
                        return f(l.$getRoot(), ((t, n) => {
                            const r = `(${t.getKey()})`,
                                s = t.getType() || "",
                                a = t.isSelected(),
                                u = o.$isMarkNode(t) ? ` id: [ ${t.getIDs().join(", ")} ] ` : "";
                            var g = p,
                                f = a ? d.selectedLine : " ",
                                _ = n.join(" ");
                            if (l.$isTextNode(t)) {
                                var m = t.getTextContent(),
                                    T = 0 === m.length ? "(empty)" : `"${h(m)}"`;
                                m = [T, 0 !== (m = [v(t), y(t), N(t)].filter(Boolean).join(", ")).length ? `{ ${m} }` : null].filter(Boolean).join(" ").trim()
                            } else if (i.$isLinkNode(t)) {
                                m = 0 === (m = t.getURL()).length ? "(empty)" : `"${h(m)}"`, null != (T = t.getTarget()) && (T = "target: " + T);
                                var E = Boolean,
                                    C = t.getRel();
                                null != C && (C = "rel: " + C);
                                let e = t.getTitle();
                                null != e && (e = "title: " + e), m = [m, 0 !== (T = [T, C, e].filter(E).join(", ")).length ? `{ ${T} }` : null].filter(Boolean).join(" ").trim()
                            } else m = "";
                            p = g + `${f} ${_} ${r} ${s} ${u} ${m}\n`, p += function({
                                indent: e,
                                isSelected: t,
                                node: n,
                                nodeKeyDisplay: r,
                                selection: i,
                                typeDisplay: o
                            }) {
                                if (!l.$isTextNode(n) || !l.$isRangeSelection(i) || !t || l.$isElementNode(n)) return "";
                                t = i.anchor;
                                var s = i.focus;
                                if ("" === n.getTextContent() || t.getNode() === i.focus.getNode() && t.offset === s.offset) return "";
                                s = i.anchor;
                                let a = i.focus,
                                    u = n.getTextContent(),
                                    g = u.length;
                                if (t = i = -1, "text" === s.type && "text" === a.type) {
                                    let e = s.getNode(),
                                        r = a.getNode();
                                    e === r && n === e && s.offset !== a.offset ? [i, t] = s.offset < a.offset ? [s.offset, a.offset] : [a.offset, s.offset] : [i, t] = n === e ? e.isBefore(r) ? [s.offset, g] : [0, s.offset] : n === r ? r.isBefore(e) ? [a.offset, g] : [0, a.offset] : [0, g]
                                }
                                n = (u.slice(0, i).match(c) || []).length, s = (u.slice(i, t).match(c) || []).length;
                                let [f, h] = [i + n, t + n + s];
                                return f === h ? "" : (n = e[e.length - 1] === d.hasNextSibling ? d.ancestorHasNextSibling : d.ancestorIsLastChild, e = [...e.slice(0, e.length - 1), n], n = Array(f + 1).fill(" "), i = Array(h - f).fill(d.selectedChar), r = Array(r.length + (o.length + 3)).fill(" "), [d.selectedLine, e.join(" "), [...r, ...n, ...i].join("")].join(" ") + "\n")
                            }({
                                indent: n,
                                isSelected: a,
                                node: t,
                                nodeKeyDisplay: r,
                                selection: e,
                                typeDisplay: s
                            })
                        })), null === e ? ": null" : l.$isRangeSelection(e) ? function(e) {
                            let t = "";
                            var n = v(e);
                            t += `: range ${""!==n?`{ ${n} }`:""} ${""!==e.style?`{ style: ${e.style} } `:""}`, n = e.anchor, e = e.focus;
                            let r = n.offset,
                                i = e.offset;
                            return t += `\n  ├ anchor { key: ${n.key}, offset: ${null===r?"null":r}, type: ${n.type} }`, t + `\n  └ focus { key: ${e.key}, offset: ${null===i?"null":i}, type: ${e.type} }`
                        }(e) : l.DEPRECATED_$isGridSelection(e) ? `: grid\n  └ { grid: ${e.gridKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }` : `: node\n  └ [${Array.from(e._nodes).join(", ")}]`
                    })), p += "\n selection" + n, p += "\n\n commands:", t.length)
                    for (let {
                            type: e,
                            payload: n
                        } of t) p += `\n  └ { type: ${e}, payload: ${n instanceof Event?n.constructor.name:n} }`;
                else p += "\n  └ None dispatched.";
                return p += "\n\n editor:", p += `\n  └ namespace ${a.namespace}`, null !== u && (p += `\n  └ compositionKey ${u}`), p += `\n  └ editable ${String(g)}`
            }

            function f(e, t, n = []) {
                let r = (e = e.getChildren()).length;
                e.forEach(((e, i) => {
                    t(e, n.concat(i === r - 1 ? d.isLastChild : d.hasNextSibling)), l.$isElementNode(e) && f(e, t, n.concat(i === r - 1 ? d.ancestorIsLastChild : d.ancestorHasNextSibling))
                }))
            }

            function h(e) {
                return Object.entries(u).reduce(((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n))), e)
            }
            let p = [e => e.hasFormat("bold") && "Bold", e => e.hasFormat("code") && "Code", e => e.hasFormat("italic") && "Italic", e => e.hasFormat("strikethrough") && "Strikethrough", e => e.hasFormat("subscript") && "Subscript", e => e.hasFormat("superscript") && "Superscript", e => e.hasFormat("underline") && "Underline"],
                _ = [e => e.isDirectionless() && "Directionless", e => e.isUnmergeable() && "Unmergeable"],
                m = [e => e.isToken() && "Token", e => e.isSegmented() && "Segmented"];

            function y(e) {
                let t = _.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "detail: " + t), t
            }

            function N(e) {
                let t = m.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "mode: " + t), t
            }

            function v(e) {
                let t = p.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "format: " + t), t
            }

            function T(e, t) {
                let n, r = Array(1 + t++).join("  "),
                    i = Array(t - 1).join("  ");
                for (let o = 0; o < e.children.length; o++) n = document.createTextNode("\n" + r), e.insertBefore(n, e.children[o]), T(e.children[o], t), e.lastElementChild === e.children[o] && (n = document.createTextNode("\n" + i), e.appendChild(n));
                return e
            }
            t.TreeView = function({
                treeTypeButtonClassName: e,
                timeTravelButtonClassName: t,
                timeTravelPanelSliderClassName: n,
                timeTravelPanelButtonClassName: r,
                viewClassName: i,
                timeTravelPanelClassName: o,
                editor: u
            }) {
                let [c, d] = a.useState([]), [f, h] = a.useState(""), [p, _] = a.useState(!1), [m, y] = a.useState(!1), N = a.useRef(0), v = a.useRef(null), T = a.useRef(null), [E, C] = a.useState(!1), [x, b] = a.useState(!1), [S, A] = a.useState(!1), O = a.useRef(null), w = function(e) {
                    let [t, n] = a.useState([]);
                    return a.useEffect((() => {
                        let t = new Set;
                        for (let [r] of e._commands) t.add(e.registerCommand(r, (e => (n((t => ((t = [...t]).push({
                            payload: e,
                            type: r.type ? r.type : "UNKNOWN"
                        }), 10 < t.length && t.shift(), t))), !1)), l.COMMAND_PRIORITY_HIGH));
                        return () => t.forEach((e => e()))
                    }), [e]), a.useMemo((() => t), [t])
                }(u), k = a.useCallback((e => {
                    const t = g(u, w, m);
                    h(t), p || d((t => [...t, [Date.now(), e]]))
                }), [w, u, p, m]);
                a.useEffect((() => {
                    let e = u.getEditorState();
                    !S && 1e3 > e._nodeMap.size && h(g(u, w, m))
                }), [w, u, S, m]), a.useEffect((() => s.mergeRegister(u.registerUpdateListener((({
                    editorState: e
                }) => {
                    !S && 1e3 < e._nodeMap.size && (O.current = e, b(!0), !S) || k(e)
                })), u.registerEditableListener((() => {
                    let e = g(u, w, m);
                    h(e)
                })))), [w, u, m, x, k, S]);
                let R = c.length;
                return a.useEffect((() => {
                    if (E) {
                        let e, t = () => {
                            const n = N.current;
                            n === R - 1 ? C(!1) : e = setTimeout((() => {
                                N.current++;
                                const e = N.current,
                                    n = T.current;
                                null !== n && (n.value = String(e)), u.setEditorState(c[e][1]), t()
                            }), c[n + 1][0] - c[n][0])
                        };
                        return t(), () => {
                            clearTimeout(e)
                        }
                    }
                }), [c, E, u, R]), a.useEffect((() => {
                    let e = v.current;
                    if (null !== e) return e.__lexicalEditor = u, () => {
                        e.__lexicalEditor = null
                    }
                }), [u]), a.createElement("div", {
                    className: i
                }, !S && x ? a.createElement("div", {
                    style: {
                        padding: 20
                    }
                }, a.createElement("span", {
                    style: {
                        marginRight: 20
                    }
                }, "Detected large EditorState, this can impact debugging performance."), a.createElement("button", {
                    onClick: () => {
                        A(!0);
                        let e = O.current;
                        null !== e && (O.current = null, k(e))
                    },
                    style: {
                        background: "transparent",
                        border: "1px solid white",
                        color: "white",
                        cursor: "pointer",
                        padding: 5
                    }
                }, "Show full tree")) : null, S ? null : a.createElement("button", {
                    onClick: () => y(!m),
                    className: e,
                    type: "button"
                }, m ? "Tree" : "Export DOM"), !p && (S || !x) && 2 < R && a.createElement("button", {
                    onClick: () => {
                        let e = u.getRootElement();
                        null !== e && (e.contentEditable = "false", N.current = R - 1, _(!0))
                    },
                    className: t,
                    type: "button"
                }, "Time Travel"), (S || !x) && a.createElement("pre", {
                    ref: v
                }, f), p && (S || !x) && a.createElement("div", {
                    className: o
                }, a.createElement("button", {
                    className: r,
                    onClick: () => {
                        N.current === R - 1 && (N.current = 1), C(!E)
                    },
                    type: "button"
                }, E ? "Pause" : "Play"), a.createElement("input", {
                    className: n,
                    ref: T,
                    onChange: e => {
                        e = Number(e.target.value);
                        let t = c[e];
                        t && (N.current = e, u.setEditorState(t[1]))
                    },
                    type: "range",
                    min: "1",
                    max: R - 1
                }), a.createElement("button", {
                    className: r,
                    onClick: () => {
                        var e = u.getRootElement();
                        if (null !== e) {
                            e.contentEditable = "true", e = c.length - 1, u.setEditorState(c[e][1]);
                            let t = T.current;
                            null !== t && (t.value = String(e)), _(!1), C(!1)
                        }
                    },
                    type: "button"
                }, "Exit")))
            }
        },
        909722: (e, t, n) => {
            "use strict";
            const r = n(965836);
            e.exports = r
        },
        965836: (e, t, n) => {
            "use strict";
            var r = n(84260),
                i = n(667294),
                o = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? i.useLayoutEffect : i.useEffect;

            function s(e) {
                return {
                    initialValueFn: () => e.isEditable(),
                    subscribe: t => e.registerEditableListener(t)
                }
            }
            e.exports = function() {
                return function(e) {
                    let [t] = r.useLexicalComposerContext(), n = i.useMemo((() => e(t)), [t, e]), s = i.useRef(n.initialValueFn()), [l, a] = i.useState(s.current);
                    return o((() => {
                        let {
                            initialValueFn: e,
                            subscribe: t
                        } = n, r = e();
                        return s.current !== r && (s.current = r, a(r)), t((e => {
                            s.current = e, a(e)
                        }))
                    }), [n, e]), l
                }(s)
            }
        },
        2903: (e, t, n) => {
            "use strict";
            const r = n(640925);
            e.exports = r
        },
        640925: (e, t, n) => {
            "use strict";
            var r = n(986907),
                i = n(389408),
                o = n(376969),
                s = n(932998);

            function l(e, t) {
                return void 0 !== document.caretRangeFromPoint ? null === (e = document.caretRangeFromPoint(e, t)) ? null : {
                    node: e.startContainer,
                    offset: e.startOffset
                } : "undefined" !== document.caretPositionFromPoint ? null === (e = document.caretPositionFromPoint(e, t)) ? null : {
                    node: e.offsetNode,
                    offset: e.offset
                } : null
            }
            let a = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                u = a && "documentMode" in document ? document.documentMode : null;
            a && /Mac|iPod|iPhone|iPad/.test(navigator.platform), a && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            let c = !(!a || !("InputEvent" in window) || u) && "getTargetRanges" in new window.InputEvent("input"),
                d = a && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                g = a && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                f = a && /^(?=.*Chrome).*/i.test(navigator.userAgent),
                h = a && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !f,
                p = s.createCommand("DRAG_DROP_PASTE_FILE");
            class _ extends s.ElementNode {
                static getType() {
                    return "quote"
                }
                static clone(e) {
                    return new _(e.__key)
                }
                constructor(e) {
                    super(e)
                }
                createDOM(e) {
                    let t = document.createElement("blockquote");
                    return o.addClassNamesToElement(t, e.theme.quote), t
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        blockquote: () => ({
                            conversion: T,
                            priority: 0
                        })
                    }
                }
                exportDOM(e) {
                    if (({
                            element: e
                        } = super.exportDOM(e)), e && this.isEmpty() && e.append(document.createElement("br")), e) {
                        var t = this.getFormatType();
                        e.style.textAlign = t, (t = this.getDirection()) && (e.dir = t)
                    }
                    return {
                        element: e
                    }
                }
                static importJSON(e) {
                    let t = m();
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "quote"
                    }
                }
                insertNewAfter(e, t) {
                    e = s.$createParagraphNode();
                    let n = this.getDirection();
                    return e.setDirection(n), this.insertAfter(e, t), e
                }
                collapseAtStart() {
                    let e = s.$createParagraphNode();
                    return this.getChildren().forEach((t => e.append(t))), this.replace(e), !0
                }
            }

            function m() {
                return s.$applyNodeReplacement(new _)
            }
            class y extends s.ElementNode {
                static getType() {
                    return "heading"
                }
                static clone(e) {
                    return new y(e.__tag, e.__key)
                }
                constructor(e, t) {
                    super(t), this.__tag = e
                }
                getTag() {
                    return this.__tag
                }
                createDOM(e) {
                    let t = this.__tag,
                        n = document.createElement(t);
                    return void 0 !== (e = e.theme.heading) && o.addClassNamesToElement(n, e[t]), n
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        h1: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        h2: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        h3: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        h4: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        h5: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        h6: () => ({
                            conversion: v,
                            priority: 0
                        }),
                        p: e => null !== (e = e.firstChild) && N(e) ? {
                            conversion: () => ({
                                node: null
                            }),
                            priority: 3
                        } : null,
                        span: e => N(e) ? {
                            conversion: () => ({
                                node: E("h1")
                            }),
                            priority: 3
                        } : null
                    }
                }
                exportDOM(e) {
                    if (({
                            element: e
                        } = super.exportDOM(e)), e && this.isEmpty() && e.append(document.createElement("br")), e) {
                        var t = this.getFormatType();
                        e.style.textAlign = t, (t = this.getDirection()) && (e.dir = t)
                    }
                    return {
                        element: e
                    }
                }
                static importJSON(e) {
                    let t = E(e.tag);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        tag: this.getTag(),
                        type: "heading",
                        version: 1
                    }
                }
                insertNewAfter(e, t = !0) {
                    e = 0 < (e = e ? e.anchor.offset : 0) && e < this.getTextContentSize() ? E(this.getTag()) : s.$createParagraphNode();
                    let n = this.getDirection();
                    return e.setDirection(n), this.insertAfter(e, t), e
                }
                collapseAtStart() {
                    let e = this.isEmpty() ? s.$createParagraphNode() : E(this.getTag());
                    return this.getChildren().forEach((t => e.append(t))), this.replace(e), !0
                }
                extractWithChild() {
                    return !0
                }
            }

            function N(e) {
                return "span" === e.nodeName.toLowerCase() && "26pt" === e.style.fontSize
            }

            function v(e) {
                let t = null;
                return "h1" !== (e = e.nodeName.toLowerCase()) && "h2" !== e && "h3" !== e && "h4" !== e && "h5" !== e && "h6" !== e || (t = E(e)), {
                    node: t
                }
            }

            function T() {
                return {
                    node: m()
                }
            }

            function E(e) {
                return s.$applyNodeReplacement(new y(e))
            }

            function C(e) {
                let t = null;
                if (e instanceof DragEvent ? t = e.dataTransfer : e instanceof ClipboardEvent && (t = e.clipboardData), null === t) return [!1, [], !1];
                var n = t.types;
                return e = n.includes("Files"), n = n.includes("text/html") || n.includes("text/plain"), [e, Array.from(t.files), n]
            }

            function x(e) {
                var t = s.$getSelection();
                if (!s.$isRangeSelection(t)) return !1;
                let n = new Set;
                t = t.getNodes();
                for (let s = 0; s < t.length; s++) {
                    var r = t[s],
                        i = r.getKey();
                    n.has(i) || (i = (r = o.$getNearestBlockElementAncestorOrThrow(r)).getKey(), r.canIndent() && !n.has(i) && (n.add(i), e(r)))
                }
                return 0 < n.size
            }

            function b(e) {
                return e = s.$getNearestNodeFromDOMNode(e), s.$isDecoratorNode(e)
            }
            t.$createHeadingNode = E, t.$createQuoteNode = m, t.$isHeadingNode = function(e) {
                return e instanceof y
            }, t.$isQuoteNode = function(e) {
                return e instanceof _
            }, t.DRAG_DROP_PASTE = p, t.HeadingNode = y, t.QuoteNode = _, t.eventFiles = C, t.registerRichText = function(e) {
                return o.mergeRegister(e.registerCommand(s.CLICK_COMMAND, (() => {
                    const e = s.$getSelection();
                    return !!s.$isNodeSelection(e) && (e.clear(), !0)
                }), 0), e.registerCommand(s.DELETE_CHARACTER_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteWord(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.deleteLine(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, (t => {
                    const n = s.$getSelection();
                    if ("string" == typeof t) s.$isRangeSelection(n) ? n.insertText(t) : s.DEPRECATED_$isGridSelection(n);
                    else {
                        if (!s.$isRangeSelection(n) && !s.DEPRECATED_$isGridSelection(n)) return !1;
                        const i = t.dataTransfer;
                        null != i ? r.$insertDataTransferForRichText(i, n, e) : s.$isRangeSelection(n) && (t = t.data) && n.insertText(t)
                    }
                    return !0
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, (() => {
                    const e = s.$getSelection();
                    return !!s.$isRangeSelection(e) && (e.removeText(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_TEXT_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.formatText(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_ELEMENT_COMMAND, (e => {
                    var t = s.$getSelection();
                    if (!s.$isRangeSelection(t) && !s.$isNodeSelection(t)) return !1;
                    t = t.getNodes();
                    for (const n of t) o.$getNearestBlockElementAncestorOrThrow(n).setFormat(e);
                    return !0
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, (e => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, (() => {
                    const e = s.$getSelection();
                    return !!s.$isRangeSelection(e) && (e.insertParagraph(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_TAB_COMMAND, (() => (s.$insertNodes([s.$createTabNode()]), !0)), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INDENT_CONTENT_COMMAND, (() => x((e => {
                    const t = e.getIndent();
                    e.setIndent(t + 1)
                }))), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.OUTDENT_CONTENT_COMMAND, (() => x((e => {
                    const t = e.getIndent();
                    0 < t && e.setIndent(t - 1)
                }))), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_UP_COMMAND, (e => {
                    var t = s.$getSelection();
                    if (s.$isNodeSelection(t) && !b(e.target)) {
                        if (0 < (e = t.getNodes()).length) return e[0].selectPrevious(), !0
                    } else if (s.$isRangeSelection(t) && (t = s.$getAdjacentNode(t.focus, !0), s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline())) return t.selectPrevious(), e.preventDefault(), !0;
                    return !1
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_DOWN_COMMAND, (e => {
                    var t = s.$getSelection();
                    if (s.$isNodeSelection(t)) {
                        if (0 < (e = t.getNodes()).length) return e[0].selectNext(0, 0), !0
                    } else if (s.$isRangeSelection(t)) {
                        let n = t.focus;
                        if ("root" === n.key && n.offset === s.$getRoot().getChildrenSize()) return e.preventDefault(), !0;
                        if (t = s.$getAdjacentNode(t.focus, !1), s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline()) return t.selectNext(), e.preventDefault(), !0
                    }
                    return !1
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, (e => {
                    const t = s.$getSelection();
                    if (s.$isNodeSelection(t)) {
                        var n = t.getNodes();
                        if (0 < n.length) return e.preventDefault(), n[0].selectPrevious(), !0
                    }
                    return !!s.$isRangeSelection(t) && (!!i.$shouldOverrideDefaultCharacterSelection(t, !0) && (n = e.shiftKey, e.preventDefault(), i.$moveCharacter(t, n, !0), !0))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, (e => {
                    const t = s.$getSelection();
                    if (s.$isNodeSelection(t) && !b(e.target)) {
                        var n = t.getNodes();
                        if (0 < n.length) return e.preventDefault(), n[0].selectNext(0, 0), !0
                    }
                    return !!s.$isRangeSelection(t) && (n = e.shiftKey, !!i.$shouldOverrideDefaultCharacterSelection(t, !1) && (e.preventDefault(), i.$moveCharacter(t, n, !1), !0))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, (t => {
                    if (b(t.target)) return !1;
                    const n = s.$getSelection();
                    if (!s.$isRangeSelection(n)) return !1;
                    t.preventDefault(), ({
                        anchor: t
                    } = n);
                    const r = t.getNode();
                    return n.isCollapsed() && 0 === t.offset && !s.$isRootNode(r) && 0 < o.$getNearestBlockElementAncestorOrThrow(r).getIndent() ? e.dispatchCommand(s.OUTDENT_CONTENT_COMMAND, void 0) : e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, (t => {
                    if (b(t.target)) return !1;
                    const n = s.$getSelection();
                    return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, !1))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, (t => {
                    const n = s.$getSelection();
                    if (!s.$isRangeSelection(n)) return !1;
                    if (null !== t) {
                        if ((g || d || h) && c) return !1;
                        if (t.preventDefault(), t.shiftKey) return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, !1)
                    }
                    return e.dispatchCommand(s.INSERT_PARAGRAPH_COMMAND, void 0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ESCAPE_COMMAND, (() => {
                    const t = s.$getSelection();
                    return !!s.$isRangeSelection(t) && (e.blur(), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, (t => {
                    const [, n] = C(t);
                    if (0 < n.length) {
                        var r = l(t.clientX, t.clientY);
                        if (null !== r) {
                            const {
                                offset: t,
                                node: o
                            } = r;
                            var i = s.$getNearestNodeFromDOMNode(o);
                            if (null !== i) {
                                if (r = s.$createRangeSelection(), s.$isTextNode(i)) r.anchor.set(i.getKey(), t, "text"), r.focus.set(i.getKey(), t, "text");
                                else {
                                    const e = i.getParentOrThrow().getKey();
                                    i = i.getIndexWithinParent() + 1, r.anchor.set(e, i, "element"), r.focus.set(e, i, "element")
                                }
                                r = s.$normalizeSelection__EXPERIMENTAL(r), s.$setSelection(r)
                            }
                            e.dispatchCommand(p, n)
                        }
                        return t.preventDefault(), !0
                    }
                    return t = s.$getSelection(), !!s.$isRangeSelection(t)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, (e => {
                    [e] = C(e);
                    const t = s.$getSelection();
                    return !(e && !s.$isRangeSelection(t))
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGOVER_COMMAND, (e => {
                    var [t] = C(e);
                    const n = s.$getSelection();
                    return !(t && !s.$isRangeSelection(n)) && (null !== (t = l(e.clientX, e.clientY)) && (t = s.$getNearestNodeFromDOMNode(t.node), s.$isDecoratorNode(t) && e.preventDefault()), !0)
                }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, (t => (r.copyToClipboard(e, t instanceof ClipboardEvent ? t : null), !0)), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, (t => (async function(e, t) {
                    await r.copyToClipboard(t, e instanceof ClipboardEvent ? e : null), t.update((() => {
                        let e = s.$getSelection();
                        s.$isRangeSelection(e) ? e.removeText() : s.$isNodeSelection(e) && e.getNodes().forEach((e => e.remove()))
                    }))
                }(t, e), !0)), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, (t => {
                    const [, n, i] = C(t);
                    if (0 < n.length && !i) return e.dispatchCommand(p, n), !0;
                    if (s.isSelectionCapturedInDecoratorInput(t.target)) return !1;
                    const o = s.$getSelection();
                    return !(!s.$isRangeSelection(o) && !s.DEPRECATED_$isGridSelection(o)) && (function(e, t) {
                        e.preventDefault(), t.update((() => {
                            let n = s.$getSelection(),
                                i = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
                            null != i && (s.$isRangeSelection(n) || s.DEPRECATED_$isGridSelection(n)) && r.$insertDataTransferForRichText(i, n, t)
                        }), {
                            tag: "paste"
                        })
                    }(t, e), !0)
                }), s.COMMAND_PRIORITY_EDITOR))
            }
        },
        389408: (e, t, n) => {
            "use strict";
            const r = n(649235);
            e.exports = r
        },
        649235: (e, t, n) => {
            "use strict";
            var r = n(932998);
            let i = new Map;

            function o(e) {
                for (; null != e;) {
                    if (e.nodeType === Node.TEXT_NODE) return e;
                    e = e.firstChild
                }
                return null
            }

            function s(e) {
                let t = e.parentNode;
                if (null == t) throw Error("Should never happen");
                return [t, Array.from(t.childNodes).indexOf(e)]
            }

            function l(e) {
                let t = {};
                e = e.split(";");
                for (let n of e)
                    if ("" !== n) {
                        let [e, r] = n.split(/:([^]+)/);
                        t[e.trim()] = r.trim()
                    }
                return t
            }

            function a(e) {
                let t = i.get(e);
                return void 0 === t && (t = l(e), i.set(e, t)), t
            }

            function u(e, t) {
                var n = a("getStyle" in e ? e.getStyle() : e.style);
                n = function(e) {
                    let t = "";
                    for (let n in e) n && (t += `${n}: ${e[n]};`);
                    return t
                }(t = Object.entries(t).reduce(((e, [t, n]) => (null === n ? delete e[t] : e[t] = n, e)), { ...n
                })), e.setStyle(n), i.set(n, t)
            }

            function c(e) {
                for (; null !== e && !r.$isRootOrShadowRoot(e);) {
                    let t = e.getLatest(),
                        n = e.getParent();
                    0 === t.getChildrenSize() && e.remove(!0), e = n
                }
            }

            function d(e, t, n, i, o = null) {
                if (0 !== t.length) {
                    var s = t[0],
                        l = new Map,
                        a = [];
                    (s = r.$isElementNode(s) ? s : s.getParentOrThrow()).isInline() && (s = s.getParentOrThrow());
                    for (var u = !1; null !== s;) {
                        var d = s.getPreviousSibling();
                        if (null !== d) {
                            s = d, u = !0;
                            break
                        }
                        if (s = s.getParentOrThrow(), r.$isRootOrShadowRoot(s)) break
                    }
                    d = new Set;
                    for (var g = 0; g < n; g++) {
                        var f = t[g];
                        r.$isElementNode(f) && 0 === f.getChildrenSize() && d.add(f.getKey())
                    }
                    var h = new Set;
                    for (g = 0; g < n; g++) {
                        var p = (f = t[g]).getParent();
                        if (null !== p && p.isInline() && (p = p.getParent()), null !== p && r.$isLeafNode(f) && !h.has(f.getKey())) {
                            if (f = p.getKey(), void 0 === l.get(f)) {
                                let e = i();
                                e.setFormat(p.getFormatType()), e.setIndent(p.getIndent()), a.push(e), l.set(f, e), p.getChildren().forEach((t => {
                                    e.append(t), h.add(t.getKey()), r.$isElementNode(t) && t.getChildrenKeys().forEach((e => h.add(e)))
                                })), c(p)
                            }
                        } else d.has(f.getKey()) && ((p = i()).setFormat(f.getFormatType()), p.setIndent(f.getIndent()), a.push(p), f.remove(!0))
                    }
                    if (null !== o)
                        for (t = 0; t < a.length; t++) o.append(a[t]);
                    if (t = null, r.$isRootOrShadowRoot(s))
                        if (u)
                            if (null !== o) s.insertAfter(o);
                            else
                                for (o = a.length - 1; 0 <= o; o--) s.insertAfter(a[o]);
                    else if (u = s.getFirstChild(), r.$isElementNode(u) && (s = u), null === u)
                        if (o) s.append(o);
                        else
                            for (o = 0; o < a.length; o++) u = a[o], s.append(u), t = u;
                    else if (null !== o) u.insertBefore(o);
                    else
                        for (s = 0; s < a.length; s++) o = a[s], u.insertBefore(o), t = o;
                    else if (o) s.insertAfter(o);
                    else
                        for (o = a.length - 1; 0 <= o; o--) u = a[o], s.insertAfter(u), t = u;
                    a = r.$getPreviousSelection(), r.$isRangeSelection(a) && a.anchor.getNode().isAttached() && a.focus.getNode().isAttached() ? r.$setSelection(a.clone()) : null !== t ? t.selectEnd() : e.dirty = !0
                }
            }

            function g(e, t, n, r) {
                e.modify(t ? "extend" : "move", n, r)
            }

            function f(e) {
                return e = e.anchor.getNode(), "rtl" === (r.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection()
            }
            t.$addNodeStyle = function(e) {
                let t = l(e = e.getStyle());
                i.set(e, t)
            }, t.$cloneWithProperties = function(e) {
                let t = (e = e.getLatest()).constructor.clone(e);
                return t.__parent = e.__parent, t.__next = e.__next, t.__prev = e.__prev, r.$isElementNode(e) && r.$isElementNode(t) ? (t.__first = e.__first, t.__last = e.__last, t.__size = e.__size, t.__format = e.__format, t.__indent = e.__indent, t.__dir = e.__dir, t) : (r.$isTextNode(e) && r.$isTextNode(t) && (t.__format = e.__format, t.__style = e.__style, t.__mode = e.__mode, t.__detail = e.__detail), t)
            }, t.$getSelectionStyleValueForProperty = function(e, t, n = "") {
                let i = null,
                    o = e.getNodes();
                var s = e.anchor,
                    l = e.focus,
                    u = e.isBackward();
                let c = u ? l.offset : s.offset;
                if (s = u ? l.getNode() : s.getNode(), "" !== e.style && (null !== (e = a(e.style)) && t in e)) return e[t];
                for (e = 0; e < o.length; e++) {
                    var d = o[e];
                    if ((0 === e || 0 !== c || !d.is(s)) && r.$isTextNode(d))
                        if (l = t, u = n, l = null !== (d = a(d = d.getStyle())) && d[l] || u, null === i) i = l;
                        else if (i !== l) {
                        i = "";
                        break
                    }
                }
                return null === i ? n : i
            }, t.$isAtNodeEnd = function(e) {
                return "text" === e.type ? e.offset === e.getNode().getTextContentSize() : e.offset === e.getNode().getChildrenSize()
            }, t.$isParentElementRTL = f, t.$moveCaretSelection = g, t.$moveCharacter = function(e, t, n) {
                let r = f(e);
                g(e, t, n ? !r : r, "character")
            }, t.$patchStyleText = function(e, t) {
                var n = e.getNodes();
                let i = n.length - 1,
                    o = n[0],
                    s = n[i];
                if (e.isCollapsed()) u(e, t);
                else {
                    var l = e.anchor,
                        a = e.focus,
                        c = o.getTextContent().length,
                        d = a.offset,
                        g = l.offset,
                        f = l.isBefore(a),
                        h = f ? g : d;
                    e = f ? d : g;
                    var p = f ? l.type : a.type,
                        _ = f ? a.type : l.type;
                    if (l = f ? a.key : l.key, r.$isTextNode(o) && h === c && (a = o.getNextSibling(), r.$isTextNode(a) && (h = g = 0, o = a)), 1 === n.length) r.$isTextNode(o) && ((h = "element" === p ? 0 : g > d ? d : g) !== (e = "element" === _ ? c : g > d ? g : d) && (0 === h && e === c ? (u(o, t), o.select(h, e)) : (n = o.splitText(h, e), u(n = 0 === h ? n[0] : n[1], t), n.select(0, e - h))));
                    else
                        for (r.$isTextNode(o) && h < o.getTextContentSize() && (0 !== h && (o = o.splitText(h)[1]), u(o, t)), r.$isTextNode(s) && (h = s.getTextContent().length, s.__key !== l && 0 !== e && (e = h), e !== h && ([s] = s.splitText(e)), 0 !== e && u(s, t)), e = 1; e < i; e++) c = (h = n[e]).getKey(), r.$isTextNode(h) && c !== o.getKey() && c !== s.getKey() && !h.isToken() && u(h, t)
                }
            }, t.$selectAll = function(e) {
                let t = e.anchor;
                e = e.focus;
                var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
                let i = n.getFirstDescendant();
                n = n.getLastDescendant();
                let o = "element",
                    s = "element",
                    l = 0;
                r.$isTextNode(i) ? o = "text" : r.$isElementNode(i) || null === i || (i = i.getParentOrThrow()), r.$isTextNode(n) ? (s = "text", l = n.getTextContentSize()) : r.$isElementNode(n) || null === n || (n = n.getParentOrThrow()), i && n && (t.set(i.getKey(), 0, o), e.set(n.getKey(), l, s))
            }, t.$setBlocksType = function(e, t) {
                if ("root" === e.anchor.key) {
                    t = t();
                    var n = r.$getRoot();
                    (e = n.getFirstChild()) ? e.replace(t, !0): n.append(t)
                } else
                    for (n = e.getNodes(), e = e.anchor.getNode().getParentOrThrow(), -1 === n.indexOf(e) && n.push(e), e.isInline() && (e = e.getParentOrThrow(), -1 === n.indexOf(e) && n.push(e)), e = 0; e < n.length; e++) {
                        let s = n[e];
                        var i = s;
                        if (!r.$isElementNode(i) || r.$isRootOrShadowRoot(i)) i = !1;
                        else {
                            var o = i.getFirstChild();
                            o = null === o || r.$isTextNode(o) || o.isInline(), i = !i.isInline() && !1 !== i.canBeEmpty() && o
                        }
                        i && ((i = t()).setFormat(s.getFormatType()), i.setIndent(s.getIndent()), s.replace(i, !0))
                    }
            }, t.$shouldOverrideDefaultCharacterSelection = function(e, t) {
                return e = r.$getAdjacentNode(e.focus, t), r.$isDecoratorNode(e) && !e.isIsolated() || r.$isElementNode(e) && !e.isInline() && !e.canBeEmpty()
            }, t.$sliceSelectedTextNodeContent = function(e, t) {
                if (t.isSelected() && !t.isSegmented() && !t.isToken() && (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e))) {
                    var n = e.anchor.getNode(),
                        i = e.focus.getNode(),
                        o = t.is(n),
                        s = t.is(i);
                    if (o || s) {
                        o = e.isBackward();
                        let r, [l, a] = e.getCharacterOffsets();
                        e = n.is(i), s = t.is(o ? i : n), i = t.is(o ? n : i), n = 0, e ? (n = l > a ? a : l, r = l > a ? l : a) : s ? (n = o ? a : l, r = void 0) : i && (n = 0, r = o = o ? l : a), t.__text = t.__text.slice(n, r)
                    }
                }
                return t
            }, t.$wrapNodes = function(e, t, n = null) {
                var i = e.getNodes();
                let o = i.length;
                var s = e.anchor;
                if (0 === o || 1 === o && "element" === s.type && 0 === s.getNode().getChildrenSize()) {
                    i = (e = "text" === s.type ? s.getNode().getParentOrThrow() : s.getNode()).getChildren();
                    let r = t();
                    r.setFormat(e.getFormatType()), r.setIndent(e.getIndent()), i.forEach((e => r.append(e))), n && (r = n.append(r)), e.replace(r)
                } else {
                    s = null;
                    var l = [];
                    for (let a = 0; a < o; a++) {
                        let o = i[a];
                        r.$isRootOrShadowRoot(o) ? (d(e, l, l.length, t, n), l = [], s = o) : null === s || null !== s && r.$hasAncestor(o, s) ? l.push(o) : (d(e, l, l.length, t, n), l = [o])
                    }
                    d(e, l, l.length, t, n)
                }
            }, t.createDOMRange = function(e, t, n, i, l) {
                let a = t.getKey(),
                    u = i.getKey(),
                    c = document.createRange(),
                    d = e.getElementByKey(a);
                if (e = e.getElementByKey(u), r.$isTextNode(t) && (d = o(d)), r.$isTextNode(i) && (e = o(e)), void 0 === t || void 0 === i || null === d || null === e) return null;
                "BR" === d.nodeName && ([d, n] = s(d)), "BR" === e.nodeName && ([e, l] = s(e)), t = d.firstChild, d === e && null != t && "BR" === t.nodeName && 0 === n && 0 === l && (l = 1);
                try {
                    c.setStart(d, n), c.setEnd(e, l)
                } catch (e) {
                    return null
                }
                return !c.collapsed || n === l && a === u || (c.setStart(e, l), c.setEnd(d, n)), c
            }, t.createRectsFromDOMRange = function(e, t) {
                var n = e.getRootElement();
                if (null === n) return [];
                e = n.getBoundingClientRect(), n = getComputedStyle(n), n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
                let r, i = (t = Array.from(t.getClientRects())).length;
                t.sort(((e, t) => {
                    let n = e.top - t.top;
                    return 3 >= Math.abs(n) ? e.left - t.left : n
                }));
                for (let o = 0; o < i; o++) {
                    let s = t[o],
                        l = s.width + n === e.width;
                    r && r.top <= s.top && r.top + r.height > s.top && r.left + r.width > s.left || l ? (t.splice(o--, 1), i--) : r = s
                }
                return t
            }, t.getStyleObjectFromCSS = a, t.trimTextContentFromAnchor = function(e, t, n) {
                let i = t.getNode();
                if (r.$isElementNode(i)) {
                    var o = i.getDescendantByIndex(t.offset);
                    null !== o && (i = o)
                }
                for (; 0 < n && null !== i;) {
                    var s = i.getPreviousSibling(),
                        l = 0;
                    if (null === s) {
                        for (var a = (o = i.getParentOrThrow()).getPreviousSibling(); null === a;) {
                            if (null === (o = o.getParent())) {
                                s = null;
                                break
                            }
                            a = o.getPreviousSibling()
                        }
                        null !== o && (l = o.isInline() ? 0 : 2, s = r.$isElementNode(a) ? a.getLastDescendant() : a)
                    }
                    if ("" === (a = i.getTextContent()) && r.$isElementNode(i) && !i.isInline() && (a = "\n\n"), o = i.getTextContentSize(), !r.$isTextNode(i) || n >= o) a = i.getParent(), i.remove(), null == a || 0 !== a.getChildrenSize() || r.$isRootNode(a) || a.remove(), n -= o + l, i = s;
                    else {
                        let u = i.getKey();
                        l = e.getEditorState().read((() => {
                            const e = r.$getNodeByKey(u);
                            return r.$isTextNode(e) && e.isSimpleText() ? e.getTextContent() : null
                        })), s = o - n;
                        let c = a.slice(0, s);
                        null !== l && l !== a ? (n = r.$getPreviousSelection(), o = i, i.isSimpleText() ? i.setTextContent(l) : (o = r.$createTextNode(l), i.replace(o)), r.$isRangeSelection(n) && n.isCollapsed() && (n = n.anchor.offset, o.select(n, n))) : i.isSimpleText() ? (l = t.key === u, (a = t.offset) < n && (a = o), n = l ? a - n : 0, o = l ? a : s, l && 0 === n ? ([n] = i.splitText(n, o), n.remove()) : ([, n] = i.splitText(n, o), n.remove())) : (n = r.$createTextNode(c), i.replace(n)), n = 0
                    }
                }
            }
        },
        302977: (e, t, n) => {
            "use strict";
            const r = n(328263);
            e.exports = r
        },
        328263: (e, t, n) => {
            "use strict";
            var r = n(932998);

            function i(e, t = !0) {
                return !e && (e = o(), t && (e = e.trim()), "" === e)
            }

            function o() {
                return r.$getRoot().getTextContent()
            }

            function s(e) {
                if (!i(e, !1)) return !1;
                let t = (e = r.$getRoot().getChildren()).length;
                if (1 < t) return !1;
                for (let i = 0; i < t; i++) {
                    var n = e[i];
                    if (r.$isDecoratorNode(n)) return !1;
                    if (r.$isElementNode(n)) {
                        if (!r.$isParagraphNode(n) || 0 !== n.__indent) return !1;
                        let e = (n = n.getChildren()).length;
                        for (let t = 0; t < e; t++)
                            if (!r.$isTextNode(n[i])) return !1
                    }
                }
                return !0
            }
            t.$canShowPlaceholder = s, t.$canShowPlaceholderCurry = function(e) {
                return () => s(e)
            }, t.$findTextIntersectionFromCharacters = function(e, t) {
                var n = e.getFirstChild();
                e = 0;
                e: for (; null !== n;) {
                    if (r.$isElementNode(n)) {
                        var i = n.getFirstChild();
                        if (null !== i) {
                            n = i;
                            continue
                        }
                    } else if (r.$isTextNode(n)) {
                        if (e + (i = n.getTextContentSize()) > t) return {
                            node: n,
                            offset: t - e
                        };
                        e += i
                    }
                    if (null === (i = n.getNextSibling())) {
                        for (n = n.getParent(); null !== n;) {
                            if (null !== (i = n.getNextSibling())) {
                                n = i;
                                continue e
                            }
                            n = n.getParent()
                        }
                        break
                    }
                    n = i
                }
                return null
            }, t.$isRootTextContentEmpty = i, t.$isRootTextContentEmptyCurry = function(e, t) {
                return () => i(e, t)
            }, t.$rootTextContent = o, t.registerLexicalTextEntity = function(e, t, n, i) {
                let o = e => {
                    const t = r.$createTextNode(e.getTextContent());
                    t.setFormat(e.getFormat()), e.replace(t)
                };
                return [e.registerNodeTransform(r.TextNode, (e => {
                    if (e.isSimpleText()) {
                        var s = e.getPreviousSibling(),
                            l = e.getTextContent(),
                            a = e;
                        if (r.$isTextNode(s)) {
                            var u = s.getTextContent(),
                                c = t(u + l);
                            if (s instanceof n) {
                                if (null === c || 0 !== s.getLatest().__mode) return void o(s);
                                if (0 < (c = c.end - u.length)) return a = u + (a = l.slice(0, c)), s.select(), s.setTextContent(a), void(c === l.length ? e.remove() : (s = l.slice(c), e.setTextContent(s)))
                            } else if (null === c || c.start < u.length) return
                        }
                        for (;;) {
                            if (l = c = null === (e = t(l)) ? "" : l.slice(e.end), "" === c) {
                                if (u = a.getNextSibling(), r.$isTextNode(u)) {
                                    if (c = a.getTextContent() + u.getTextContent(), null === (c = t(c))) {
                                        u instanceof n ? o(u) : u.markDirty();
                                        break
                                    }
                                    if (0 !== c.start) break
                                }
                            } else if (null !== (u = t(c)) && 0 === u.start) break;
                            if (null === e) break;
                            if (0 === e.start && r.$isTextNode(s) && s.isTextEntity()) continue;
                            let d;
                            if (0 === e.start ? [d, a] = a.splitText(e.end) : [, d, a] = a.splitText(e.start, e.end), (e = i(d)).setFormat(d.getFormat()), d.replace(e), null == a) break
                        }
                    }
                })), e = e.registerNodeTransform(n, (e => {
                    var i = e.getTextContent();
                    const s = t(i);
                    null === s || 0 !== s.start ? o(e) : i.length > s.end ? e.splitText(s.end) : (i = e.getPreviousSibling(), r.$isTextNode(i) && i.isTextEntity() && (o(i), o(e)), i = e.getNextSibling(), r.$isTextNode(i) && i.isTextEntity() && (o(i), e instanceof n && o(e)))
                }))]
            }
        },
        376969: (e, t, n) => {
            "use strict";
            const r = n(487502);
            e.exports = r
        },
        487502: (e, t, n) => {
            "use strict";
            var r = n(389408),
                i = n(932998);

            function o(e, t) {
                for (let n of t)
                    if (e.type.startsWith(n)) return !0;
                return !1
            }

            function s(e, t) {
                for (; e !== i.$getRoot() && null != e;) {
                    if (t(e)) return e;
                    e = e.getParent()
                }
                return null
            }

            function l(e) {
                return 1 === e.nodeType
            }
            t.$splitNode = i.$splitNode, t.$dfs = function(e, t) {
                let n = [];
                e = (e || i.$getRoot()).getLatest(), t = t || (i.$isElementNode(e) ? e.getLastDescendant() : e);
                for (var r = e, o = 0; null !== (r = r.getParent());) o++;
                for (r = o; null !== e && !e.is(t);)
                    if (n.push({
                            depth: r,
                            node: e
                        }), i.$isElementNode(e) && 0 < e.getChildrenSize()) e = e.getFirstChild(), r++;
                    else
                        for (o = null; null === o && null !== e;) null === (o = e.getNextSibling()) ? (e = e.getParent(), r--) : e = o;
                return null !== e && e.is(t) && n.push({
                    depth: r,
                    node: e
                }), n
            }, t.$findMatchingParent = s, t.$getNearestBlockElementAncestorOrThrow = function(e) {
                if (e = s(e, (e => i.$isElementNode(e) && !e.isInline())), !i.$isElementNode(e)) throw Error("Minified Lexical error #4; visit https://lexical.dev/docs/error?code=4 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                return e
            }, t.$getNearestNodeOfType = function(e, t) {
                for (; null != e;) {
                    if (e instanceof t) return e;
                    e = e.getParent()
                }
                return null
            }, t.$insertNodeToNearestRoot = function(e) {
                var t = i.$getSelection();
                if (i.$isRangeSelection(t)) {
                    var {
                        focus: n
                    } = t;
                    if (t = n.getNode(), n = n.offset, i.$isRootOrShadowRoot(t)) null == (n = t.getChildAtIndex(n)) ? t.append(e) : n.insertBefore(e), e.selectNext();
                    else {
                        let r, o;
                        i.$isTextNode(t) ? (r = t.getParentOrThrow(), o = t.getIndexWithinParent(), 0 < n && (o += 1, t.splitText(n))) : (r = t, o = n), [, t] = i.$splitNode(r, o), t.insertBefore(e), t.selectStart()
                    }
                } else i.$isNodeSelection(t) || i.DEPRECATED_$isGridSelection(t) ? (t = t.getNodes())[t.length - 1].getTopLevelElementOrThrow().insertAfter(e) : i.$getRoot().append(e), t = i.$createParagraphNode(), e.insertAfter(t), t.select();
                return e.getLatest()
            }, t.$restoreEditorState = function(e, t) {
                let n = new Map,
                    o = e._pendingEditorState;
                for (let [e, o] of t._nodeMap) {
                    let t = r.$cloneWithProperties(o);
                    i.$isTextNode(t) && (t.__text = o.__text), n.set(e, t)
                }
                o && (o._nodeMap = n), e._dirtyType = 2, e = t._selection, i.$setSelection(null === e ? null : e.clone())
            }, t.$wrapNodeInElement = function(e, t) {
                return t = t(), e.replace(t), t.append(e), t
            }, t.addClassNamesToElement = function(e, ...t) {
                t.forEach((t => {
                    "string" == typeof t && (t = t.split(" ").filter((e => "" !== e)), e.classList.add(...t))
                }))
            }, t.isHTMLAnchorElement = function(e) {
                return l(e) && "A" === e.tagName
            }, t.isHTMLElement = l, t.isMimeType = o, t.mediaFileReader = function(e, t) {
                let n = e[Symbol.iterator]();
                return new Promise(((e, r) => {
                    let i = [],
                        s = () => {
                            const {
                                done: l,
                                value: a
                            } = n.next();
                            if (l) return e(i);
                            const u = new FileReader;
                            u.addEventListener("error", r), u.addEventListener("load", (() => {
                                const e = u.result;
                                "string" == typeof e && i.push({
                                    file: a,
                                    result: e
                                }), s()
                            })), o(a, t) ? u.readAsDataURL(a) : s()
                        };
                    s()
                }))
            }, t.mergeRegister = function(...e) {
                return () => {
                    e.forEach((e => e()))
                }
            }, t.registerNestedElementResolver = function(e, t, n, r) {
                return e.registerNodeTransform(t, (e => {
                    e: {
                        for (var i = e.getChildren(), o = 0; o < i.length; o++)
                            if (i[o] instanceof t) {
                                i = null;
                                break e
                            }
                        for (i = e; null !== i;)
                            if (o = i, (i = i.getParent()) instanceof t) {
                                i = {
                                    child: o,
                                    parent: i
                                };
                                break e
                            }
                        i = null
                    }
                    if (null !== i) {
                        const {
                            child: t,
                            parent: s
                        } = i;
                        if (t.is(e)) {
                            if (r(s, e), i = (e = t.getNextSiblings()).length, s.insertAfter(t), 0 !== i) {
                                o = n(s), t.insertAfter(o);
                                for (let t = 0; t < i; t++) o.append(e[t])
                            }
                            s.canBeEmpty() || 0 !== s.getChildrenSize() || s.remove()
                        }
                    }
                }))
            }, t.removeClassNamesFromElement = function(e, ...t) {
                t.forEach((t => {
                    "string" == typeof t && e.classList.remove(...t.split(" "))
                }))
            }
        },
        932998: (e, t, n) => {
            "use strict";
            const r = n(734556);
            e.exports = r
        },
        734556: (e, t) => {
            "use strict";
            let n = {},
                r = {},
                i = {},
                o = {},
                s = {},
                l = {},
                a = {},
                u = {},
                c = {},
                d = {},
                g = {},
                f = {},
                h = {},
                p = {},
                _ = {},
                m = {},
                y = {},
                N = {},
                v = {},
                T = {},
                E = {},
                C = {},
                x = {},
                b = {},
                S = {},
                A = {},
                O = {},
                w = {},
                k = {},
                R = {},
                D = {},
                M = {},
                $ = {},
                I = {},
                P = {};

            function L(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }
            let F = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                B = F && "documentMode" in document ? document.documentMode : null,
                z = F && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
                W = F && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                K = !(!F || !("InputEvent" in window) || B) && "getTargetRanges" in new window.InputEvent("input"),
                U = F && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                Y = F && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                j = F && /^(?=.*Chrome).*/i.test(navigator.userAgent),
                H = F && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !j,
                G = U || Y || H ? " " : "​",
                V = W ? " " : G,
                J = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
                Z = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
                q = {
                    bold: 1,
                    code: 16,
                    highlight: 128,
                    italic: 2,
                    strikethrough: 4,
                    subscript: 32,
                    superscript: 64,
                    underline: 8
                },
                X = {
                    directionless: 1,
                    unmergeable: 2
                },
                Q = {
                    center: 2,
                    end: 6,
                    justify: 4,
                    left: 1,
                    right: 3,
                    start: 5
                },
                ee = {
                    2: "center",
                    6: "end",
                    4: "justify",
                    1: "left",
                    3: "right",
                    5: "start"
                },
                te = {
                    normal: 0,
                    segmented: 2,
                    token: 1
                },
                ne = {
                    0: "normal",
                    2: "segmented",
                    1: "token"
                },
                re = !1,
                ie = 0;

            function oe(e) {
                ie = e.timeStamp
            }

            function se(e, t, n) {
                return t.__lexicalLineBreak === e || void 0 !== e[`__lexicalKey_${n._key}`]
            }

            function le(e, t, n) {
                re = !0;
                let r = 100 < performance.now() - ie;
                try {
                    br(e, (() => {
                        let i = er() || function(e) {
                            return e.getEditorState().read((() => {
                                let e = er();
                                return null !== e ? e.clone() : null
                            }))
                        }(e);
                        var o = new Map,
                            s = e.getRootElement(),
                            l = e._editorState,
                            a = e._blockCursorElement;
                        let u = !1,
                            c = "";
                        for (var d = 0; d < t.length; d++) {
                            var g = t[d],
                                f = g.type,
                                h = g.target,
                                p = Se(h, l);
                            if (!(null === p && h !== s || Ar(p)))
                                if ("characterData" === f) {
                                    if (g = r && wn(p)) e: {
                                        f = h;
                                        var _ = p;
                                        if (Fn(g = i)) {
                                            var m = g.anchor.getNode();
                                            if (m.is(_) && g.format !== m.getFormat()) {
                                                g = !1;
                                                break e
                                            }
                                        }
                                        g = 3 === f.nodeType && _.isAttached()
                                    }
                                    g && (f = g = null, null !== (_ = et(e._window)) && _.anchorNode === h && (g = _.anchorOffset, f = _.focusOffset), null !== (h = h.nodeValue) && Pe(p, h, g, f, !1))
                                } else if ("childList" === f) {
                                for (u = !0, f = g.addedNodes, _ = 0; _ < f.length; _++) {
                                    var y = be(m = f[_]),
                                        N = m.parentNode;
                                    null == N || m === a || null !== y || "BR" === m.nodeName && se(m, N, e) || (W && (y = m.innerText || m.nodeValue) && (c += y), N.removeChild(m))
                                }
                                if (0 < (f = (g = g.removedNodes).length)) {
                                    for (_ = 0, m = 0; m < f; m++)("BR" === (N = g[m]).nodeName && se(N, h, e) || a === N) && (h.appendChild(N), _++);
                                    f !== _ && (h === s && (p = l._nodeMap.get("root")), o.set(h, p))
                                }
                            }
                        }
                        if (0 < o.size)
                            for (let [t, n] of o)
                                if (wr(n))
                                    for (o = n.getChildrenKeys(), s = t.firstChild, l = 0; l < o.length; l++) null !== (a = e.getElementByKey(o[l])) && (null == s ? (t.appendChild(a), s = a) : s !== a && t.replaceChild(a, s), s = s.nextSibling);
                                else wn(n) && n.markDirty();
                        if (0 < (o = n.takeRecords()).length) {
                            for (s = 0; s < o.length; s++)
                                for (l = (a = o[s]).addedNodes, a = a.target, d = 0; d < l.length; d++) null == (h = (p = l[d]).parentNode) || "BR" !== p.nodeName || se(p, a, e) || h.removeChild(p);
                            n.takeRecords()
                        }
                        null !== i && (u && (i.dirty = !0, ke(i)), W && We(e) && i.insertRawText(c))
                    }))
                } finally {
                    re = !1
                }
            }

            function ae(e) {
                let t = e._observer;
                if (null !== t) {
                    le(e, t.takeRecords(), t)
                }
            }

            function ue(e) {
                0 === ie && He(e).addEventListener("textInput", oe, !0), e._observer = new MutationObserver(((t, n) => {
                    le(e, t, n)
                }))
            }
            let ce = 1,
                de = "function" == typeof queueMicrotask ? queueMicrotask : e => {
                    Promise.resolve().then(e)
                };

            function ge(e) {
                let t = document.activeElement;
                if (null === t) return !1;
                let n = t.nodeName;
                return Ar(Se(e)) && ("INPUT" === n || "TEXTAREA" === n || "true" === t.contentEditable && null == t.__lexicalEditor)
            }

            function fe(e, t, n) {
                let r = e.getRootElement();
                try {
                    return null !== r && r.contains(t) && r.contains(n) && null !== t && !ge(t) && he(t) === e
                } catch (e) {
                    return !1
                }
            }

            function he(e) {
                for (; null != e;) {
                    let t = e.__lexicalEditor;
                    if (null != t) return t;
                    e = Ye(e)
                }
                return null
            }

            function pe(e) {
                return e.isToken() || e.isSegmented()
            }

            function _e(e) {
                for (; null != e;) {
                    if (3 === e.nodeType) return e;
                    e = e.firstChild
                }
                return null
            }

            function me(e, t, n) {
                return e & (t = q[t]) && (null === n || 0 == (n & t)) ? e ^ t : null === n || n & t ? e | t : e
            }

            function ye(e) {
                return wn(e) || fn(e) || Ar(e)
            }

            function Ne(e, t) {
                if (null != t) e.__key = t;
                else {
                    hr(), 99 < dr && L(14), t = _r();
                    var n = pr(),
                        r = "" + ce++;
                    n._nodeMap.set(r, e), wr(e) ? t._dirtyElements.set(r, !0) : t._dirtyLeaves.add(r), t._cloneNotNeeded.add(r), t._dirtyType = 1, e.__key = r
                }
            }

            function ve(e) {
                var t = e.getParent();
                if (null !== t) {
                    let i = e.getWritable();
                    t = t.getWritable();
                    var n = e.getPreviousSibling();
                    if (e = e.getNextSibling(), null === n)
                        if (null !== e) {
                            var r = e.getWritable();
                            t.__first = e.__key, r.__prev = null
                        } else t.__first = null;
                    else {
                        if (r = n.getWritable(), null !== e) {
                            let t = e.getWritable();
                            t.__prev = r.__key, r.__next = t.__key
                        } else r.__next = null;
                        i.__prev = null
                    }
                    null === e ? null !== n ? (e = n.getWritable(), t.__last = n.__key, e.__next = null) : t.__last = null : (e = e.getWritable(), null !== n ? ((n = n.getWritable()).__next = e.__key, e.__prev = n.__key) : e.__prev = null, i.__next = null), t.__size--, i.__parent = null
                }
            }

            function Te(e) {
                99 < dr && L(14);
                var t = e.getLatest(),
                    n = t.__parent,
                    r = pr();
                let i = _r(),
                    o = r._nodeMap;
                if (r = i._dirtyElements, null !== n) e: for (; null !== n && !r.has(n);) {
                    let e = o.get(n);
                    if (void 0 === e) break;
                    r.set(n, !1), n = e.__parent
                }
                t = t.__key, i._dirtyType = 1, wr(e) ? r.set(t, !0) : i._dirtyLeaves.add(t)
            }

            function Ee(e) {
                hr();
                var t = _r();
                let n = t._compositionKey;
                e !== n && (t._compositionKey = e, null !== n && (null !== (t = xe(n)) && t.getWritable()), null !== e && (null !== (e = xe(e)) && e.getWritable()))
            }

            function Ce() {
                return fr() ? null : _r()._compositionKey
            }

            function xe(e, t) {
                return void 0 === (e = (t || pr())._nodeMap.get(e)) ? null : e
            }

            function be(e, t) {
                return void 0 !== (e = e[`__lexicalKey_${_r()._key}`]) ? xe(e, t) : null
            }

            function Se(e, t) {
                for (; null != e;) {
                    let n = be(e, t);
                    if (null !== n) return n;
                    e = Ye(e)
                }
                return null
            }

            function Ae(e) {
                let t = Object.assign({}, e._decorators);
                return e._pendingDecorators = t
            }

            function Oe(e) {
                return e.read((() => we().getTextContent()))
            }

            function we() {
                return pr()._nodeMap.get("root")
            }

            function ke(e) {
                hr();
                let t = pr();
                null !== e && (e.dirty = !0, e._cachedNodes = null), t._selection = e
            }

            function Re(e) {
                var t, n = _r();
                e: {
                    for (t = e; null != t;) {
                        let e = t[`__lexicalKey_${n._key}`];
                        if (void 0 !== e) {
                            t = e;
                            break e
                        }
                        t = Ye(t)
                    }
                    t = null
                }
                return null === t ? e === (n = n.getRootElement()) ? xe("root") : null : xe(t)
            }

            function De(e) {
                return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e)
            }

            function Me(e) {
                let t = [];
                for (; null !== e;) t.push(e), e = e._parentEditor;
                return t
            }

            function $e() {
                return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
            }

            function Ie(e, t, n) {
                if (null !== (t = et(t._window))) {
                    var r = t.anchorNode,
                        {
                            anchorOffset: i,
                            focusOffset: o
                        } = t;
                    if (null !== r && (t = 3 === r.nodeType ? r.nodeValue : null, r = Se(r), null !== t && wn(r))) {
                        if (t === G && n) {
                            t = n, o = i = n.length
                        }
                        null !== t && Pe(r, t, i, o, e)
                    }
                }
            }

            function Pe(e, t, n, r, i) {
                let o = e;
                if (o.isAttached() && (i || !o.isDirty())) {
                    let u = o.isComposing(),
                        c = t;
                    if ((u || i) && t[t.length - 1] === G && (c = t.slice(0, -1)), t = o.getTextContent(), i || c !== t)
                        if ("" === c)
                            if (Ee(null), U || Y || H) o.remove();
                            else {
                                let e = _r();
                                setTimeout((() => {
                                    e.update((() => {
                                        o.isAttached() && o.remove()
                                    }))
                                }), 20)
                            }
                    else {
                        i = o.getParent(), t = tr();
                        var s = o.getTextContentSize(),
                            l = Ce(),
                            a = o.getKey();
                        o.isToken() || null !== l && a === l && !u || Fn(t) && (null !== i && !i.canInsertTextBefore() && 0 === t.anchor.offset || t.anchor.key === e.__key && 0 === t.anchor.offset && !o.canInsertTextBefore() || t.focus.key === e.__key && t.focus.offset === s && !o.canInsertTextAfter()) ? o.markDirty() : (Fn(e = er()) && null !== n && null !== r && (e.setTextNodeRange(o, n, o, r), o.isSegmented() && (n = On(n = o.getTextContent()), o.replace(n), o = n)), o.setTextContent(c))
                    }
                }
            }

            function Le(e, t) {
                var n = e[t];
                return "string" == typeof n ? (n = n.split(" "), e[t] = n) : n
            }

            function Fe(e, t, n, r, i) {
                0 !== n.size && (n = r.__key, void 0 === (t = t.get(r.__type)) && L(33), r = t.klass, void 0 === (t = e.get(r)) && (t = new Map, e.set(r, t)), r = "destroyed" === (e = t.get(n)) && "created" === i, (void 0 === e || r) && t.set(n, r ? "updated" : i))
            }

            function Be(e, t, n) {
                let r = e.getParent(),
                    i = n;
                return null !== r && (t && 0 === n ? (i = e.getIndexWithinParent(), e = r) : t || n !== e.getChildrenSize() || (i = e.getIndexWithinParent() + 1, e = r)), e.getChildAtIndex(t ? i - 1 : i)
            }

            function ze(e, t) {
                var n = e.offset;
                return "element" === e.type ? Be(e = e.getNode(), t, n) : (e = e.getNode(), t && 0 === n || !t && n === e.getTextContentSize() ? null === (n = t ? e.getPreviousSibling() : e.getNextSibling()) ? Be(e.getParentOrThrow(), t, e.getIndexWithinParent() + (t ? 0 : 1)) : n : null)
            }

            function We(e) {
                return "insertFromPaste" === (e = (e = He(e).event) && e.inputType) || "insertFromPasteAsQuotation" === e
            }

            function Ke(e) {
                return !Dr(e) && !e.isLastChild() && !e.isInline()
            }

            function Ue(e, t) {
                return void 0 === (e = e._keyToDOMMap.get(t)) && L(75), e
            }

            function Ye(e) {
                return null !== (e = e.assignedSlot || e.parentElement) && 11 === e.nodeType ? e.host : e
            }

            function je(e, t) {
                for (e = e.getParent(); null !== e;) {
                    if (e.is(t)) return !0;
                    e = e.getParent()
                }
                return !1
            }

            function He(e) {
                return null === (e = e._window) && L(78), e
            }

            function Ge(e) {
                for (e = e.getParentOrThrow(); null !== e && !Ve(e);) e = e.getParentOrThrow();
                return e
            }

            function Ve(e) {
                return Dr(e) || wr(e) && e.isShadowRoot()
            }

            function Je(e) {
                return Ne(e = e.constructor.clone(e), null), e
            }

            function Ze(e) {
                var t = _r();
                let n = e.constructor.getType();
                return void 0 === (t = t._nodes.get(n)) && L(97), null !== (t = t.replace) ? ((t = t(e)) instanceof e.constructor || L(98), t) : e
            }

            function qe(e, t) {
                !Dr(e = e.getParent()) || wr(t) || Ar(t) || L(99)
            }

            function Xe(e) {
                return (Ar(e) || wr(e) && !e.canBeEmpty()) && !e.isInline()
            }

            function Qe(e, t, n) {
                n.style.removeProperty("caret-color"), t._blockCursorElement = null, null !== (t = e.parentElement) && t.removeChild(e)
            }

            function et(e) {
                return F ? (e || window).getSelection() : null
            }

            function tt(e, t) {
                let n = e.getChildAtIndex(t);
                null == n && (n = e), Ve(e) && L(102);
                let r = e => {
                        const t = e.getParentOrThrow(),
                            i = Ve(t),
                            o = e !== n || i ? Je(e) : e;
                        if (i) return e.insertAfter(o), [e, o, o];
                        const [s, l, a] = r(t);
                        return e = e.getNextSiblings(), a.append(o, ...e), [s, l, o]
                    },
                    [i, o] = r(n);
                return [i, o]
            }

            function nt(e, t) {
                for (; e !== we() && null != e;) {
                    if (t(e)) return e;
                    e = e.getParent()
                }
                return null
            }

            function rt(e) {
                let t = [],
                    n = [e];
                for (; 0 < n.length;) {
                    let r = n.pop();
                    void 0 === r && L(112), wr(r) && n.unshift(...r.getChildren()), r !== e && t.push(r)
                }
                return t
            }

            function it(e, t, n, r, i, o) {
                for (e = e.getFirstChild(); null !== e;) {
                    let s = e.__key;
                    e.__parent === t && (wr(e) && it(e, s, n, r, i, o), n.has(s) || o.delete(s), i.push(s)), e = e.getNextSibling()
                }
            }

            function ot(e, t) {
                let n = e.__mode,
                    r = e.__format;
                e = e.__style;
                let i = t.__mode,
                    o = t.__format;
                return t = t.__style, !(null !== n && n !== i || null !== r && r !== o || null !== e && e !== t)
            }

            function st(e, t) {
                let n = e.mergeWithSibling(t),
                    r = _r()._normalizedNodes;
                return r.add(e.__key), r.add(t.__key), n
            }

            function lt(e) {
                if ("" === e.__text && e.isSimpleText() && !e.isUnmergeable()) e.remove();
                else {
                    for (var t; null !== (t = e.getPreviousSibling()) && wn(t) && t.isSimpleText() && !t.isUnmergeable();) {
                        if ("" !== t.__text) {
                            ot(t, e) && (e = st(t, e));
                            break
                        }
                        t.remove()
                    }
                    for (var n; null !== (n = e.getNextSibling()) && wn(n) && n.isSimpleText() && !n.isUnmergeable();) {
                        if ("" !== n.__text) {
                            ot(e, n) && st(e, n);
                            break
                        }
                        n.remove()
                    }
                }
            }

            function at(e) {
                return ut(e.anchor), ut(e.focus), e
            }

            function ut(e) {
                for (;
                    "element" === e.type;) {
                    var t = e.getNode(),
                        n = e.offset;
                    if (n === t.getChildrenSize() ? (t = t.getChildAtIndex(n - 1), n = !0) : (t = t.getChildAtIndex(n), n = !1), wn(t)) {
                        e.set(t.__key, n ? t.getTextContentSize() : 0, "text");
                        break
                    }
                    if (!wr(t)) break;
                    e.set(t.__key, n ? t.getChildrenSize() : 0, "element")
                }
            }
            let ct, dt, gt, ft, ht, pt, _t, mt, yt, Nt, vt = "",
                Tt = "",
                Et = "",
                Ct = !1,
                xt = !1,
                bt = null;

            function St(e, t) {
                let n = _t.get(e);
                if (null !== t) {
                    let n = zt(e);
                    n.parentNode === t && t.removeChild(n)
                }
                mt.has(e) || dt._keyToDOMMap.delete(e), wr(n) && At(e = Pt(n, _t), 0, e.length - 1, null), void 0 !== n && Fe(Nt, gt, ft, n, "destroyed")
            }

            function At(e, t, n, r) {
                for (; t <= n; ++t) {
                    let n = e[t];
                    void 0 !== n && St(n, r)
                }
            }

            function Ot(e, t) {
                e.setProperty("text-align", t)
            }

            function wt(e, t) {
                var n = ct.theme.indent;
                if ("string" == typeof n) {
                    let r = e.classList.contains(n);
                    0 < t && !r ? e.classList.add(n) : 1 > t && r && e.classList.remove(n)
                }
                n = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || "40px", e.style.setProperty("padding-inline-start", 0 === t ? "" : `calc(${t} * ${n})`)
            }

            function kt(e, t) {
                e = e.style, 0 === t ? Ot(e, "") : 1 === t ? Ot(e, "left") : 2 === t ? Ot(e, "center") : 3 === t ? Ot(e, "right") : 4 === t ? Ot(e, "justify") : 5 === t ? Ot(e, "start") : 6 === t && Ot(e, "end")
            }

            function Rt(e, t, n) {
                let r = mt.get(e);
                void 0 === r && L(60);
                let i = r.createDOM(ct, dt);
                var o = dt._keyToDOMMap;
                if (i["__lexicalKey_" + dt._key] = e, o.set(e, i), wn(r) ? i.setAttribute("data-lexical-text", "true") : Ar(r) && i.setAttribute("data-lexical-decorator", "true"), wr(r)) {
                    if (e = r.__indent, o = r.__size, 0 !== e && wt(i, e), 0 !== o) {
                        --o, e = Pt(r, mt);
                        var s = Tt;
                        Tt = "", Dt(e, r, 0, o, i, null), It(r, i), Tt = s
                    }
                    0 !== (e = r.__format) && kt(i, e), r.isInline() || $t(null, r, i), Ke(r) && (vt += "\n\n", Et += "\n\n")
                } else o = r.getTextContent(), Ar(r) ? (null !== (s = r.decorate(dt, ct)) && Ft(e, s), i.contentEditable = "false") : wn(r) && (r.isDirectionless() || (Tt += o)), vt += o, Et += o;
                return null !== t && (null != n ? t.insertBefore(i, n) : null != (n = t.__lexicalLineBreak) ? t.insertBefore(i, n) : t.appendChild(i)), Fe(Nt, gt, ft, r, "created"), i
            }

            function Dt(e, t, n, r, i, o) {
                let s = vt;
                for (vt = ""; n <= r; ++n) Rt(e[n], i, o);
                Ke(t) && (vt += "\n\n"), i.__lexicalTextContent = vt, vt = s + vt
            }

            function Mt(e, t) {
                return fn(e = t.get(e)) || Ar(e) && e.isInline()
            }

            function $t(e, t, n) {
                e = null !== e && (0 === e.__size || Mt(e.__last, _t)), t = 0 === t.__size || Mt(t.__last, mt), e ? t || (null != (t = n.__lexicalLineBreak) && n.removeChild(t), n.__lexicalLineBreak = null) : t && (t = document.createElement("br"), n.__lexicalLineBreak = t, n.appendChild(t))
            }

            function It(e, t) {
                var n = t.__lexicalDir;
                if (t.__lexicalDirTextContent !== Tt || n !== bt) {
                    let o = "" === Tt;
                    if (o) var r = bt;
                    else r = Tt, r = J.test(r) ? "rtl" : Z.test(r) ? "ltr" : null;
                    if (r !== n) {
                        let s = t.classList,
                            l = ct.theme;
                        var i = null !== n ? l[n] : void 0;
                        let a = null !== r ? l[r] : void 0;
                        void 0 !== i && ("string" == typeof i && (i = i.split(" "), i = l[n] = i), s.remove(...i)), null === r || o && "ltr" === r ? t.removeAttribute("dir") : (void 0 !== a && ("string" == typeof a && (n = a.split(" "), a = l[r] = n), void 0 !== a && s.add(...a)), t.dir = r), xt || (e.getWritable().__dir = r)
                    }
                    bt = r, t.__lexicalDirTextContent = Tt, t.__lexicalDir = r
                }
            }

            function Pt(e, t) {
                let n = [];
                for (e = e.__first; null !== e;) {
                    let r = t.get(e);
                    void 0 === r && L(101), n.push(e), e = r.__next
                }
                return n
            }

            function Lt(e, t) {
                var n = _t.get(e),
                    r = mt.get(e);
                void 0 !== n && void 0 !== r || L(61);
                var i = Ct || pt.has(e) || ht.has(e);
                let o = Ue(dt, e);
                if (n === r && !i) return wr(n) ? (void 0 !== (r = o.__lexicalTextContent) && (vt += r, Et += r), void 0 !== (r = o.__lexicalDirTextContent) && (Tt += r)) : (r = n.getTextContent(), wn(n) && !n.isDirectionless() && (Tt += r), Et += r, vt += r), o;
                if (n !== r && i && Fe(Nt, gt, ft, r, "updated"), r.updateDOM(n, o, ct)) return r = Rt(e, null, null), null === t && L(62), t.replaceChild(r, o), St(e, null), r;
                if (wr(n) && wr(r)) {
                    if ((e = r.__indent) !== n.__indent && wt(o, e), (e = r.__format) !== n.__format && kt(o, e), i) {
                        e = r, i = Tt, Tt = "", t = vt;
                        var s = n.__size,
                            l = e.__size;
                        if (vt = "", 1 === s && 1 === l) {
                            var a = n.__first,
                                u = e.__first;
                            if (a === u) Lt(a, o);
                            else {
                                var c = zt(a);
                                u = Rt(u, null, null), o.replaceChild(u, c), St(a, null)
                            }
                        } else {
                            u = Pt(n, _t);
                            var d = Pt(e, mt);
                            if (0 === s) 0 !== l && Dt(d, e, 0, l - 1, o, null);
                            else if (0 === l) 0 !== s && (At(u, 0, s - 1, (a = null == o.__lexicalLineBreak) ? null : o), a && (o.textContent = ""));
                            else {
                                var g = u;
                                u = d, d = s - 1, s = l - 1;
                                let t = o.firstChild,
                                    n = 0;
                                for (l = 0; n <= d && l <= s;) {
                                    var f = g[n];
                                    let e = u[l];
                                    if (f === e) t = Bt(Lt(e, o)), n++, l++;
                                    else {
                                        void 0 === a && (a = new Set(g)), void 0 === c && (c = new Set(u));
                                        let r = c.has(f),
                                            i = a.has(e);
                                        r ? (i ? ((f = Ue(dt, e)) === t ? t = Bt(Lt(e, o)) : (null != t ? o.insertBefore(f, t) : o.appendChild(f), Lt(e, o)), n++) : Rt(e, o, t), l++) : (t = Bt(zt(f)), St(f, o), n++)
                                    }
                                }
                                c = l > s, (a = n > d) && !c ? Dt(u, e, l, s, o, a = void 0 === (a = u[s + 1]) ? null : dt.getElementByKey(a)) : c && !a && At(g, n, d, o)
                            }
                        }
                        Ke(e) && (vt += "\n\n"), o.__lexicalTextContent = vt, vt = t + vt, It(e, o), Tt = i, Dr(r) || r.isInline() || $t(n, r, o)
                    }
                    Ke(r) && (vt += "\n\n", Et += "\n\n")
                } else n = r.getTextContent(), Ar(r) ? null !== (i = r.decorate(dt, ct)) && Ft(e, i) : wn(r) && !r.isDirectionless() && (Tt += n), vt += n, Et += n;
                return !xt && Dr(r) && r.__cachedText !== Et && ((r = r.getWritable()).__cachedText = Et), o
            }

            function Ft(e, t) {
                let n = dt._pendingDecorators,
                    r = dt._decorators;
                if (null === n) {
                    if (r[e] === t) return;
                    n = Ae(dt)
                }
                n[e] = t
            }

            function Bt(e) {
                return null !== (e = e.nextSibling) && e === dt._blockCursorElement && (e = e.nextSibling), e
            }

            function zt(e) {
                return void 0 === (e = yt.get(e)) && L(75), e
            }
            let Wt = Object.freeze({}),
                Kt = [
                    ["keydown", function(e, t) {
                        if (Ut = e.timeStamp, Yt = e.keyCode, !t.isComposing()) {
                            var {
                                keyCode: n,
                                shiftKey: r,
                                ctrlKey: s,
                                metaKey: l,
                                altKey: a
                            } = e;
                            if (!Er(t, p, e)) {
                                if (39 !== n || s || l || a)
                                    if (39 !== n || a || r || !s && !l)
                                        if (37 !== n || s || l || a)
                                            if (37 !== n || a || r || !s && !l)
                                                if (38 !== n || s || l)
                                                    if (40 !== n || s || l)
                                                        if (13 === n && r) Zt = !0, Er(t, E, e);
                                                        else if (32 === n) Er(t, C, e);
                                else if (z && s && 79 === n) e.preventDefault(), Zt = !0, Er(t, o, !0);
                                else if (13 !== n || r)
                                    if (z ? a || l || !(8 === n || 72 === n && s) : s || a || l || 8 !== n)
                                        if (27 === n) Er(t, b, e);
                                        else if (z ? r || a || l || !(46 === n || 68 === n && s) : s || a || l || 46 !== n)
                                    if (8 === n && (z ? a : s)) e.preventDefault(), Er(t, c, !0);
                                    else if (46 === n && (z ? a : s)) e.preventDefault(), Er(t, c, !1);
                                else if (z && l && 8 === n) e.preventDefault(), Er(t, d, !0);
                                else if (z && l && 46 === n) e.preventDefault(), Er(t, d, !1);
                                else if (66 === n && !a && (z ? l : s)) e.preventDefault(), Er(t, g, "bold");
                                else if (85 === n && !a && (z ? l : s)) e.preventDefault(), Er(t, g, "underline");
                                else if (73 === n && !a && (z ? l : s)) e.preventDefault(), Er(t, g, "italic");
                                else if (9 !== n || a || s || l)
                                    if (90 === n && !r && (z ? l : s)) e.preventDefault(), Er(t, f, void 0);
                                    else {
                                        var u = z ? 90 === n && l && r : 89 === n && s || 90 === n && s && r;
                                        u ? (e.preventDefault(), Er(t, h, void 0)) : Kn(t._editorState._selection) && ((u = !r && (67 === n && (z ? l : s))) ? (e.preventDefault(), Er(t, D, e)) : (u = !r && (88 === n && (z ? l : s))) ? (e.preventDefault(), Er(t, M, e)) : 65 === n && (z ? l : s) && (e.preventDefault(), t.update((() => {
                                            let e = we();
                                            e.select(0, e.getChildrenSize())
                                        }))))
                                    }
                                else Er(t, A, e);
                                else 46 === n ? Er(t, S, e) : (e.preventDefault(), Er(t, i, !1));
                                else 8 === n ? Er(t, x, e) : (e.preventDefault(), Er(t, i, !0));
                                else Zt = !1, Er(t, E, e);
                                else Er(t, T, e);
                                else Er(t, v, e);
                                else Er(t, N, e);
                                else Er(t, y, e);
                                else Er(t, m, e);
                                else Er(t, _, e);
                                (s || r || a || l) && Er(t, P, e)
                            }
                        }
                    }],
                    ["pointerdown", function(e, t) {
                        let n = e.target;
                        e = e.pointerType, n instanceof Node && "touch" !== e && br(t, (() => {
                            Ar(Se(n)) || (Jt = !0)
                        }))
                    }],
                    ["compositionstart", function(e, t) {
                        br(t, (() => {
                            let n = er();
                            if (Fn(n) && !t.isComposing()) {
                                let r = n.anchor,
                                    i = n.anchor.getNode();
                                Ee(r.key), (e.timeStamp < Ut + 30 || "element" === r.type || !n.isCollapsed() || i.getFormat() !== n.format || i.getStyle() !== n.style) && Er(t, l, V)
                            }
                        }))
                    }],
                    ["compositionend", function(e, t) {
                        W ? qt = !0 : br(t, (() => {
                            rn(t, e.data)
                        }))
                    }],
                    ["input", function(e, t) {
                        e.stopPropagation(), br(t, (() => {
                            var n = er(),
                                r = e.data,
                                i = nn(e);
                            if (null != r && Fn(n) && Qt(n, i, r, e.timeStamp, !1)) {
                                qt && (rn(t, r), qt = !1);
                                var o = n.anchor,
                                    s = o.getNode();
                                if (null === (i = et(t._window))) return;
                                let a = o.offset;
                                (o = K && !n.isCollapsed() && wn(s) && null !== i.anchorNode) && (o = (s = s.getTextContent().slice(0, a) + r + s.getTextContent().slice(a + n.focus.offset)) === (3 === (i = i.anchorNode).nodeType ? i.nodeValue : null)), o || Er(t, l, r), r = r.length, W && 1 < r && "insertCompositionText" === e.inputType && !t.isComposing() && (n.anchor.offset -= r), U || Y || H || !t.isComposing() || (Ut = 0, Ee(null))
                            } else Ie(!1, t, null !== r ? r : void 0), qt && (rn(t, r || void 0), qt = !1);
                            hr(), ae(n = _r())
                        })), Ht = null
                    }],
                    ["click", function(e, t) {
                        br(t, (() => {
                            let n = er();
                            var i = et(t._window);
                            let o = tr();
                            if (i)
                                if (Fn(n)) {
                                    let t = n.anchor;
                                    var s = t.getNode();
                                    "element" === t.type && 0 === t.offset && n.isCollapsed() && !Dr(s) && 1 === we().getChildrenSize() && s.getTopLevelElementOrThrow().isEmpty() && null !== o && n.is(o) ? (i.removeAllRanges(), n.dirty = !0) : 3 !== e.detail || n.isCollapsed() || s !== (i = n.focus.getNode()) && (wr(s) ? s.select(0) : s.getParentOrThrow().select(0))
                                } else "touch" === e.pointerType && (null !== (s = i.anchorNode) && (1 === (s = s.nodeType) || 3 === s)) && ke(i = Qn(o, i, t));
                            Er(t, r, e)
                        }))
                    }],
                    ["cut", Wt],
                    ["copy", Wt],
                    ["dragstart", Wt],
                    ["dragover", Wt],
                    ["dragend", Wt],
                    ["paste", Wt],
                    ["focus", Wt],
                    ["blur", Wt],
                    ["drop", Wt]
                ];
            K && Kt.push(["beforeinput", (e, t) => function(e, t) {
                let n = e.inputType,
                    r = nn(e);
                "deleteCompositionText" === n || W && We(t) || "insertCompositionText" !== n && br(t, (() => {
                    let p = er();
                    if ("deleteContentBackward" === n) {
                        if (null === p) {
                            var _ = tr();
                            if (!Fn(_)) return;
                            ke(_.clone())
                        }
                        if (Fn(p)) return void(229 === Yt && e.timeStamp < Ut + 30 && t.isComposing() && p.anchor.key === p.focus.key ? (Ee(null), Ut = 0, setTimeout((() => {
                            br(t, (() => {
                                Ee(null)
                            }))
                        }), 30), Fn(p) && (_ = p.anchor.getNode(), _.markDirty(), p.format = _.getFormat(), p.style = _.getStyle())) : (e.preventDefault(), Er(t, i, !0)))
                    }
                    if (Fn(p)) {
                        _ = e.data, null !== Ht && Ie(!1, t, Ht), p.dirty && null === Ht || !p.isCollapsed() || Dr(p.anchor.getNode()) || null === r || p.applyDOMRange(r), Ht = null;
                        var m = p.focus,
                            y = p.anchor.getNode();
                        if (m = m.getNode(), "insertText" === n || "insertTranspose" === n) "\n" === _ ? (e.preventDefault(), Er(t, o, !1)) : "\n\n" === _ ? (e.preventDefault(), Er(t, s, void 0)) : null == _ && e.dataTransfer ? (_ = e.dataTransfer.getData("text/plain"), e.preventDefault(), p.insertRawText(_)) : null != _ && Qt(p, r, _, e.timeStamp, !0) ? (e.preventDefault(), Er(t, l, _)) : Ht = _, jt = e.timeStamp;
                        else switch (e.preventDefault(), n) {
                            case "insertFromYank":
                            case "insertFromDrop":
                            case "insertReplacementText":
                                Er(t, l, e);
                                break;
                            case "insertFromComposition":
                                Ee(null), Er(t, l, e);
                                break;
                            case "insertLineBreak":
                                Ee(null), Er(t, o, !1);
                                break;
                            case "insertParagraph":
                                Ee(null), Zt ? (Zt = !1, Er(t, o, !1)) : Er(t, s, void 0);
                                break;
                            case "insertFromPaste":
                            case "insertFromPasteAsQuotation":
                                Er(t, a, e);
                                break;
                            case "deleteByComposition":
                                (function(e, t) {
                                    return e !== t || wr(e) || wr(t) || !e.isToken() || !t.isToken()
                                })(y, m) && Er(t, u, void 0);
                                break;
                            case "deleteByDrag":
                            case "deleteByCut":
                                Er(t, u, void 0);
                                break;
                            case "deleteContent":
                                Er(t, i, !1);
                                break;
                            case "deleteWordBackward":
                                Er(t, c, !0);
                                break;
                            case "deleteWordForward":
                                Er(t, c, !1);
                                break;
                            case "deleteHardLineBackward":
                            case "deleteSoftLineBackward":
                                Er(t, d, !0);
                                break;
                            case "deleteContentForward":
                            case "deleteHardLineForward":
                            case "deleteSoftLineForward":
                                Er(t, d, !1);
                                break;
                            case "formatStrikeThrough":
                                Er(t, g, "strikethrough");
                                break;
                            case "formatBold":
                                Er(t, g, "bold");
                                break;
                            case "formatItalic":
                                Er(t, g, "italic");
                                break;
                            case "formatUnderline":
                                Er(t, g, "underline");
                                break;
                            case "historyUndo":
                                Er(t, f, void 0);
                                break;
                            case "historyRedo":
                                Er(t, h, void 0)
                        }
                    }
                }))
            }(e, t)]);
            let Ut = 0,
                Yt = 0,
                jt = 0,
                Ht = null,
                Gt = 0,
                Vt = !1,
                Jt = !1,
                Zt = !1,
                qt = !1,
                Xt = [0, "", 0, "root", 0];

            function Qt(e, t, n, r, i) {
                let o = e.anchor,
                    s = e.focus,
                    l = o.getNode();
                var a = _r();
                let u = et(a._window),
                    c = null !== u ? u.anchorNode : null,
                    d = o.key;
                a = a.getElementByKey(d);
                let g = n.length;
                return d !== s.key || !wn(l) || (!i && (!K || jt < r + 50) || l.isDirty() && 2 > g || De(n)) && o.offset !== s.offset && !l.isComposing() || pe(l) || l.isDirty() && 1 < g || (i || !K) && null !== a && !l.isComposing() && c !== _e(a) || null !== u && null !== t && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || l.getFormat() !== e.format || l.getStyle() !== e.style || function(e, t) {
                    if (t.isSegmented()) return !0;
                    if (!e.isCollapsed()) return !1;
                    e = e.anchor.offset;
                    let n = t.getParentOrThrow(),
                        r = t.isToken();
                    return 0 === e ? ((e = !t.canInsertTextBefore() || !n.canInsertTextBefore() || r) || (e = (wn(t = t.getPreviousSibling()) || wr(t) && t.isInline()) && !t.canInsertTextAfter()), e) : e === t.getTextContentSize() && (!t.canInsertTextAfter() || !n.canInsertTextAfter() || r)
                }(e, l)
            }

            function en(e, t) {
                return null !== e && null !== e.nodeValue && 3 === e.nodeType && 0 !== t && t !== e.nodeValue.length
            }

            function tn(e, t, r) {
                let {
                    anchorNode: i,
                    anchorOffset: o,
                    focusNode: s,
                    focusOffset: l
                } = e;
                Vt && (Vt = !1, en(i, o) && en(s, l)) || br(t, (() => {
                    if (r) {
                        if (fe(t, i, s)) {
                            var o = er();
                            if (Fn(o)) {
                                var l = o.anchor,
                                    a = l.getNode();
                                if (o.isCollapsed()) {
                                    "Range" === e.type && e.anchorNode === e.focusNode && (o.dirty = !0);
                                    var u = He(t).event;
                                    u = u ? u.timeStamp : performance.now();
                                    let [n, r, i, s, c] = Xt;
                                    u < c + 200 && l.offset === i && l.key === s ? (o.format = n, o.style = r) : "text" === l.type ? (o.format = a.getFormat(), o.style = a.getStyle()) : "element" === l.type && (o.format = 0, o.style = "")
                                } else {
                                    l = 255, a = !1;
                                    let e = (u = o.getNodes()).length;
                                    for (let t = 0; t < e; t++) {
                                        let e = u[t];
                                        if (wn(e) && (a = !0, 0 === (l &= e.getFormat()))) break
                                    }
                                    o.format = a ? l : 0
                                }
                            }
                            Er(t, n, void 0)
                        }
                    } else ke(null)
                }))
            }

            function nn(e) {
                return e.getTargetRanges ? 0 === (e = e.getTargetRanges()).length ? null : e[0] : null
            }

            function rn(e, t) {
                var n = e._compositionKey;
                if (Ee(null), null !== n && null != t) {
                    if ("" === t) return t = xe(n), void(null !== (e = _e(e.getElementByKey(n))) && null !== e.nodeValue && wn(t) && Pe(t, e.nodeValue, null, null, !0));
                    if ("\n" === t[t.length - 1] && Fn(n = er())) return t = n.focus, n.anchor.set(t.key, t.offset, t.type), void Er(e, E, null)
                }
                Ie(!0, e, t)
            }

            function on(e) {
                let t = e.__lexicalEventHandles;
                return void 0 === t && (t = [], e.__lexicalEventHandles = t), t
            }
            let sn = new Map;

            function ln(e) {
                let t = et(null == (e = e.target) ? null : 9 === e.nodeType ? e.defaultView : e.ownerDocument.defaultView);
                if (null !== t) {
                    var n = he(t.anchorNode);
                    if (null !== n) {
                        Jt && (Jt = !1, br(n, (() => {
                            var e = tr(),
                                r = t.anchorNode;
                            null !== r && (1 === (r = r.nodeType) || 3 === r) && ke(e = Qn(e, t, n))
                        })));
                        var r = (e = (e = Me(n))[e.length - 1])._key,
                            i = sn.get(r),
                            o = i || e;
                        o !== n && tn(t, o, !1), tn(t, n, !0), n !== e ? sn.set(r, n) : i && sn.delete(r)
                    }
                }
            }

            function an(e, t, n) {
                hr();
                var r = e.__key;
                let i = e.getParent();
                if (null !== i) {
                    var o = function(e, t = 0) {
                            if (0 !== t && L(1), !Fn(t = er()) || !wr(e)) return t;
                            let {
                                anchor: n,
                                focus: r
                            } = t, i = n.getNode(), o = r.getNode();
                            return je(i, e) && n.set(e.__key, 0, "element"), je(o, e) && r.set(e.__key, 0, "element"), t
                        }(e),
                        s = !1;
                    if (Fn(o) && t) {
                        let t = o.anchor,
                            n = o.focus;
                        t.key === r && (ir(t, e, i, e.getPreviousSibling(), e.getNextSibling()), s = !0), n.key === r && (ir(n, e, i, e.getPreviousSibling(), e.getNextSibling()), s = !0)
                    }
                    Fn(o) && t && !s ? (r = e.getIndexWithinParent(), ve(e), nr(o, i, r, -1)) : ve(e), n || Ve(i) || i.canBeEmpty() || !i.isEmpty() || an(i, t), t && Dr(i) && i.isEmpty() && i.selectEnd()
                }
            }
            class un {
                static getType() {
                    L(64)
                }
                static clone() {
                    L(65)
                }
                constructor(e) {
                    this.__type = this.constructor.getType(), this.__next = this.__prev = this.__parent = null, Ne(this, e)
                }
                getType() {
                    return this.__type
                }
                isAttached() {
                    for (var e = this.__key; null !== e;) {
                        if ("root" === e) return !0;
                        if (null === (e = xe(e))) break;
                        e = e.__parent
                    }
                    return !1
                }
                isSelected(e) {
                    if (null == (e = e || er())) return !1;
                    let t = e.getNodes().some((e => e.__key === this.__key));
                    return (wn(this) || !Fn(e) || "element" !== e.anchor.type || "element" !== e.focus.type || e.anchor.key !== e.focus.key || e.anchor.offset !== e.focus.offset) && t
                }
                getKey() {
                    return this.__key
                }
                getIndexWithinParent() {
                    var e = this.getParent();
                    if (null === e) return -1;
                    e = e.getFirstChild();
                    let t = 0;
                    for (; null !== e;) {
                        if (this.is(e)) return t;
                        t++, e = e.getNextSibling()
                    }
                    return -1
                }
                getParent() {
                    let e = this.getLatest().__parent;
                    return null === e ? null : xe(e)
                }
                getParentOrThrow() {
                    let e = this.getParent();
                    return null === e && L(66), e
                }
                getTopLevelElement() {
                    let e = this;
                    for (; null !== e;) {
                        let t = e.getParent();
                        if (Ve(t)) return e;
                        e = t
                    }
                    return null
                }
                getTopLevelElementOrThrow() {
                    let e = this.getTopLevelElement();
                    return null === e && L(67), e
                }
                getParents() {
                    let e = [],
                        t = this.getParent();
                    for (; null !== t;) e.push(t), t = t.getParent();
                    return e
                }
                getParentKeys() {
                    let e = [],
                        t = this.getParent();
                    for (; null !== t;) e.push(t.__key), t = t.getParent();
                    return e
                }
                getPreviousSibling() {
                    let e = this.getLatest().__prev;
                    return null === e ? null : xe(e)
                }
                getPreviousSiblings() {
                    let e = [];
                    var t = this.getParent();
                    if (null === t) return e;
                    for (t = t.getFirstChild(); null !== t && !t.is(this);) e.push(t), t = t.getNextSibling();
                    return e
                }
                getNextSibling() {
                    let e = this.getLatest().__next;
                    return null === e ? null : xe(e)
                }
                getNextSiblings() {
                    let e = [],
                        t = this.getNextSibling();
                    for (; null !== t;) e.push(t), t = t.getNextSibling();
                    return e
                }
                getCommonAncestor(e) {
                    let t = this.getParents();
                    var n = e.getParents();
                    wr(this) && t.unshift(this), wr(e) && n.unshift(e), e = t.length;
                    var r = n.length;
                    if (0 === e || 0 === r || t[e - 1] !== n[r - 1]) return null;
                    for (n = new Set(n), r = 0; r < e; r++) {
                        let e = t[r];
                        if (n.has(e)) return e
                    }
                    return null
                }
                is(e) {
                    return null != e && this.__key === e.__key
                }
                isBefore(e) {
                    if (this === e) return !1;
                    if (e.isParentOf(this)) return !0;
                    if (this.isParentOf(e)) return !1;
                    var t = this.getCommonAncestor(e);
                    let n = this;
                    for (;;) {
                        var r = n.getParentOrThrow();
                        if (r === t) {
                            r = n.getIndexWithinParent();
                            break
                        }
                        n = r
                    }
                    for (n = e;;) {
                        if ((e = n.getParentOrThrow()) === t) {
                            t = n.getIndexWithinParent();
                            break
                        }
                        n = e
                    }
                    return r < t
                }
                isParentOf(e) {
                    let t = this.__key;
                    if (t === e.__key) return !1;
                    for (; null !== e;) {
                        if (e.__key === t) return !0;
                        e = e.getParent()
                    }
                    return !1
                }
                getNodesBetween(e) {
                    let t = this.isBefore(e),
                        n = [],
                        r = new Set;
                    for (var i = this;;) {
                        var o = i.__key;
                        if (r.has(o) || (r.add(o), n.push(i)), i === e) break;
                        if (null !== (o = wr(i) ? t ? i.getFirstChild() : i.getLastChild() : null)) i = o;
                        else if (null !== (o = t ? i.getNextSibling() : i.getPreviousSibling())) i = o;
                        else {
                            if (i = i.getParentOrThrow(), r.has(i.__key) || n.push(i), i === e) break;
                            o = i;
                            do {
                                null === o && L(68), i = t ? o.getNextSibling() : o.getPreviousSibling(), null !== (o = o.getParent()) && (null !== i || r.has(o.__key) || n.push(o))
                            } while (null === i)
                        }
                    }
                    return t || n.reverse(), n
                }
                isDirty() {
                    let e = _r()._dirtyLeaves;
                    return null !== e && e.has(this.__key)
                }
                getLatest() {
                    let e = xe(this.__key);
                    return null === e && L(113), e
                }
                getWritable() {
                    hr();
                    var e = pr(),
                        t = _r();
                    e = e._nodeMap;
                    let n = this.__key,
                        r = this.getLatest(),
                        i = r.__parent;
                    t = t._cloneNotNeeded;
                    var o = er();
                    return null !== o && (o._cachedNodes = null), t.has(n) ? (Te(r), r) : ((o = r.constructor.clone(r)).__parent = i, o.__next = r.__next, o.__prev = r.__prev, wr(r) && wr(o) ? (o.__first = r.__first, o.__last = r.__last, o.__size = r.__size, o.__indent = r.__indent, o.__format = r.__format, o.__dir = r.__dir) : wn(r) && wn(o) && (o.__format = r.__format, o.__style = r.__style, o.__mode = r.__mode, o.__detail = r.__detail), t.add(n), o.__key = n, Te(o), e.set(n, o), o)
                }
                getTextContent() {
                    return ""
                }
                getTextContentSize() {
                    return this.getTextContent().length
                }
                createDOM() {
                    L(70)
                }
                updateDOM() {
                    L(71)
                }
                exportDOM(e) {
                    return {
                        element: this.createDOM(e._config, e)
                    }
                }
                exportJSON() {
                    L(72)
                }
                static importJSON() {
                    L(18)
                }
                static transform() {
                    return null
                }
                remove(e) {
                    an(this, !0, e)
                }
                replace(e, t) {
                    hr();
                    var n = er();
                    null !== n && (n = n.clone()), qe(this, e);
                    let r = this.getLatest(),
                        i = this.__key,
                        o = e.__key,
                        s = e.getWritable(),
                        l = (e = this.getParentOrThrow().getWritable()).__size;
                    ve(s);
                    let a = r.getPreviousSibling(),
                        u = r.getNextSibling(),
                        c = r.__prev,
                        d = r.__next,
                        g = r.__parent;
                    return an(r, !1, !0), null === a ? e.__first = o : a.getWritable().__next = o, s.__prev = c, null === u ? e.__last = o : u.getWritable().__prev = o, s.__next = d, s.__parent = g, e.__size = l, t && this.getChildren().forEach((e => {
                        s.append(e)
                    })), Fn(n) && (ke(n), t = n.anchor, n = n.focus, t.key === i && $n(t, s), n.key === i && $n(n, s)), Ce() === i && Ee(o), s
                }
                insertAfter(e, t = !0) {
                    hr(), qe(this, e);
                    var n = this.getWritable();
                    let r = e.getWritable();
                    var i = r.getParent();
                    let o = er();
                    var s = !1,
                        l = !1;
                    if (null !== i) {
                        var a = e.getIndexWithinParent();
                        ve(r), Fn(o) && (l = i.__key, s = o.anchor, i = o.focus, s = "element" === s.type && s.key === l && s.offset === a + 1, l = "element" === i.type && i.key === l && i.offset === a + 1)
                    }
                    i = this.getNextSibling(), a = this.getParentOrThrow().getWritable();
                    let u = r.__key,
                        c = n.__next;
                    return null === i ? a.__last = u : i.getWritable().__prev = u, a.__size++, n.__next = u, r.__next = c, r.__prev = n.__key, r.__parent = n.__parent, t && Fn(o) && (nr(o, a, (t = this.getIndexWithinParent()) + 1), n = a.__key, s && o.anchor.set(n, t + 2, "element"), l && o.focus.set(n, t + 2, "element")), e
                }
                insertBefore(e, t = !0) {
                    hr(), qe(this, e);
                    var n = this.getWritable();
                    let r = e.getWritable(),
                        i = r.__key;
                    ve(r);
                    let o = this.getPreviousSibling(),
                        s = this.getParentOrThrow().getWritable(),
                        l = n.__prev,
                        a = this.getIndexWithinParent();
                    return null === o ? s.__first = i : o.getWritable().__next = i, s.__size++, n.__prev = i, r.__prev = l, r.__next = n.__key, r.__parent = n.__parent, n = er(), t && Fn(n) && nr(n, t = this.getParentOrThrow(), a), e
                }
                isParentRequired() {
                    return !1
                }
                createParentElementNode() {
                    return Fr()
                }
                selectPrevious(e, t) {
                    hr();
                    let n = this.getPreviousSibling(),
                        r = this.getParentOrThrow();
                    return null === n ? r.select(0, 0) : wr(n) ? n.select() : wn(n) ? n.select(e, t) : (e = n.getIndexWithinParent() + 1, r.select(e, e))
                }
                selectNext(e, t) {
                    hr();
                    let n = this.getNextSibling(),
                        r = this.getParentOrThrow();
                    return null === n ? r.select() : wr(n) ? n.select(0, 0) : wn(n) ? n.select(e, t) : (e = n.getIndexWithinParent(), r.select(e, e))
                }
                markDirty() {
                    this.getWritable()
                }
            }
            class cn extends un {
                static getType() {
                    return "linebreak"
                }
                static clone(e) {
                    return new cn(e.__key)
                }
                constructor(e) {
                    super(e)
                }
                getTextContent() {
                    return "\n"
                }
                createDOM() {
                    return document.createElement("br")
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        br: e => {
                            let t, n, r = e.parentElement;
                            return null !== r && ((t = r.firstChild) === e || t.nextSibling === e && 3 === t.nodeType && null !== (t.textContent || "").match(/^[\s|\r?\n|\t]+$/)) && ((n = r.lastChild) === e || n.previousSibling === e && 3 === n.nodeType && null !== (n.textContent || "").match(/^[\s|\r?\n|\t]+$/)) ? null : {
                                conversion: dn,
                                priority: 0
                            }
                        }
                    }
                }
                static importJSON() {
                    return gn()
                }
                exportJSON() {
                    return {
                        type: "linebreak",
                        version: 1
                    }
                }
            }

            function dn() {
                return {
                    node: gn()
                }
            }

            function gn() {
                return Ze(new cn)
            }

            function fn(e) {
                return e instanceof cn
            }

            function hn(e, t) {
                return 16 & t ? "code" : 128 & t ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null
            }

            function pn(e, t) {
                return 1 & t ? "strong" : 2 & t ? "em" : "span"
            }

            function _n(e, t, n, r, i) {
                e = r.classList, void 0 !== (r = Le(i, "base")) && e.add(...r);
                let o = !1,
                    s = 8 & t && 4 & t;
                var l = 8 & n && 4 & n;
                void 0 !== (r = Le(i, "underlineStrikethrough")) && (l ? (o = !0, s || e.add(...r)) : s && e.remove(...r));
                for (let a in q) l = q[a], void 0 !== (r = Le(i, a)) && (n & l && (!o || "underline" !== a && "strikethrough" !== a) ? (0 == (t & l) || s && "underline" === a || "strikethrough" === a) && e.add(...r) : t & l && e.remove(...r))
            }

            function mn(e, t, n) {
                let r = t.firstChild;
                if (e += (n = n.isComposing()) ? G : "", null == r) t.textContent = e;
                else if ((t = r.nodeValue) !== e)
                    if (n || W) {
                        n = t.length;
                        let i = e.length,
                            o = 0,
                            s = 0;
                        for (; o < n && o < i && t[o] === e[o];) o++;
                        for (; s + o < n && s + o < i && t[n - s - 1] === e[i - s - 1];) s++;
                        e = [o, n - o - s, e.slice(o, i - s)];
                        let [l, a, u] = e;
                        0 !== a && r.deleteData(l, a), r.insertData(l, u)
                    } else r.nodeValue = e
            }

            function yn(e, t) {
                return (t = document.createElement(t)).appendChild(e), t
            }
            class Nn extends un {
                static getType() {
                    return "text"
                }
                static clone(e) {
                    return new Nn(e.__text, e.__key)
                }
                constructor(e, t) {
                    super(t), this.__text = e, this.__format = 0, this.__style = "", this.__detail = this.__mode = 0
                }
                getFormat() {
                    return this.getLatest().__format
                }
                getDetail() {
                    return this.getLatest().__detail
                }
                getMode() {
                    let e = this.getLatest();
                    return ne[e.__mode]
                }
                getStyle() {
                    return this.getLatest().__style
                }
                isToken() {
                    return 1 === this.getLatest().__mode
                }
                isComposing() {
                    return this.__key === Ce()
                }
                isSegmented() {
                    return 2 === this.getLatest().__mode
                }
                isDirectionless() {
                    return 0 != (1 & this.getLatest().__detail)
                }
                isUnmergeable() {
                    return 0 != (2 & this.getLatest().__detail)
                }
                hasFormat(e) {
                    return e = q[e], 0 != (this.getFormat() & e)
                }
                isSimpleText() {
                    return "text" === this.__type && 0 === this.__mode
                }
                getTextContent() {
                    return this.getLatest().__text
                }
                getFormatFlags(e, t) {
                    return me(this.getLatest().__format, e, t)
                }
                createDOM(e) {
                    var t = this.__format,
                        n = hn(0, t);
                    let r = pn(0, t),
                        i = document.createElement(null === n ? r : n),
                        o = i;
                    return null !== n && (o = document.createElement(r), i.appendChild(o)), n = o, mn(this.__text, n, this), void 0 !== (e = e.theme.text) && _n(r, 0, t, n, e), "" !== (t = this.__style) && (i.style.cssText = t), i
                }
                updateDOM(e, t, n) {
                    let r = this.__text;
                    var i = e.__format,
                        o = this.__format,
                        s = hn(0, i);
                    let l = hn(0, o);
                    var a = pn(0, i);
                    let u = pn(0, o);
                    return (null === s ? a : s) !== (null === l ? u : l) || (s === l && a !== u ? (null == (i = t.firstChild) && L(48), mn(r, e = s = document.createElement(u), this), void 0 !== (n = n.theme.text) && _n(u, 0, o, e, n), t.replaceChild(s, i), !1) : (a = t, null !== l && null !== s && (null == (a = t.firstChild) && L(49)), mn(r, a, this), void 0 !== (n = n.theme.text) && i !== o && _n(u, i, o, a, n), o = this.__style, e.__style !== o && (t.style.cssText = o), !1))
                }
                static importDOM() {
                    return {
                        "#text": () => ({
                            conversion: Cn,
                            priority: 0
                        }),
                        b: () => ({
                            conversion: Tn,
                            priority: 0
                        }),
                        code: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        em: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        i: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        s: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        span: () => ({
                            conversion: vn,
                            priority: 0
                        }),
                        strong: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        sub: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        sup: () => ({
                            conversion: An,
                            priority: 0
                        }),
                        u: () => ({
                            conversion: An,
                            priority: 0
                        })
                    }
                }
                static importJSON(e) {
                    let t = On(e.text);
                    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                }
                exportDOM(e) {
                    return ({
                        element: e
                    } = super.exportDOM(e)), null !== e && (this.hasFormat("bold") && (e = yn(e, "b")), this.hasFormat("italic") && (e = yn(e, "i")), this.hasFormat("strikethrough") && (e = yn(e, "s")), this.hasFormat("underline") && (e = yn(e, "u"))), {
                        element: e
                    }
                }
                exportJSON() {
                    return {
                        detail: this.getDetail(),
                        format: this.getFormat(),
                        mode: this.getMode(),
                        style: this.getStyle(),
                        text: this.getTextContent(),
                        type: "text",
                        version: 1
                    }
                }
                selectionTransform() {}
                setFormat(e) {
                    let t = this.getWritable();
                    return t.__format = "string" == typeof e ? q[e] : e, t
                }
                setDetail(e) {
                    let t = this.getWritable();
                    return t.__detail = "string" == typeof e ? X[e] : e, t
                }
                setStyle(e) {
                    let t = this.getWritable();
                    return t.__style = e, t
                }
                toggleFormat(e) {
                    return e = q[e], this.setFormat(this.getFormat() ^ e)
                }
                toggleDirectionless() {
                    let e = this.getWritable();
                    return e.__detail ^= 1, e
                }
                toggleUnmergeable() {
                    let e = this.getWritable();
                    return e.__detail ^= 2, e
                }
                setMode(e) {
                    if (e = te[e], this.__mode === e) return this;
                    let t = this.getWritable();
                    return t.__mode = e, t
                }
                setTextContent(e) {
                    if (this.__text === e) return this;
                    let t = this.getWritable();
                    return t.__text = e, t
                }
                select(e, t) {
                    hr();
                    let n = er();
                    var r = this.getTextContent();
                    let i = this.__key;
                    return "string" == typeof r ? (r = r.length, void 0 === e && (e = r), void 0 === t && (t = r)) : t = e = 0, Fn(n) ? ((r = Ce()) !== n.anchor.key && r !== n.focus.key || Ee(i), n.setTextNodeRange(this, e, this, t), n) : qn(i, e, i, t, "text", "text")
                }
                spliceText(e, t, n, r) {
                    let i = this.getWritable(),
                        o = i.__text,
                        s = n.length,
                        l = e;
                    0 > l && (l = s + l, 0 > l && (l = 0));
                    let a = er();
                    return r && Fn(a) && (e += s, a.setTextNodeRange(i, e, i, e)), t = o.slice(0, l) + n + o.slice(l + t), i.__text = t, i
                }
                canInsertTextBefore() {
                    return !0
                }
                canInsertTextAfter() {
                    return !0
                }
                splitText(...e) {
                    hr();
                    var t = this.getLatest(),
                        n = t.getTextContent(),
                        r = t.__key,
                        i = Ce(),
                        o = new Set(e);
                    e = [];
                    for (var s = n.length, l = "", a = 0; a < s; a++) "" !== l && o.has(a) && (e.push(l), l = ""), l += n[a];
                    if ("" !== l && e.push(l), 0 === (o = e.length)) return [];
                    if (e[0] === n) return [t];
                    var u = e[0];
                    n = t.getParentOrThrow(), a = t.getFormat();
                    let c = t.getStyle(),
                        d = t.__detail;
                    s = !1, t.isSegmented() ? ((l = On(u)).__format = a, l.__style = c, l.__detail = d, s = !0) : (l = t.getWritable()).__text = u, t = er(), l = [l], u = u.length;
                    for (let n = 1; n < o; n++) {
                        var g = e[n],
                            f = g.length;
                        (g = On(g).getWritable()).__format = a, g.__style = c, g.__detail = d;
                        let o = g.__key;
                        if (f = u + f, Fn(t)) {
                            let e = t.anchor,
                                n = t.focus;
                            e.key === r && "text" === e.type && e.offset > u && e.offset <= f && (e.key = o, e.offset -= u, t.dirty = !0), n.key === r && "text" === n.type && n.offset > u && n.offset <= f && (n.key = o, n.offset -= u, t.dirty = !0)
                        }
                        i === r && Ee(o), u = f, l.push(g)
                    }
                    return r = this.getPreviousSibling(), i = this.getNextSibling(), null !== r && Te(r), null !== i && Te(i), r = n.getWritable(), i = this.getIndexWithinParent(), s ? (r.splice(i, 0, l), this.remove()) : r.splice(i, 1, l), Fn(t) && nr(t, n, i, o - 1), l
                }
                mergeWithSibling(e) {
                    var t = e === this.getPreviousSibling();
                    t || e === this.getNextSibling() || L(50);
                    var n = this.__key;
                    let r = e.__key,
                        i = this.__text,
                        o = i.length;
                    Ce() === r && Ee(n);
                    let s = er();
                    if (Fn(s)) {
                        let i = s.anchor,
                            l = s.focus;
                        null !== i && i.key === r && (or(i, t, n, e, o), s.dirty = !0), null !== l && l.key === r && (or(l, t, n, e, o), s.dirty = !0)
                    }
                    return n = e.__text, this.setTextContent(t ? n + i : i + n), t = this.getWritable(), e.remove(), t
                }
                isTextEntity() {
                    return !1
                }
            }

            function vn(e) {
                let t = "700" === e.style.fontWeight,
                    n = "line-through" === e.style.textDecoration,
                    r = "italic" === e.style.fontStyle,
                    i = "underline" === e.style.textDecoration,
                    o = e.style.verticalAlign;
                return {
                    forChild: e => wn(e) ? (t && e.toggleFormat("bold"), n && e.toggleFormat("strikethrough"), r && e.toggleFormat("italic"), i && e.toggleFormat("underline"), "sub" === o && e.toggleFormat("subscript"), "super" === o && e.toggleFormat("superscript"), e) : e,
                    node: null
                }
            }

            function Tn(e) {
                let t = "normal" === e.style.fontWeight;
                return {
                    forChild: e => (wn(e) && !t && e.toggleFormat("bold"), e),
                    node: null
                }
            }
            let En = new WeakMap;

            function Cn(e) {
                if (null === e.parentElement) throw Error("Expected parentElement of Text not to be null");
                for (var t, n = e.textContent || "", r = e.parentNode, i = [e]; null !== r && void 0 === (t = En.get(r)) && !("PRE" === r.nodeName || 1 === r.nodeType && r.style.whiteSpace.startsWith("pre"));) i.push(r), r = r.parentNode;
                for (t = void 0 === t ? r : t, r = 0; r < i.length; r++) En.set(i[r], t);
                if (null !== t) {
                    for (e = [], i = (n = n.split(/(\r?\n|\t)/)).length, t = 0; t < i; t++) "\n" === (r = n[t]) || "\r\n" === r ? e.push(gn()) : "\t" === r ? e.push(Rn()) : "" !== r && e.push(On(r));
                    return {
                        node: e
                    }
                }
                if ("" === (n = n.replace(/\r?\n|\t/gm, " ").replace("\r", "").replace(/\s+/g, " "))) return {
                    node: null
                };
                if (" " === n[0]) {
                    for (i = e, t = !0; null !== i && null !== (i = bn(i, !1));)
                        if (0 < (r = i.textContent || "").length) {
                            r.match(/(?:\s|\r?\n|\t)$/) && (n = n.slice(1)), t = !1;
                            break
                        }
                    t && (n = n.slice(1))
                }
                if (" " === n[n.length - 1]) {
                    for (i = !0; null !== e && null !== (e = bn(e, !0));)
                        if (0 < (e.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length) {
                            i = !1;
                            break
                        }
                    i && (n = n.slice(0, n.length - 1))
                }
                return "" === n ? {
                    node: null
                } : {
                    node: On(n)
                }
            }
            let xn = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");

            function bn(e, t) {
                for (;;) {
                    for (var n = void 0; null === (n = t ? e.nextSibling : e.previousSibling);)
                        if (null === (e = e.parentElement)) return null;
                    if (1 === (e = n).nodeType && ("" === (n = e.style.display) && null === e.nodeName.match(xn) || "" !== n && !n.startsWith("inline"))) return null;
                    for (; null !== (n = t ? e.firstChild : e.lastChild);) e = n;
                    if (3 === e.nodeType) return e;
                    if ("BR" === e.nodeName) return null
                }
            }
            let Sn = {
                code: "code",
                em: "italic",
                i: "italic",
                s: "strikethrough",
                strong: "bold",
                sub: "subscript",
                sup: "superscript",
                u: "underline"
            };

            function An(e) {
                let t = Sn[e.nodeName.toLowerCase()];
                return void 0 === t ? {
                    node: null
                } : {
                    forChild: e => (wn(e) && !e.hasFormat(t) && e.toggleFormat(t), e),
                    node: null
                }
            }

            function On(e = "") {
                return Ze(new Nn(e))
            }

            function wn(e) {
                return e instanceof Nn
            }
            class kn extends Nn {
                static getType() {
                    return "tab"
                }
                static clone(e) {
                    let t = new kn(e.__key);
                    return t.__text = e.__text, t.__format = e.__format, t.__style = e.__style, t
                }
                constructor(e) {
                    super("\t", e), this.__detail = 2
                }
                static importDOM() {
                    return null
                }
                static importJSON(e) {
                    let t = Rn();
                    return t.setFormat(e.format), t.setStyle(e.style), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "tab",
                        version: 1
                    }
                }
                setTextContent() {
                    throw Error("TabNode does not support setTextContent")
                }
                setDetail() {
                    throw Error("TabNode does not support setDetail")
                }
                setMode() {
                    throw Error("TabNode does not support setMode")
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
            }

            function Rn() {
                return Ze(new kn)
            }
            class Dn {
                constructor(e, t, n) {
                    this._selection = null, this.key = e, this.offset = t, this.type = n
                }
                is(e) {
                    return this.key === e.key && this.offset === e.offset && this.type === e.type
                }
                isBefore(e) {
                    let t = this.getNode(),
                        n = e.getNode(),
                        r = this.offset;
                    if (e = e.offset, wr(t)) {
                        var i = t.getDescendantByIndex(r);
                        t = null != i ? i : t
                    }
                    return wr(n) && (i = n.getDescendantByIndex(e), n = null != i ? i : n), t === n ? r < e : t.isBefore(n)
                }
                getNode() {
                    let e = xe(this.key);
                    return null === e && L(20), e
                }
                set(e, t, n) {
                    let r = this._selection,
                        i = this.key;
                    this.key = e, this.offset = t, this.type = n, fr() || (Ce() === i && Ee(e), null !== r && (r._cachedNodes = null, r.dirty = !0))
                }
            }

            function Mn(e, t) {
                let n = t.__key,
                    r = e.offset,
                    i = "element";
                if (wn(t)) i = "text", r > (t = t.getTextContentSize()) && (r = t);
                else if (!wr(t)) {
                    var o = t.getNextSibling();
                    wn(o) ? (n = o.__key, r = 0, i = "text") : (o = t.getParent()) && (n = o.__key, r = t.getIndexWithinParent() + 1)
                }
                e.set(n, r, i)
            }

            function $n(e, t) {
                if (wr(t)) {
                    let n = t.getLastDescendant();
                    wr(n) || wn(n) ? Mn(e, n) : Mn(e, t)
                } else Mn(e, t)
            }

            function In(e, t, n, r) {
                let i = e.getNode(),
                    o = i.getChildAtIndex(e.offset),
                    s = On(),
                    l = Dr(i) ? Fr().append(s) : s;
                s.setFormat(n), s.setStyle(r), null === o ? i.append(l) : o.insertBefore(l), e.is(t) && t.set(s.__key, 0, "text"), e.set(s.__key, 0, "text")
            }

            function Pn(e, t, n, r) {
                e.key = t, e.offset = n, e.type = r
            }
            class Ln {
                constructor(e) {
                    this.dirty = !1, this._nodes = e, this._cachedNodes = null
                }
                is(e) {
                    if (!Kn(e)) return !1;
                    let t = this._nodes,
                        n = e._nodes;
                    return t.size === n.size && Array.from(t).every((e => n.has(e)))
                }
                add(e) {
                    this.dirty = !0, this._nodes.add(e), this._cachedNodes = null
                }
                delete(e) {
                    this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null
                }
                clear() {
                    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null
                }
                has(e) {
                    return this._nodes.has(e)
                }
                clone() {
                    return new Ln(new Set(this._nodes))
                }
                extract() {
                    return this.getNodes()
                }
                insertRawText() {}
                insertText() {}
                insertNodes(e, t) {
                    let n = this.getNodes(),
                        r = n.length;
                    var i = n[r - 1];
                    if (wn(i)) i = i.select();
                    else {
                        let e = i.getIndexWithinParent() + 1;
                        i = i.getParentOrThrow().select(e, e)
                    }
                    for (i.insertNodes(e, t), e = 0; e < r; e++) n[e].remove();
                    return !0
                }
                getNodes() {
                    var e = this._cachedNodes;
                    if (null !== e) return e;
                    var t = this._nodes;
                    e = [];
                    for (let n of t) null !== (t = xe(n)) && e.push(t);
                    return fr() || (this._cachedNodes = e), e
                }
                getTextContent() {
                    let e = this.getNodes(),
                        t = "";
                    for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
                    return t
                }
            }

            function Fn(e) {
                return e instanceof Wn
            }
            class Bn {
                constructor(e, t, n) {
                    this.gridKey = e, this.anchor = t, this.focus = n, this.dirty = !1, this._cachedNodes = null, t._selection = this, n._selection = this
                }
                is(e) {
                    return !!zn(e) && (this.gridKey === e.gridKey && this.anchor.is(e.anchor) && this.focus.is(e.focus))
                }
                set(e, t, n) {
                    this.dirty = !0, this.gridKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null
                }
                clone() {
                    return new Bn(this.gridKey, this.anchor, this.focus)
                }
                isCollapsed() {
                    return !1
                }
                isBackward() {
                    return this.focus.isBefore(this.anchor)
                }
                getCharacterOffsets() {
                    return Yn(this)
                }
                extract() {
                    return this.getNodes()
                }
                insertRawText() {}
                insertText() {}
                insertNodes(e, t) {
                    let n = this.focus.getNode();
                    return at(n.select(0, n.getChildrenSize())).insertNodes(e, t)
                }
                getShape() {
                    var e = xe(this.anchor.key);
                    null === e && L(21);
                    var t = e.getIndexWithinParent();
                    e = e.getParentOrThrow().getIndexWithinParent();
                    var n = xe(this.focus.key);
                    null === n && L(22);
                    var r = n.getIndexWithinParent();
                    let i = n.getParentOrThrow().getIndexWithinParent();
                    return n = Math.min(t, r), t = Math.max(t, r), r = Math.min(e, i), e = Math.max(e, i), {
                        fromX: Math.min(n, t),
                        fromY: Math.min(r, e),
                        toX: Math.max(n, t),
                        toY: Math.max(r, e)
                    }
                }
                getNodes() {
                    function e(e) {
                        let {
                            cell: t,
                            startColumn: n,
                            startRow: r
                        } = e;
                        l = Math.min(l, n), a = Math.min(a, r), u = Math.max(u, n + t.__colSpan - 1), c = Math.max(c, r + t.__rowSpan - 1)
                    }
                    var t = this._cachedNodes;
                    if (null !== t) return t;
                    var n = this.anchor.getNode();
                    t = this.focus.getNode(), n = nt(n, Kr);
                    var r = nt(t, Kr);
                    Kr(n) || L(103), Kr(r) || L(104), Hr(t = n.getParent()) || L(105), Yr(t = t.getParent()) || L(106);
                    let [i, o, s] = sr(t, n, r), l = Math.min(o.startColumn, s.startColumn), a = Math.min(o.startRow, s.startRow), u = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1), c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1);
                    n = l, r = a;
                    for (var d = l, g = a; l < n || a < r || u > d || c > g;) {
                        if (l < n) {
                            var f = g - r;
                            --n;
                            for (var h = 0; h <= f; h++) e(i[r + h][n])
                        }
                        if (a < r)
                            for (f = d - n, --r, h = 0; h <= f; h++) e(i[r][n + h]);
                        if (u > d)
                            for (f = g - r, d += 1, h = 0; h <= f; h++) e(i[r + h][d]);
                        if (c > g)
                            for (f = d - n, g += 1, h = 0; h <= f; h++) e(i[g][n + h])
                    }
                    for (t = [t], n = null, r = a; r <= c; r++)
                        for (d = l; d <= u; d++)({
                            cell: g
                        } = i[r][d]), Hr(f = g.getParent()) || L(107), f !== n && t.push(f), t.push(g, ...rt(g)), n = f;
                    return fr() || (this._cachedNodes = t), t
                }
                getTextContent() {
                    let e = this.getNodes(),
                        t = "";
                    for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
                    return t
                }
            }

            function zn(e) {
                return e instanceof Bn
            }
            class Wn {
                constructor(e, t, n, r) {
                    this.anchor = e, this.focus = t, this.dirty = !1, this.format = n, this.style = r, this._cachedNodes = null, e._selection = this, t._selection = this
                }
                is(e) {
                    return !!Fn(e) && (this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style)
                }
                isBackward() {
                    return this.focus.isBefore(this.anchor)
                }
                isCollapsed() {
                    return this.anchor.is(this.focus)
                }
                getNodes() {
                    var e = this._cachedNodes;
                    if (null !== e) return e;
                    e = this.anchor;
                    var t = this.focus,
                        n = e.isBefore(t),
                        r = n ? e : t;
                    n = n ? t : e, e = r.getNode(), t = n.getNode();
                    let i = r.offset;
                    return r = n.offset, wr(e) && (n = e.getDescendantByIndex(i), e = null != n ? n : e), wr(t) && (null !== (n = t.getDescendantByIndex(r)) && n !== e && t.getChildAtIndex(r) === n && (n = n.getPreviousSibling()), t = null != n ? n : t), e = e.is(t) ? wr(e) && 0 < e.getChildrenSize() ? [] : [e] : e.getNodesBetween(t), fr() || (this._cachedNodes = e), e
                }
                setTextNodeRange(e, t, n, r) {
                    Pn(this.anchor, e.__key, t, "text"), Pn(this.focus, n.__key, r, "text"), this._cachedNodes = null, this.dirty = !0
                }
                getTextContent() {
                    let e = this.getNodes();
                    if (0 === e.length) return "";
                    let t = e[0],
                        n = e[e.length - 1],
                        r = this.anchor,
                        i = this.focus,
                        o = r.isBefore(i),
                        [s, l] = Yn(this),
                        a = "",
                        u = !0;
                    for (let c = 0; c < e.length; c++) {
                        let d = e[c];
                        if (wr(d) && !d.isInline()) u || (a += "\n"), u = !d.isEmpty();
                        else if (u = !1, wn(d)) {
                            let e = d.getTextContent();
                            d === t ? d === n ? "element" === r.type && "element" === i.type && i.offset !== r.offset || (e = s < l ? e.slice(s, l) : e.slice(l, s)) : e = o ? e.slice(s) : e.slice(l) : d === n && (e = o ? e.slice(0, l) : e.slice(0, s)), a += e
                        } else !Ar(d) && !fn(d) || d === n && this.isCollapsed() || (a += d.getTextContent())
                    }
                    return a
                }
                applyDOMRange(e) {
                    let t = _r(),
                        n = t.getEditorState()._selection;
                    if (null !== (e = Jn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n))) {
                        var [r, i] = e;
                        Pn(this.anchor, r.key, r.offset, r.type), Pn(this.focus, i.key, i.offset, i.type), this._cachedNodes = null
                    }
                }
                clone() {
                    let e = this.anchor,
                        t = this.focus;
                    return new Wn(new Dn(e.key, e.offset, e.type), new Dn(t.key, t.offset, t.type), this.format, this.style)
                }
                toggleFormat(e) {
                    this.format = me(this.format, e, null), this.dirty = !0
                }
                setStyle(e) {
                    this.style = e, this.dirty = !0
                }
                hasFormat(e) {
                    return 0 != (this.format & q[e])
                }
                insertRawText(e) {
                    let t = [],
                        n = (e = e.split(/(\r?\n|\t)/)).length;
                    for (let r = 0; r < n; r++) {
                        let n = e[r];
                        "\n" === n || "\r\n" === n ? t.push(gn()) : "\t" === n ? t.push(Rn()) : t.push(On(n))
                    }
                    this.insertNodes(t)
                }
                insertText(e) {
                    var t = this.anchor,
                        n = this.focus,
                        r = this.isCollapsed() || t.isBefore(n),
                        i = this.format,
                        o = this.style;
                    r && "element" === t.type ? In(t, n, i, o) : r || "element" !== n.type || In(n, t, i, o);
                    var s = this.getNodes(),
                        l = s.length,
                        a = r ? n : t;
                    n = (r ? t : n).offset;
                    var u = a.offset;
                    wn(t = s[0]) || L(26), r = t.getTextContent().length;
                    var c = t.getParentOrThrow(),
                        d = s[l - 1];
                    if (this.isCollapsed() && n === r && (t.isSegmented() || t.isToken() || !t.canInsertTextAfter() || !c.canInsertTextAfter() && null === t.getNextSibling())) {
                        var g = t.getNextSibling();
                        if (wn(g) && g.canInsertTextBefore() && !pe(g) || ((g = On()).setFormat(i), c.canInsertTextAfter() ? t.insertAfter(g) : c.insertAfter(g)), g.select(0, 0), t = g, "" !== e) return void this.insertText(e)
                    } else if (this.isCollapsed() && 0 === n && (t.isSegmented() || t.isToken() || !t.canInsertTextBefore() || !c.canInsertTextBefore() && null === t.getPreviousSibling())) {
                        if (wn(g = t.getPreviousSibling()) && !pe(g) || ((g = On()).setFormat(i), c.canInsertTextBefore() ? t.insertBefore(g) : c.insertBefore(g)), g.select(), t = g, "" !== e) return void this.insertText(e)
                    } else if (t.isSegmented() && n !== r)(c = On(t.getTextContent())).setFormat(i), t.replace(c), t = c;
                    else if (!(this.isCollapsed() || "" === e || (g = d.getParent(), c.canInsertTextBefore() && c.canInsertTextAfter() && (!wr(g) || g.canInsertTextBefore() && g.canInsertTextAfter())))) return this.insertText(""), Vn(this.anchor, this.focus, null), void this.insertText(e);
                    if (1 === l)
                        if (t.isToken())(e = On(e)).select(), t.replace(e);
                        else {
                            if (s = t.getFormat(), l = t.getStyle(), n === u && (s !== i || l !== o)) {
                                if ("" !== t.getTextContent()) return (s = On(e)).setFormat(i), s.setStyle(o), s.select(), 0 === n ? t.insertBefore(s, !1) : ([l] = t.splitText(n), l.insertAfter(s, !1)), void(s.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length));
                                t.setFormat(i), t.setStyle(o)
                            }
                            "" === (t = t.spliceText(n, u - n, e, !0)).getTextContent() ? t.remove() : "text" === this.anchor.type && (t.isComposing() ? this.anchor.offset -= e.length : (this.format = s, this.style = l))
                        }
                    else {
                        if (i = new Set([...t.getParentKeys(), ...d.getParentKeys()]), g = wr(t) ? t : t.getParentOrThrow(), o = wr(d) ? d : d.getParentOrThrow(), c = d, !g.is(o) && o.isInline())
                            do {
                                c = o, o = o.getParentOrThrow()
                            } while (o.isInline());
                        "text" === a.type && (0 !== u || "" === d.getTextContent()) || "element" === a.type && d.getIndexWithinParent() < u ? wn(d) && !d.isToken() && u !== d.getTextContentSize() ? (d.isSegmented() && (a = On(d.getTextContent()), d.replace(a), d = a), d = d.spliceText(0, u, ""), i.add(d.__key)) : (a = d.getParentOrThrow()).canBeEmpty() || 1 !== a.getChildrenSize() ? d.remove() : a.remove() : i.add(d.__key), a = o.getChildren(), u = new Set(s), d = g.is(o), g = g.isInline() && null === t.getNextSibling() ? g : t;
                        for (let e = a.length - 1; 0 <= e; e--) {
                            let n = a[e];
                            if (n.is(t) || wr(n) && n.isParentOf(t)) break;
                            n.isAttached() && (!u.has(n) || n.is(c) ? d || g.insertAfter(n, !1) : n.remove())
                        }
                        if (!d)
                            for (a = o, u = null; null !== a;)(0 === (d = (o = a.getChildren()).length) || o[d - 1].is(u)) && (i.delete(a.__key), u = a), a = a.getParent();
                        for (t.isToken() ? n === r ? t.select() : ((e = On(e)).select(), t.replace(e)) : "" === (t = t.spliceText(n, r - n, e, !0)).getTextContent() ? t.remove() : t.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length), e = 1; e < l; e++) t = s[e], i.has(t.__key) || t.remove()
                    }
                }
                removeText() {
                    this.insertText("")
                }
                formatText(e) {
                    if (this.isCollapsed()) this.toggleFormat(e), Ee(null);
                    else {
                        var t = this.getNodes(),
                            n = [];
                        for (var r of t) wn(r) && n.push(r);
                        var i = n.length;
                        if (0 === i) this.toggleFormat(e), Ee(null);
                        else {
                            r = this.anchor;
                            var o = this.focus,
                                s = this.isBackward();
                            t = s ? o : r, r = s ? r : o;
                            var l = 0,
                                a = n[0];
                            if (o = "element" === t.type ? 0 : t.offset, "text" === t.type && o === a.getTextContentSize() && (l = 1, a = n[1], o = 0), null != a) {
                                s = a.getFormatFlags(e, null);
                                var u = i - 1,
                                    c = n[u];
                                if (i = "text" === r.type ? r.offset : c.getTextContentSize(), a.is(c)) o !== i && (0 === o && i === a.getTextContentSize() ? a.setFormat(s) : (e = a.splitText(o, i), (e = 0 === o ? e[0] : e[1]).setFormat(s), "text" === t.type && t.set(e.__key, 0, "text"), "text" === r.type && r.set(e.__key, i - o, "text")), this.format = s);
                                else {
                                    0 !== o && ([, a] = a.splitText(o), o = 0), a.setFormat(s);
                                    var d = c.getFormatFlags(e, s);
                                    for (0 < i && (i !== c.getTextContentSize() && ([c] = c.splitText(i)), c.setFormat(d)), l += 1; l < u; l++) {
                                        let t = n[l];
                                        if (!t.isToken()) {
                                            let n = t.getFormatFlags(e, d);
                                            t.setFormat(n)
                                        }
                                    }
                                    "text" === t.type && t.set(a.__key, o, "text"), "text" === r.type && r.set(c.__key, i, "text"), this.format = s | d
                                }
                            }
                        }
                    }
                }
                insertNodes(e, t) {
                    if (!this.isCollapsed()) {
                        var n = this.isBackward() ? this.anchor : this.focus,
                            r = n.getNode().getNextSibling();
                        if (r = r ? r.getKey() : null, n = (n = n.getNode().getPreviousSibling()) ? n.getKey() : null, this.removeText(), this.isCollapsed() && "element" === this.focus.type) {
                            if (this.focus.key === r && 0 === this.focus.offset) {
                                var i = On();
                                this.focus.getNode().insertBefore(i)
                            } else this.focus.key === n && this.focus.offset === this.focus.getNode().getChildrenSize() && (i = On(), this.focus.getNode().insertAfter(i));
                            i && (this.focus.set(i.__key, 0, "text"), this.anchor.set(i.__key, 0, "text"))
                        }
                    }
                    n = (i = this.anchor).offset;
                    var o = i.getNode();
                    r = o, "element" === i.type && (r = null === (r = (i = i.getNode()).getChildAtIndex(n - 1)) ? i : r), i = [];
                    var s = o.getNextSiblings(),
                        l = Ve(o) ? null : o.getTopLevelElementOrThrow();
                    if (wn(o))
                        if (r = o.getTextContent().length, 0 === n && 0 !== r) r = null !== (r = o.getPreviousSibling()) ? r : o.getParentOrThrow(), i.push(o);
                        else if (n === r) r = o;
                    else {
                        if (o.isToken()) return !1;
                        [r, o] = o.splitText(n), i.push(o)
                    }
                    o = r, i.push(...s), s = e[0];
                    var a = !1,
                        u = null;
                    for (let t = 0; t < e.length; t++) {
                        var c = e[t];
                        if (Ve(r) || Ar(r) || !wr(c) || c.isInline()) a && !wr(c) && !Ar(c) && Ve(r.getParent()) && L(28);
                        else {
                            if (c.is(s)) {
                                if (wr(r) && r.isEmpty() && r.canReplaceWith(c)) {
                                    r.replace(c), r = c, a = !0;
                                    continue
                                }
                                if (ye(a = c.getFirstDescendant())) {
                                    for (var d = a.getParentOrThrow(); d.isInline();) d = d.getParentOrThrow();
                                    if (a = (u = d.getChildren()).length, wr(r)) {
                                        var g = r.getFirstChild();
                                        for (let e = 0; e < a; e++) {
                                            let t = u[e];
                                            null === g ? r.append(t) : g.insertAfter(t), g = t
                                        }
                                    } else {
                                        for (g = a - 1; 0 <= g; g--) r.insertAfter(u[g]);
                                        r = r.getParentOrThrow()
                                    }
                                    if (u = u[a - 1], d.remove(), a = !0, d.is(c)) continue
                                }
                            }
                            wn(r) && (null === l && L(27), r = l)
                        }
                        a = !1, wr(r) && !r.isInline() ? (u = c, Ar(c) && !c.isInline() ? r = r.insertAfter(c, !1) : wr(c) ? !c.canBeEmpty() && c.isEmpty() || (Dr(r) ? (null !== (d = r.getChildAtIndex(n)) ? d.insertBefore(c) : r.append(c), r = c) : c.isInline() ? (r.append(c), r = c) : r = r.insertAfter(c, !1)) : (null !== (d = r.getFirstChild()) ? d.insertBefore(c) : r.append(c), r = c)) : !wr(c) || wr(c) && c.isInline() || Ar(r) && !r.isInline() ? (u = c, Fn(this) && Ar(c) && (wr(r) || wn(r)) && !c.isInline() ? (wn(r) ? (d = r.getParentOrThrow(), [r] = r.splitText(n), r = r.getIndexWithinParent() + 1) : (d = r, r = n), [, r] = tt(d, r), r = r.insertBefore(c)) : r = r.insertAfter(c, !1)) : (c = r.getParentOrThrow(), fn(r) && r.remove(), r = c, t--)
                    }
                    if (t && (wn(o) ? o.select() : wn(e = r.getPreviousSibling()) ? e.select() : (e = r.getIndexWithinParent(), r.getParentOrThrow().select(e, e))), wr(r)) {
                        if (e = wn(u) ? u : wr(u) && u.isInline() ? u.getLastDescendant() : r.getLastDescendant(), t || (null === e ? r.select() : wn(e) ? "" === e.getTextContent() ? e.selectPrevious() : e.select() : e.selectNext()), 0 !== i.length)
                            for (t = r, e = i.length - 1; 0 <= e; e--) l = (n = i[e]).getParentOrThrow(), !wr(r) || Zn(n) || Ar(n) && (!n.isInline() || n.isIsolated()) ? wr(r) || Zn(n) ? wr(n) && !n.canInsertAfter(r) ? (wr(o = l.constructor.clone(l)) || L(29), o.append(n), r.insertAfter(o)) : r.insertAfter(n) : (r.insertBefore(n), r = n) : (t === r ? r.append(n) : r.insertBefore(n), r = n), l.isEmpty() && !l.canBeEmpty() && l.remove()
                    } else t || (wn(r) ? r.select() : (t = r.getParentOrThrow(), e = r.getIndexWithinParent() + 1, t.select(e, e)));
                    return !0
                }
                insertParagraph() {
                    this.isCollapsed() || this.removeText();
                    var e = this.anchor,
                        t = e.offset,
                        n = [];
                    if ("text" === e.type) {
                        var r = e.getNode(),
                            i = r.getNextSiblings().reverse(),
                            o = r.getParentOrThrow(),
                            s = o.isInline(),
                            l = s ? o.getTextContentSize() : r.getTextContentSize();
                        0 === t ? i.push(r) : (s && (n = o.getNextSiblings()), t === l || s && t === r.getTextContentSize() || ([, r] = r.splitText(t), i.push(r)))
                    } else {
                        if (Ve(o = e.getNode())) return i = Fr(), n = o.getChildAtIndex(t), i.select(), void(null !== n ? n.insertBefore(i, !1) : o.append(i));
                        i = o.getChildren().slice(t).reverse()
                    }
                    if (r = i.length, 0 === t && 0 < r && o.isInline()) {
                        if (wr(i = (n = o.getParentOrThrow()).insertNewAfter(this, !1)))
                            for (n = n.getChildren(), o = 0; o < n.length; o++) i.append(n[o])
                    } else if (null === (s = o.insertNewAfter(this, !1))) this.insertLineBreak();
                    else if (wr(s))
                        if (l = o.getFirstChild(), 0 === t && (o.is(e.getNode()) || l && l.is(e.getNode())) && 0 < r) o.insertBefore(s);
                        else {
                            if (o = null, t = n.length, e = s.getParentOrThrow(), 0 < t)
                                for (l = 0; l < t; l++) e.append(n[l]);
                            if (0 !== r)
                                for (n = 0; n < r; n++) t = i[n], null === o ? s.append(t) : o.insertBefore(t), o = t;
                            s.canBeEmpty() || 0 !== s.getChildrenSize() ? s.selectStart() : (s.selectPrevious(), s.remove())
                        }
                }
                insertLineBreak(e) {
                    let t = gn();
                    var n = this.anchor;
                    "element" === n.type && (Dr(n = n.getNode()) && this.insertParagraph()), e ? this.insertNodes([t], !0) : this.insertNodes([t]) && t.selectNext(0, 0)
                }
                getCharacterOffsets() {
                    return Yn(this)
                }
                extract() {
                    var e = this.getNodes(),
                        t = e.length,
                        n = t - 1,
                        r = this.anchor;
                    let i = this.focus;
                    var o = e[0];
                    let s = e[n],
                        [l, a] = Yn(this);
                    return 0 === t ? [] : 1 === t ? wn(o) && !this.isCollapsed() ? (e = l > a ? a : l, n = o.splitText(e, l > a ? l : a), null != (e = 0 === e ? n[0] : n[1]) ? [e] : []) : [o] : (t = r.isBefore(i), wn(o) && ((r = t ? l : a) === o.getTextContentSize() ? e.shift() : 0 !== r && ([, o] = o.splitText(r), e[0] = o)), wn(s) && (o = s.getTextContent().length, 0 === (t = t ? a : l) ? e.pop() : t !== o && ([s] = s.splitText(t), e[n] = s)), e)
                }
                modify(e, t, n) {
                    var r = this.focus,
                        i = this.anchor,
                        o = "move" === e,
                        s = ze(r, t);
                    if (Ar(s) && !s.isIsolated()) o && s.isKeyboardSelectable() ? ((t = Xn()).add(s.__key), ke(t)) : wn(e = t ? s.getPreviousSibling() : s.getNextSibling()) ? (s = e.__key, t = t ? e.getTextContent().length : 0, r.set(s, t, "text"), o && i.set(s, t, "text")) : (n = s.getParentOrThrow(), wr(e) ? (n = e.__key, s = t ? e.getChildrenSize() : 0) : (s = s.getIndexWithinParent(), n = n.__key, t || s++), r.set(n, s, "element"), o && i.set(n, s, "element"));
                    else if (r = et((i = _r())._window)) {
                        var l = i._blockCursorElement,
                            a = i._rootElement;
                        if (null === a || null === l || !wr(s) || s.isInline() || s.canBeEmpty() || Qe(l, i, a), r.modify(e, t ? "backward" : "forward", n), 0 < r.rangeCount && (s = r.getRangeAt(0), i = Dr(i = this.anchor.getNode()) ? i : Ge(i), this.applyDOMRange(s), this.dirty = !0, !o)) {
                            for (o = this.getNodes(), e = [], n = !1, l = 0; l < o.length; l++) je(a = o[l], i) ? e.push(a) : n = !0;
                            n && 0 < e.length && (t ? wr(t = e[0]) ? t.selectStart() : t.getParentOrThrow().selectStart() : wr(t = e[e.length - 1]) ? t.selectEnd() : t.getParentOrThrow().selectEnd()), r.anchorNode === s.startContainer && r.anchorOffset === s.startOffset || (t = this.focus, r = (o = this.anchor).key, s = o.offset, i = o.type, Pn(o, t.key, t.offset, t.type), Pn(t, r, s, i), this._cachedNodes = null)
                        }
                    }
                }
                deleteCharacter(e) {
                    let t = this.isCollapsed();
                    if (this.isCollapsed()) {
                        var r = this.anchor,
                            i = this.focus,
                            o = r.getNode();
                        if (!e && ("element" === r.type && wr(o) && r.offset === o.getChildrenSize() || "text" === r.type && r.offset === o.getTextContentSize())) {
                            var s = o.getParent();
                            if (wr(s = o.getNextSibling() || (null === s ? null : s.getNextSibling())) && s.isShadowRoot()) return
                        }
                        if (Ar(s = ze(i, e)) && !s.isIsolated()) return void(s.isKeyboardSelectable() && wr(o) && 0 === o.getChildrenSize() ? (o.remove(), e = Xn(), e.add(s.__key), ke(e)) : (s.remove(), _r().dispatchCommand(n, void 0)));
                        if (!e && wr(s) && wr(o) && o.isEmpty()) return o.remove(), void s.selectStart();
                        if (this.modify("extend", e, "character"), this.isCollapsed()) {
                            if (e && 0 === r.offset && ("element" === r.type ? r.getNode() : r.getNode().getParentOrThrow()).collapseAtStart(this)) return
                        } else {
                            if (s = "text" === i.type ? i.getNode() : null, o = "text" === r.type ? r.getNode() : null, null !== s && s.isSegmented()) {
                                if (r = i.offset, i = s.getTextContentSize(), s.is(o) || e && r !== i || !e && 0 !== r) return void jn(s, e, r)
                            } else if (null !== o && o.isSegmented() && (r = r.offset, i = o.getTextContentSize(), o.is(s) || e && 0 !== r || !e && r !== i)) return void jn(o, e, r);
                            if (o = this.anchor, s = this.focus, (r = o.getNode()) === (i = s.getNode()) && "text" === o.type && "text" === s.type) {
                                var l = o.offset,
                                    a = s.offset;
                                let t = l < a;
                                (i = t ? l : a) !== (l = (a = t ? a : l) - 1) && (De(r = r.getTextContent().slice(i, a)) || (e ? s.offset = l : o.offset = l))
                            }
                        }
                    }
                    this.removeText(), e && !t && this.isCollapsed() && "element" === this.anchor.type && 0 === this.anchor.offset && ((e = this.anchor.getNode()).isEmpty() && Dr(e.getParent()) && 0 === e.getIndexWithinParent() && e.collapseAtStart(this))
                }
                deleteLine(e) {
                    this.isCollapsed() && ("text" === this.anchor.type && this.modify("extend", e, "lineboundary"), 0 === (e ? this.focus : this.anchor).offset && this.modify("extend", e, "character")), this.removeText()
                }
                deleteWord(e) {
                    this.isCollapsed() && this.modify("extend", e, "word"), this.removeText()
                }
            }

            function Kn(e) {
                return e instanceof Ln
            }

            function Un(e) {
                let t = e.offset;
                return "text" === e.type ? t : t === (e = e.getNode()).getChildrenSize() ? e.getTextContent().length : 0
            }

            function Yn(e) {
                let t = e.anchor;
                return e = e.focus, "element" === t.type && "element" === e.type && t.key === e.key && t.offset === e.offset ? [0, 0] : [Un(t), Un(e)]
            }

            function jn(e, t, n) {
                let r = e.getTextContent().split(/(?=\s)/g),
                    i = r.length,
                    o = 0,
                    s = 0;
                for (let e = 0; e < i; e++) {
                    let l = e === i - 1;
                    if (s = o, o += r[e].length, t && o === n || o > n || l) {
                        r.splice(e, 1), l && (s = void 0);
                        break
                    }
                }
                "" === (t = r.join("").trim()) ? e.remove(): (e.setTextContent(t), e.select(s, s))
            }

            function Hn(e, t, n, r) {
                var i = t;
                if (1 === e.nodeType) {
                    let l = !1;
                    var o = e.childNodes,
                        s = o.length;
                    i === s && (l = !0, i = s - 1);
                    let a = o[i];
                    if (s = !1, a === r._blockCursorElement ? (a = o[i + 1], s = !0) : null !== r._blockCursorElement && i--, wn(r = Re(a))) i = l ? r.getTextContentSize() : 0;
                    else {
                        if (null === (o = Re(e))) return null;
                        if (wr(o) ? ((t = wr(e = o.getChildAtIndex(i))) && (t = e.getParent(), t = null === n || null === t || !t.canBeEmpty() || t !== n.getNode()), t && (null === (n = l ? e.getLastDescendant() : e.getFirstDescendant()) ? (o = e, i = 0) : o = wr(e = n) ? e : e.getParentOrThrow()), wn(e) ? (r = e, o = null, i = l ? e.getTextContentSize() : 0) : e !== o && l && !s && i++) : (i = o.getIndexWithinParent(), i = 0 === t && Ar(o) && Re(e) === o ? i : i + 1, o = o.getParentOrThrow()), wr(o)) return new Dn(o.__key, i, "element")
                    }
                } else r = Re(e);
                return wn(r) ? new Dn(r.__key, i, "text") : null
            }

            function Gn(e, t, n) {
                var r = e.offset,
                    i = e.getNode();
                0 === r ? (r = i.getPreviousSibling(), i = i.getParent(), t ? (n || !t) && null === r && wr(i) && i.isInline() && (wn(t = i.getPreviousSibling()) && (e.key = t.__key, e.offset = t.getTextContent().length)) : wr(r) && !n && r.isInline() ? (e.key = r.__key, e.offset = r.getChildrenSize(), e.type = "element") : wn(r) && (e.key = r.__key, e.offset = r.getTextContent().length)) : r === i.getTextContent().length && (r = i.getNextSibling(), i = i.getParent(), t && wr(r) && r.isInline() ? (e.key = r.__key, e.offset = 0, e.type = "element") : (n || t) && null === r && wr(i) && i.isInline() && !i.canInsertTextAfter() && (wn(t = i.getNextSibling()) && (e.key = t.__key, e.offset = 0)))
            }

            function Vn(e, t, n) {
                if ("text" === e.type && "text" === t.type) {
                    var r = e.isBefore(t);
                    let i = e.is(t);
                    Gn(e, r, i), Gn(t, !r, i), i && (t.key = e.key, t.offset = e.offset, t.type = e.type), (r = _r()).isComposing() && r._compositionKey !== e.key && Fn(n) && (r = n.anchor, n = n.focus, Pn(e, r.key, r.offset, r.type), Pn(t, n.key, n.offset, n.type))
                }
            }

            function Jn(e, t, n, r, i, o) {
                return null !== e && null !== n && fe(i, e, n) ? null === (t = Hn(e, t, Fn(o) ? o.anchor : null, i)) || null === (r = Hn(n, r, Fn(o) ? o.focus : null, i)) || "element" === t.type && "element" === r.type && (e = Re(e), n = Re(n), Ar(e) && Ar(n)) ? null : (Vn(t, r, o), [t, r]) : null
            }

            function Zn(e) {
                return wr(e) && !e.isInline()
            }

            function qn(e, t, n, r, i, o) {
                let s = pr();
                return (e = new Wn(new Dn(e, t, i), new Dn(n, r, o), 0, "")).dirty = !0, s._selection = e
            }

            function Xn() {
                return new Ln(new Set)
            }

            function Qn(e, t, n) {
                var r = n._window;
                if (null === r) return null;
                var i = r.event,
                    o = i ? i.type : void 0;
                let s;
                if (r = "selectionchange" === o, i = !re && (r || "beforeinput" === o || "compositionstart" === o || "compositionend" === o || "click" === o && i && 3 === i.detail || "drop" === o || void 0 === o), Fn(e) && !i) return e.clone();
                if (null === t) return null;
                if (i = t.anchorNode, o = t.focusNode, s = t.anchorOffset, t = t.focusOffset, r && Fn(e) && !fe(n, i, o)) return e.clone();
                if (null === (n = Jn(i, s, o, t, n, e))) return null;
                let [l, a] = n;
                return new Wn(l, a, Fn(e) ? e.format : 0, Fn(e) ? e.style : "")
            }

            function er() {
                return pr()._selection
            }

            function tr() {
                return _r()._editorState._selection
            }

            function nr(e, t, n, r = 1) {
                var i = e.anchor,
                    o = e.focus,
                    s = i.getNode(),
                    l = o.getNode();
                if (t.is(s) || t.is(l)) {
                    if (s = t.__key, e.isCollapsed())(n <= (t = i.offset) && 0 < r || n < t && 0 > r) && (n = Math.max(0, t + r), i.set(s, n, "element"), o.set(s, n, "element"), rr(e));
                    else {
                        let u = e.isBackward();
                        var a = (l = u ? o : i).getNode();
                        o = (i = u ? i : o).getNode(), t.is(a) && ((n <= (a = l.offset) && 0 < r || n < a && 0 > r) && l.set(s, Math.max(0, a + r), "element")), t.is(o) && ((n <= (t = i.offset) && 0 < r || n < t && 0 > r) && i.set(s, Math.max(0, t + r), "element"))
                    }
                    rr(e)
                }
            }

            function rr(e) {
                var t = e.anchor,
                    n = t.offset;
                let r = e.focus;
                var i = r.offset,
                    o = t.getNode(),
                    s = r.getNode();
                if (e.isCollapsed()) wr(o) && (wn(s = (i = n >= (s = o.getChildrenSize())) ? o.getChildAtIndex(s - 1) : o.getChildAtIndex(n)) && (n = 0, i && (n = s.getTextContentSize()), t.set(s.__key, n, "text"), r.set(s.__key, n, "text")));
                else {
                    if (wr(o)) {
                        let r = o.getChildrenSize();
                        wn(n = (e = n >= r) ? o.getChildAtIndex(r - 1) : o.getChildAtIndex(n)) && (o = 0, e && (o = n.getTextContentSize()), t.set(n.__key, o, "text"))
                    }
                    wr(s) && (wn(i = (t = i >= (n = s.getChildrenSize())) ? s.getChildAtIndex(n - 1) : s.getChildAtIndex(i)) && (s = 0, t && (s = i.getTextContentSize()), r.set(i.__key, s, "text")))
                }
            }

            function ir(e, t, n, r, i) {
                let o = null,
                    s = 0,
                    l = null;
                null !== r ? (o = r.__key, wn(r) ? (s = r.getTextContentSize(), l = "text") : wr(r) && (s = r.getChildrenSize(), l = "element")) : null !== i && (o = i.__key, wn(i) ? l = "text" : wr(i) && (l = "element")), null !== o && null !== l ? e.set(o, s, l) : (s = t.getIndexWithinParent(), -1 === s && (s = n.getChildrenSize()), e.set(n.__key, s, "element"))
            }

            function or(e, t, n, r, i) {
                "text" === e.type ? (e.key = n, t || (e.offset += i)) : e.offset > r.getIndexWithinParent() && --e.offset
            }

            function sr(e, t, n) {
                let r = [],
                    i = null,
                    o = null;
                e = e.getChildren();
                for (let c = 0; c < e.length; c++) {
                    var s = e[c];
                    Hr(s) || L(108);
                    var l = s.getChildren();
                    s = 0;
                    for (let e of l) {
                        for (Kr(e) || L(109); void 0 !== r[c] && void 0 !== r[c][s];) s++;
                        var a = s,
                            u = e;
                        let d = {
                                cell: u,
                                startColumn: a,
                                startRow: l = c
                            },
                            g = u.__rowSpan,
                            f = u.__colSpan;
                        for (let e = 0; e < g; e++) {
                            void 0 === r[l + e] && (r[l + e] = []);
                            for (let t = 0; t < f; t++) r[l + e][a + t] = d
                        }
                        t.is(u) && (i = d), n.is(u) && (o = d), s += e.__colSpan
                    }
                }
                return null === i && L(110), null === o && L(111), [r, i, o]
            }
            let lr = null,
                ar = null,
                ur = !1,
                cr = !1,
                dr = 0,
                gr = {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                };

            function fr() {
                return ur || null !== lr && lr._readOnly
            }

            function hr() {
                ur && L(13)
            }

            function pr() {
                return null === lr && L(15), lr
            }

            function _r() {
                return null === ar && L(16), ar
            }

            function mr(e, t, n) {
                var r = t.__type;
                let i = e._nodes.get(r);
                for (void 0 === i && L(30), void 0 === (e = n.get(r)) && (e = Array.from(i.transforms), n.set(r, e)), n = e.length, r = 0; r < n && (e[r](t), t.isAttached()); r++);
            }

            function yr(e, t) {
                var n = t.get(e.type);
                if (void 0 === n && L(17), n = n.klass, e.type !== n.getType() && L(18), n = n.importJSON(e), e = e.children, wr(n) && Array.isArray(e))
                    for (let r = 0; r < e.length; r++) {
                        let i = yr(e[r], t);
                        n.append(i)
                    }
                return n
            }

            function Nr(e, t) {
                let n = lr,
                    r = ur,
                    i = ar;
                lr = e, ur = !0, ar = null;
                try {
                    return t()
                } finally {
                    lr = n, ur = r, ar = i
                }
            }

            function vr(e) {
                let t = e._pendingEditorState,
                    r = e._rootElement,
                    i = e._headless || null === r;
                if (null !== t) {
                    var o = e._editorState,
                        s = o._selection,
                        l = t._selection,
                        a = 0 !== e._dirtyType,
                        u = lr,
                        c = ur,
                        d = ar,
                        g = e._updating,
                        f = e._observer,
                        h = null;
                    if (e._pendingEditorState = null, e._editorState = t, !i && a && null !== f) {
                        ar = e, lr = t, ur = !1, e._updating = !0;
                        try {
                            let n = e._dirtyType,
                                i = e._dirtyElements,
                                s = e._dirtyLeaves;
                            f.disconnect();
                            var p = i,
                                _ = s;
                            Tt = Et = vt = "", Ct = 2 === n, bt = null, dt = e, ct = e._config, gt = e._nodes, ft = dt._listeners.mutation, ht = p, pt = _, _t = o._nodeMap, mt = t._nodeMap, xt = t._readOnly, yt = new Map(e._keyToDOMMap);
                            let l = new Map;
                            Nt = l, Lt("root", null), Nt = yt = ct = mt = _t = pt = ht = gt = dt = void 0, h = l
                        } catch (n) {
                            if (n instanceof Error && e._onError(n), cr) throw n;
                            return Br(e, null, r, t), ue(e), e._dirtyType = 2, cr = !0, vr(e), void(cr = !1)
                        } finally {
                            f.observe(r, gr), e._updating = g, lr = u, ur = c, ar = d
                        }
                    }
                    t._readOnly || (t._readOnly = !0);
                    var m = e._dirtyLeaves,
                        y = e._dirtyElements,
                        N = e._normalizedNodes,
                        v = e._updateTags,
                        T = e._deferred;
                    a && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements = new Map, e._normalizedNodes = new Set, e._updateTags = new Set);
                    var E, C = e._decorators,
                        x = e._pendingDecorators || C,
                        b = t._nodeMap;
                    for (E in x) b.has(E) || (x === C && (x = Ae(e)), delete x[E]);
                    var S = i ? null : et(e._window);
                    if (e._editable && null !== S && (a || null === l || l.dirty)) {
                        ar = e, lr = t;
                        try {
                            if (null !== f && f.disconnect(), a || null === l || l.dirty) {
                                let t = e._blockCursorElement;
                                null !== t && Qe(t, e, r);
                                e: {
                                    let t = S.anchorNode,
                                        n = S.focusNode,
                                        i = S.anchorOffset,
                                        o = S.focusOffset,
                                        a = document.activeElement;
                                    if (!(v.has("collaboration") && a !== r || null !== a && ge(a)))
                                        if (Fn(l)) {
                                            var A = l.anchor,
                                                O = l.focus,
                                                w = A.key,
                                                k = O.key,
                                                R = Ue(e, w),
                                                D = Ue(e, k),
                                                M = A.offset,
                                                $ = O.offset,
                                                I = l.format,
                                                P = l.style,
                                                L = l.isCollapsed(),
                                                F = R,
                                                B = D,
                                                z = !1;
                                            if ("text" === A.type) {
                                                F = _e(R);
                                                let e = A.getNode();
                                                z = e.getFormat() !== I || e.getStyle() !== P
                                            } else Fn(s) && "text" === s.anchor.type && (z = !0);
                                            if ("text" === O.type && (B = _e(D)), null !== F && null !== B) {
                                                if (L && (null === s || z || Fn(s) && (s.format !== I || s.style !== P))) {
                                                    var W = performance.now();
                                                    Xt = [I, P, M, w, W]
                                                }
                                                if (i === M && o === $ && t === F && n === B && ("Range" !== S.type || !L) && (null !== a && r.contains(a) || r.focus({
                                                        preventScroll: !0
                                                    }), "element" !== A.type)) break e;
                                                try {
                                                    S.setBaseAndExtent(F, M, B, $)
                                                } catch (e) {}
                                                if (!v.has("skip-scroll-into-view") && l.isCollapsed() && null !== r && r === document.activeElement) {
                                                    let t = l instanceof Wn && "element" === l.anchor.type ? F.childNodes[M] || null : 0 < S.rangeCount ? S.getRangeAt(0) : null;
                                                    if (null !== t) {
                                                        let n;
                                                        if (t instanceof Text) {
                                                            let e = document.createRange();
                                                            e.selectNode(t), n = e.getBoundingClientRect()
                                                        } else n = t.getBoundingClientRect();
                                                        let i = r.ownerDocument,
                                                            o = i.defaultView;
                                                        if (null !== o)
                                                            for (var K, U, {
                                                                    top: Y,
                                                                    bottom: j
                                                                } = n, H = r; null !== H;) {
                                                                let t = H === i.body;
                                                                if (t) K = 0, U = He(e).innerHeight;
                                                                else {
                                                                    let e = H.getBoundingClientRect();
                                                                    K = e.top, U = e.bottom
                                                                }
                                                                let n = 0;
                                                                if (Y < K ? n = -(K - Y) : j > U && (n = j - U), 0 !== n)
                                                                    if (t) o.scrollBy(0, n);
                                                                    else {
                                                                        let e = H.scrollTop;
                                                                        H.scrollTop += n;
                                                                        let t = H.scrollTop - e;
                                                                        Y -= t, j -= t
                                                                    }
                                                                if (t) break;
                                                                H = Ye(H)
                                                            }
                                                    }
                                                }
                                                Vt = !0
                                            }
                                        } else null !== s && fe(e, t, n) && S.removeAllRanges()
                                }
                            }
                            e: {
                                let t = e._blockCursorElement;
                                if (Fn(l) && l.isCollapsed() && "element" === l.anchor.type && r.contains(document.activeElement)) {
                                    let n = l.anchor,
                                        i = n.getNode(),
                                        o = n.offset,
                                        s = i.getChildrenSize(),
                                        a = !1,
                                        u = null;
                                    if (o === s) {
                                        Xe(i.getChildAtIndex(o - 1)) && (a = !0)
                                    } else {
                                        let t = i.getChildAtIndex(o);
                                        if (Xe(t)) {
                                            let n = t.getPreviousSibling();
                                            (null === n || Xe(n)) && (a = !0, u = e.getElementByKey(t.__key))
                                        }
                                    }
                                    if (a) {
                                        let n = e.getElementByKey(i.__key);
                                        if (null === t) {
                                            let n = e._config.theme,
                                                r = document.createElement("div");
                                            r.contentEditable = "false", r.setAttribute("data-lexical-cursor", "true");
                                            let i = n.blockCursor;
                                            if (void 0 !== i) {
                                                if ("string" == typeof i) {
                                                    let e = i.split(" ");
                                                    i = n.blockCursor = e
                                                }
                                                void 0 !== i && r.classList.add(...i)
                                            }
                                            e._blockCursorElement = t = r
                                        }
                                        r.style.caretColor = "transparent", null === u ? n.appendChild(t) : n.insertBefore(t, u);
                                        break e
                                    }
                                }
                                null !== t && Qe(t, e, r)
                            }
                            null !== f && f.observe(r, gr)
                        } finally {
                            ar = d, lr = u
                        }
                    }
                    if (null !== h) {
                        var G = h;
                        let t = Array.from(e._listeners.mutation),
                            n = t.length;
                        for (let e = 0; e < n; e++) {
                            let [n, r] = t[e], i = G.get(r);
                            void 0 !== i && n(i, {
                                dirtyLeaves: m,
                                updateTags: v
                            })
                        }
                    }
                    Fn(l) || null === l || null !== s && s.is(l) || e.dispatchCommand(n, void 0);
                    var V = e._pendingDecorators;
                    null !== V && (e._decorators = V, e._pendingDecorators = null, Tr("decorator", e, !0, V));
                    var J = Oe(o),
                        Z = Oe(t);
                    if (J !== Z && Tr("textcontent", e, !0, Z), Tr("update", e, !0, {
                            dirtyElements: y,
                            dirtyLeaves: m,
                            editorState: t,
                            normalizedNodes: N,
                            prevEditorState: o,
                            tags: v
                        }), e._deferred = [], 0 !== T.length) {
                        let t = e._updating;
                        e._updating = !0;
                        try {
                            for (let e = 0; e < T.length; e++) T[e]()
                        } finally {
                            e._updating = t
                        }
                    }
                    var q = e._updates;
                    if (0 !== q.length) {
                        let t = q.shift();
                        if (t) {
                            let [n, r] = t;
                            xr(e, n, r)
                        }
                    }
                }
            }

            function Tr(e, t, n, ...r) {
                let i = t._updating;
                t._updating = n;
                try {
                    let n = Array.from(t._listeners[e]);
                    for (e = 0; e < n.length; e++) n[e].apply(null, r)
                } finally {
                    t._updating = i
                }
            }

            function Er(e, t, n) {
                if (!1 === e._updating || ar !== e) {
                    let r = !1;
                    return e.update((() => {
                        r = Er(e, t, n)
                    })), r
                }
                let r = Me(e);
                for (let o = 4; 0 <= o; o--)
                    for (let s = 0; s < r.length; s++) {
                        var i = r[s]._commands.get(t);
                        if (void 0 !== i && void 0 !== (i = i[o])) {
                            let t = (i = Array.from(i)).length;
                            for (let r = 0; r < t; r++)
                                if (!0 === i[r](n, e)) return !0
                        }
                    }
                return !1
            }

            function Cr(e, t) {
                let n = e._updates;
                for (t = t || !1; 0 !== n.length;) {
                    var r = n.shift();
                    if (r) {
                        let n, [i, o] = r;
                        void 0 !== o && (r = o.onUpdate, n = o.tag, o.skipTransforms && (t = !0), r && e._deferred.push(r), n && e._updateTags.add(n)), i()
                    }
                }
                return t
            }

            function xr(e, t, n) {
                let r = e._updateTags;
                var i, o = i = !1;
                if (void 0 !== n) {
                    var s = n.onUpdate;
                    null != (i = n.tag) && r.add(i), i = n.skipTransforms || !1, o = n.discrete || !1
                }
                s && e._deferred.push(s), n = e._editorState;
                let l = !1;
                (null === (s = e._pendingEditorState) || s._readOnly) && (s = e._pendingEditorState = new Ir(new Map((s || n)._nodeMap)), l = !0), s._flushSync = o, o = lr;
                let a = ur,
                    u = ar,
                    c = e._updating;
                lr = s, ur = !1, e._updating = !0, ar = e;
                try {
                    l && (e._headless ? null != n._selection && (s._selection = n._selection.clone()) : s._selection = function(e) {
                        let t = e.getEditorState()._selection,
                            n = et(e._window);
                        return Kn(t) || zn(t) ? t.clone() : Qn(t, n, e)
                    }(e));
                    let r = e._compositionKey;
                    t(), i = Cr(e, i),
                        function(e, t) {
                            if (t = t.getEditorState()._selection, Fn(e = e._selection)) {
                                var n = e.anchor;
                                let r, i = e.focus;
                                "text" === n.type && (r = n.getNode(), r.selectionTransform(t, e)), "text" === i.type && r !== (n = i.getNode()) && n.selectionTransform(t, e)
                            }
                        }(s, e), 0 !== e._dirtyType && (i ? function(e, t) {
                            t = t._dirtyLeaves, e = e._nodeMap;
                            for (let n of t) wn(t = e.get(n)) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && lt(t)
                        }(s, e) : function(e, t) {
                            let n = t._dirtyLeaves,
                                r = t._dirtyElements;
                            e = e._nodeMap;
                            let i = Ce(),
                                o = new Map;
                            var s = n;
                            let l = s.size;
                            for (var a = r, u = a.size; 0 < l || 0 < u;) {
                                if (0 < l) {
                                    t._dirtyLeaves = new Set;
                                    for (let r of s) wn(s = e.get(r)) && s.isAttached() && s.isSimpleText() && !s.isUnmergeable() && lt(s), void 0 !== s && void 0 !== s && s.__key !== i && s.isAttached() && mr(t, s, o), n.add(r);
                                    if (l = (s = t._dirtyLeaves).size, 0 < l) {
                                        dr++;
                                        continue
                                    }
                                }
                                t._dirtyLeaves = new Set, t._dirtyElements = new Map;
                                for (let n of a) a = n[0], u = n[1], ("root" === a || u) && (void 0 !== (s = e.get(a)) && void 0 !== s && s.__key !== i && s.isAttached() && mr(t, s, o), r.set(a, u));
                                l = (s = t._dirtyLeaves).size, u = (a = t._dirtyElements).size, dr++
                            }
                            t._dirtyLeaves = n, t._dirtyElements = r
                        }(s, e), Cr(e), function(e, t, n, r) {
                            e = e._nodeMap, t = t._nodeMap;
                            let i = [];
                            for (let [n] of r) {
                                let o = t.get(n);
                                void 0 === o || o.isAttached() || (wr(o) && it(o, n, e, t, i, r), e.has(n) || r.delete(n), i.push(n))
                            }
                            for (let e of i) t.delete(e);
                            for (let i of n) void 0 === (r = t.get(i)) || r.isAttached() || (e.has(i) || n.delete(i), t.delete(i))
                        }(n, s, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (s._flushSync = !0);
                    let d = s._selection;
                    if (Fn(d)) {
                        let e = s._nodeMap,
                            t = d.focus.key;
                        void 0 !== e.get(d.anchor.key) && void 0 !== e.get(t) || L(19)
                    } else Kn(d) && 0 === d._nodes.size && (s._selection = null)
                } catch (t) {
                    return t instanceof Error && e._onError(t), e._pendingEditorState = n, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements.clear(), void vr(e)
                } finally {
                    lr = o, ur = a, ar = u, e._updating = c, dr = 0
                }
                0 !== e._dirtyType || function(e, t) {
                    if (t = t.getEditorState()._selection, null !== (e = e._selection)) {
                        if (e.dirty || !e.is(t)) return !0
                    } else if (null !== t) return !0;
                    return !1
                }(s, e) ? s._flushSync ? (s._flushSync = !1, vr(e)) : l && de((() => {
                    vr(e)
                })) : (s._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null))
            }

            function br(e, t, n) {
                e._updating ? e._updates.push([t, n]) : xr(e, t, n)
            }
            class Sr extends un {
                constructor(e) {
                    super(e)
                }
                decorate() {
                    L(47)
                }
                isIsolated() {
                    return !1
                }
                isInline() {
                    return !0
                }
                isKeyboardSelectable() {
                    return !0
                }
            }

            function Ar(e) {
                return e instanceof Sr
            }
            class Or extends un {
                constructor(e) {
                    super(e), this.__last = this.__first = null, this.__indent = this.__format = this.__size = 0, this.__dir = null
                }
                getFormat() {
                    return this.getLatest().__format
                }
                getFormatType() {
                    let e = this.getFormat();
                    return ee[e] || ""
                }
                getIndent() {
                    return this.getLatest().__indent
                }
                getChildren() {
                    let e = [],
                        t = this.getFirstChild();
                    for (; null !== t;) e.push(t), t = t.getNextSibling();
                    return e
                }
                getChildrenKeys() {
                    let e = [],
                        t = this.getFirstChild();
                    for (; null !== t;) e.push(t.__key), t = t.getNextSibling();
                    return e
                }
                getChildrenSize() {
                    return this.getLatest().__size
                }
                isEmpty() {
                    return 0 === this.getChildrenSize()
                }
                isDirty() {
                    let e = _r()._dirtyElements;
                    return null !== e && e.has(this.__key)
                }
                isLastChild() {
                    let e = this.getLatest(),
                        t = this.getParentOrThrow().getLastChild();
                    return null !== t && t.is(e)
                }
                getAllTextNodes() {
                    let e = [],
                        t = this.getFirstChild();
                    for (; null !== t;) {
                        if (wn(t) && e.push(t), wr(t)) {
                            let n = t.getAllTextNodes();
                            e.push(...n)
                        }
                        t = t.getNextSibling()
                    }
                    return e
                }
                getFirstDescendant() {
                    let e = this.getFirstChild();
                    for (; null !== e;) {
                        if (wr(e)) {
                            let t = e.getFirstChild();
                            if (null !== t) {
                                e = t;
                                continue
                            }
                        }
                        break
                    }
                    return e
                }
                getLastDescendant() {
                    let e = this.getLastChild();
                    for (; null !== e;) {
                        if (wr(e)) {
                            let t = e.getLastChild();
                            if (null !== t) {
                                e = t;
                                continue
                            }
                        }
                        break
                    }
                    return e
                }
                getDescendantByIndex(e) {
                    let t = this.getChildren(),
                        n = t.length;
                    return e >= n ? wr(e = t[n - 1]) && e.getLastDescendant() || e || null : wr(e = t[e]) && e.getFirstDescendant() || e || null
                }
                getFirstChild() {
                    let e = this.getLatest().__first;
                    return null === e ? null : xe(e)
                }
                getFirstChildOrThrow() {
                    let e = this.getFirstChild();
                    return null === e && L(45), e
                }
                getLastChild() {
                    let e = this.getLatest().__last;
                    return null === e ? null : xe(e)
                }
                getLastChildOrThrow() {
                    let e = this.getLastChild();
                    return null === e && L(96), e
                }
                getChildAtIndex(e) {
                    var t = this.getChildrenSize();
                    let n;
                    if (e < t / 2) {
                        for (n = this.getFirstChild(), t = 0; null !== n && t <= e;) {
                            if (t === e) return n;
                            n = n.getNextSibling(), t++
                        }
                        return null
                    }
                    for (n = this.getLastChild(), --t; null !== n && t >= e;) {
                        if (t === e) return n;
                        n = n.getPreviousSibling(), t--
                    }
                    return null
                }
                getTextContent() {
                    let e = "",
                        t = this.getChildren(),
                        n = t.length;
                    for (let r = 0; r < n; r++) {
                        let i = t[r];
                        e += i.getTextContent(), wr(i) && r !== n - 1 && !i.isInline() && (e += "\n\n")
                    }
                    return e
                }
                getTextContentSize() {
                    let e = 0,
                        t = this.getChildren(),
                        n = t.length;
                    for (let r = 0; r < n; r++) {
                        let i = t[r];
                        e += i.getTextContentSize(), wr(i) && r !== n - 1 && !i.isInline() && (e += 2)
                    }
                    return e
                }
                getDirection() {
                    return this.getLatest().__dir
                }
                hasFormat(e) {
                    return "" !== e && (e = Q[e], 0 != (this.getFormat() & e))
                }
                select(e, t) {
                    hr();
                    let n = er(),
                        r = e,
                        i = t;
                    var o = this.getChildrenSize();
                    if (!this.canBeEmpty())
                        if (0 === e && 0 === t) {
                            if (wn(e = this.getFirstChild()) || wr(e)) return e.select(0, 0)
                        } else if (!(void 0 !== e && e !== o || void 0 !== t && t !== o) && (wn(e = this.getLastChild()) || wr(e))) return e.select();
                    return void 0 === r && (r = o), void 0 === i && (i = o), o = this.__key, Fn(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : qn(o, r, o, i, "element", "element")
                }
                selectStart() {
                    let e = this.getFirstDescendant();
                    return wr(e) || wn(e) ? e.select(0, 0) : null !== e ? e.selectPrevious() : this.select(0, 0)
                }
                selectEnd() {
                    let e = this.getLastDescendant();
                    return wr(e) || wn(e) ? e.select() : null !== e ? e.selectNext() : this.select()
                }
                clear() {
                    let e = this.getWritable();
                    return this.getChildren().forEach((e => e.remove())), e
                }
                append(...e) {
                    return this.splice(this.getChildrenSize(), 0, e)
                }
                setDirection(e) {
                    let t = this.getWritable();
                    return t.__dir = e, t
                }
                setFormat(e) {
                    return this.getWritable().__format = "" !== e ? Q[e] : 0, this
                }
                setIndent(e) {
                    return this.getWritable().__indent = e, this
                }
                splice(e, t, n) {
                    let r = n.length,
                        i = this.getChildrenSize(),
                        o = this.getWritable(),
                        s = o.__key;
                    var l = [],
                        a = [];
                    let u = this.getChildAtIndex(e + t),
                        c = null,
                        d = i - t + r;
                    if (0 !== e)
                        if (e === i) c = this.getLastChild();
                        else {
                            var g = this.getChildAtIndex(e);
                            null !== g && (c = g.getPreviousSibling())
                        }
                    if (0 < t) {
                        var f = null === c ? this.getFirstChild() : c.getNextSibling();
                        for (g = 0; g < t; g++) {
                            null === f && L(100);
                            var h = f.getNextSibling(),
                                p = f.__key;
                            ve(f = f.getWritable()), a.push(p), f = h
                        }
                    }
                    for (g = c, h = 0; h < r; h++) {
                        p = n[h], null !== g && p.is(g) && (c = g = g.getPreviousSibling()), (f = p.getWritable()).__parent === s && d--, ve(f);
                        let e = p.__key;
                        null === g ? (o.__first = e, f.__prev = null) : ((g = g.getWritable()).__next = e, f.__prev = g.__key), p.__key === s && L(76), f.__parent = s, l.push(e), g = p
                    }
                    if (e + t === i ? null !== g && (g.getWritable().__next = null, o.__last = g.__key) : null !== u && (e = u.getWritable(), null !== g ? (t = g.getWritable(), e.__prev = g.__key, t.__next = u.__key) : e.__prev = null), o.__size = d, a.length && Fn(e = er())) {
                        a = new Set(a), l = new Set(l);
                        let {
                            anchor: t,
                            focus: n
                        } = e;
                        kr(t, a, l) && ir(t, t.getNode(), this, c, u), kr(n, a, l) && ir(n, n.getNode(), this, c, u), 0 !== d || this.canBeEmpty() || Ve(this) || this.remove()
                    }
                    return o
                }
                exportJSON() {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "element",
                        version: 1
                    }
                }
                insertNewAfter() {
                    return null
                }
                canIndent() {
                    return !0
                }
                collapseAtStart() {
                    return !1
                }
                excludeFromCopy() {
                    return !1
                }
                canExtractContents() {
                    return !0
                }
                canReplaceWith() {
                    return !0
                }
                canInsertAfter() {
                    return !0
                }
                canBeEmpty() {
                    return !0
                }
                canInsertTextBefore() {
                    return !0
                }
                canInsertTextAfter() {
                    return !0
                }
                isInline() {
                    return !1
                }
                isShadowRoot() {
                    return !1
                }
                canMergeWith() {
                    return !1
                }
                extractWithChild() {
                    return !1
                }
            }

            function wr(e) {
                return e instanceof Or
            }

            function kr(e, t, n) {
                for (e = e.getNode(); e;) {
                    let r = e.__key;
                    if (t.has(r) && !n.has(r)) return !0;
                    e = e.getParent()
                }
                return !1
            }
            class Rr extends Or {
                static getType() {
                    return "root"
                }
                static clone() {
                    return new Rr
                }
                constructor() {
                    super("root"), this.__cachedText = null
                }
                getTopLevelElementOrThrow() {
                    L(51)
                }
                getTextContent() {
                    let e = this.__cachedText;
                    return !fr() && 0 !== _r()._dirtyType || null === e ? super.getTextContent() : e
                }
                remove() {
                    L(52)
                }
                replace() {
                    L(53)
                }
                insertBefore() {
                    L(54)
                }
                insertAfter() {
                    L(55)
                }
                updateDOM() {
                    return !1
                }
                append(...e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        wr(n) || Ar(n) || L(56)
                    }
                    return super.append(...e)
                }
                static importJSON(e) {
                    let t = we();
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "root",
                        version: 1
                    }
                }
                collapseAtStart() {
                    return !0
                }
            }

            function Dr(e) {
                return e instanceof Rr
            }

            function Mr() {
                return new Ir(new Map([
                    ["root", new Rr]
                ]))
            }

            function $r(e) {
                let t = e.exportJSON();
                t.type !== e.constructor.getType() && L(58);
                let n = t.children;
                if (wr(e)) {
                    Array.isArray(n) || L(59), e = e.getChildren();
                    for (let t = 0; t < e.length; t++) {
                        let r = $r(e[t]);
                        n.push(r)
                    }
                }
                return t
            }
            class Ir {
                constructor(e, t) {
                    this._nodeMap = e, this._selection = t || null, this._readOnly = this._flushSync = !1
                }
                isEmpty() {
                    return 1 === this._nodeMap.size && null === this._selection
                }
                read(e) {
                    return Nr(this, e)
                }
                clone(e) {
                    return (e = new Ir(this._nodeMap, void 0 === e ? this._selection : e))._readOnly = !0, e
                }
                toJSON() {
                    return Nr(this, (() => ({
                        root: $r(we())
                    })))
                }
            }
            class Pr extends Or {
                static getType() {
                    return "paragraph"
                }
                static clone(e) {
                    return new Pr(e.__key)
                }
                createDOM(e) {
                    let t = document.createElement("p");
                    return void 0 !== (e = Le(e.theme, "paragraph")) && t.classList.add(...e), t
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        p: () => ({
                            conversion: Lr,
                            priority: 0
                        })
                    }
                }
                exportDOM(e) {
                    if (({
                            element: e
                        } = super.exportDOM(e)), e && this.isEmpty() && e.append(document.createElement("br")), e) {
                        var t = this.getFormatType();
                        e.style.textAlign = t, (t = this.getDirection()) && (e.dir = t), 0 < (t = this.getIndent()) && (e.style.textIndent = 20 * t + "px")
                    }
                    return {
                        element: e
                    }
                }
                static importJSON(e) {
                    let t = Fr();
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "paragraph",
                        version: 1
                    }
                }
                insertNewAfter(e, t) {
                    e = Fr();
                    let n = this.getDirection();
                    return e.setDirection(n), this.insertAfter(e, t), e
                }
                collapseAtStart() {
                    let e = this.getChildren();
                    if (0 === e.length || wn(e[0]) && "" === e[0].getTextContent().trim()) {
                        if (null !== this.getNextSibling()) return this.selectNext(), this.remove(), !0;
                        if (null !== this.getPreviousSibling()) return this.selectPrevious(), this.remove(), !0
                    }
                    return !1
                }
            }

            function Lr(e) {
                let t = Fr();
                return e.style && (t.setFormat(e.style.textAlign), 0 < (e = parseInt(e.style.textIndent, 10) / 20) && t.setIndent(e)), {
                    node: t
                }
            }

            function Fr() {
                return Ze(new Pr)
            }

            function Br(e, t, n, r) {
                let i = e._keyToDOMMap;
                i.clear(), e._editorState = Mr(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements.clear(), e._normalizedNodes = new Set, e._updateTags = new Set, e._updates = [], e._blockCursorElement = null, null !== (r = e._observer) && (r.disconnect(), e._observer = null), null !== t && (t.textContent = ""), null !== n && (n.textContent = "", i.set("root", n))
            }
            class zr {
                constructor(e, t, n, r, i, o, s) {
                    this._parentEditor = t, this._rootElement = null, this._editorState = e, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = new Map, this._updates = [], this._updating = !1, this._listeners = {
                        decorator: new Set,
                        editable: new Set,
                        mutation: new Map,
                        root: new Set,
                        textcontent: new Set,
                        update: new Set
                    }, this._commands = new Map, this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = new Set, this._dirtyLeaves = new Set, this._dirtyElements = new Map, this._normalizedNodes = new Set, this._updateTags = new Set, this._observer = null, this._key = $e(), this._onError = i, this._htmlConversions = o, this._editable = s, this._headless = null !== t && t._headless, this._blockCursorElement = this._window = null
                }
                isComposing() {
                    return null != this._compositionKey
                }
                registerUpdateListener(e) {
                    let t = this._listeners.update;
                    return t.add(e), () => {
                        t.delete(e)
                    }
                }
                registerEditableListener(e) {
                    let t = this._listeners.editable;
                    return t.add(e), () => {
                        t.delete(e)
                    }
                }
                registerDecoratorListener(e) {
                    let t = this._listeners.decorator;
                    return t.add(e), () => {
                        t.delete(e)
                    }
                }
                registerTextContentListener(e) {
                    let t = this._listeners.textcontent;
                    return t.add(e), () => {
                        t.delete(e)
                    }
                }
                registerRootListener(e) {
                    let t = this._listeners.root;
                    return e(this._rootElement, null), t.add(e), () => {
                        e(null, this._rootElement), t.delete(e)
                    }
                }
                registerCommand(e, t, n) {
                    void 0 === n && L(35);
                    let r = this._commands;
                    r.has(e) || r.set(e, [new Set, new Set, new Set, new Set, new Set]);
                    let i = r.get(e);
                    void 0 === i && L(36);
                    let o = i[n];
                    return o.add(t), () => {
                        o.delete(t), i.every((e => 0 === e.size)) && r.delete(e)
                    }
                }
                registerMutationListener(e, t) {
                    void 0 === this._nodes.get(e.getType()) && L(37);
                    let n = this._listeners.mutation;
                    return n.set(t, e), () => {
                        n.delete(t)
                    }
                }
                registerNodeTransformToKlass(e, t) {
                    return e = e.getType(), void 0 === (e = this._nodes.get(e)) && L(37), e.transforms.add(t), e
                }
                registerNodeTransform(e, t) {
                    var n = this.registerNodeTransformToKlass(e, t);
                    let r = [n];
                    return null != (n = n.replaceWithKlass) && (n = this.registerNodeTransformToKlass(n, t), r.push(n)),
                        function(e, t) {
                            br(e, (() => {
                                var e = pr();
                                if (!e.isEmpty())
                                    if ("root" === t) we().markDirty();
                                    else {
                                        e = e._nodeMap;
                                        for (let [, t] of e) t.markDirty()
                                    }
                            }), null === e._pendingEditorState ? {
                                tag: "history-merge"
                            } : void 0)
                        }(this, e.getType()), () => {
                            r.forEach((e => e.transforms.delete(t)))
                        }
                }
                hasNodes(e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t].getType();
                        if (!this._nodes.has(n)) return !1
                    }
                    return !0
                }
                dispatchCommand(e, t) {
                    return Er(this, e, t)
                }
                getDecorators() {
                    return this._decorators
                }
                getRootElement() {
                    return this._rootElement
                }
                getKey() {
                    return this._key
                }
                setRootElement(e) {
                    let t = this._rootElement;
                    if (e !== t) {
                        let i = Le(this._config.theme, "root");
                        var n = this._pendingEditorState || this._editorState;
                        if (this._rootElement = e, Br(this, t, e, n), null !== t) {
                            if (!this._config.disableEvents) {
                                if (0 !== Gt && (Gt--, 0 === Gt && t.ownerDocument.removeEventListener("selectionchange", ln)), null != (n = t.__lexicalEditor)) {
                                    if (null !== n._parentEditor) {
                                        var r = Me(n);
                                        r = r[r.length - 1]._key, sn.get(r) === n && sn.delete(r)
                                    } else sn.delete(n._key);
                                    t.__lexicalEditor = null
                                }
                                for (n = on(t), r = 0; r < n.length; r++) n[r]();
                                t.__lexicalEventHandles = []
                            }
                            null != i && t.classList.remove(...i)
                        }
                        null !== e ? (n = (n = e.ownerDocument) && n.defaultView || null, (r = e.style).userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = n, this._dirtyType = 2, ue(this), this._updateTags.add("history-merge"), vr(this), this._config.disableEvents || function(e, t) {
                            0 === Gt && e.ownerDocument.addEventListener("selectionchange", ln), Gt++, e.__lexicalEditor = t;
                            let n = on(e);
                            for (let r = 0; r < Kt.length; r++) {
                                let [i, o] = Kt[r], s = "function" == typeof o ? e => {
                                    !0 !== e._lexicalHandled && (e._lexicalHandled = !0, t.isEditable() && o(e, t))
                                } : e => {
                                    if (!0 !== e._lexicalHandled && (e._lexicalHandled = !0, t.isEditable())) switch (i) {
                                        case "cut":
                                            return Er(t, M, e);
                                        case "copy":
                                            return Er(t, D, e);
                                        case "paste":
                                            return Er(t, a, e);
                                        case "dragstart":
                                            return Er(t, w, e);
                                        case "dragover":
                                            return Er(t, k, e);
                                        case "dragend":
                                            return Er(t, R, e);
                                        case "focus":
                                            return Er(t, $, e);
                                        case "blur":
                                            return Er(t, I, e);
                                        case "drop":
                                            return Er(t, O, e)
                                    }
                                };
                                e.addEventListener(i, s), n.push((() => {
                                    e.removeEventListener(i, s)
                                }))
                            }
                        }(e, this), null != i && e.classList.add(...i)) : this._window = null, Tr("root", this, !1, e, t)
                    }
                }
                getElementByKey(e) {
                    return this._keyToDOMMap.get(e) || null
                }
                getEditorState() {
                    return this._editorState
                }
                setEditorState(e, t) {
                    e.isEmpty() && L(38), ae(this);
                    let n = this._pendingEditorState,
                        r = this._updateTags;
                    t = void 0 !== t ? t.tag : null, null === n || n.isEmpty() || (null != t && r.add(t), vr(this)), this._pendingEditorState = e, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, null != t && r.add(t), vr(this)
                }
                parseEditorState(e, t) {
                    e = "string" == typeof e ? JSON.parse(e) : e;
                    let n = Mr(),
                        r = lr,
                        i = ur,
                        o = ar,
                        s = this._dirtyElements,
                        l = this._dirtyLeaves,
                        a = this._cloneNotNeeded,
                        u = this._dirtyType;
                    this._dirtyElements = new Map, this._dirtyLeaves = new Set, this._cloneNotNeeded = new Set, this._dirtyType = 0, lr = n, ur = !1, ar = this;
                    try {
                        yr(e.root, this._nodes), t && t(), n._readOnly = !0
                    } catch (e) {
                        e instanceof Error && this._onError(e)
                    } finally {
                        this._dirtyElements = s, this._dirtyLeaves = l, this._cloneNotNeeded = a, this._dirtyType = u, lr = r, ur = i, ar = o
                    }
                    return n
                }
                update(e, t) {
                    br(this, e, t)
                }
                focus(e, t = {}) {
                    let n = this._rootElement;
                    null !== n && (n.setAttribute("autocapitalize", "off"), br(this, (() => {
                        let e = er(),
                            n = we();
                        null !== e ? e.dirty = !0 : 0 !== n.getChildrenSize() && ("rootStart" === t.defaultSelection ? n.selectStart() : n.selectEnd())
                    }), {
                        onUpdate: () => {
                            n.removeAttribute("autocapitalize"), e && e()
                        },
                        tag: "focus"
                    }), null === this._pendingEditorState && n.removeAttribute("autocapitalize"))
                }
                blur() {
                    var e = this._rootElement;
                    null !== e && e.blur(), null !== (e = et(this._window)) && e.removeAllRanges()
                }
                isEditable() {
                    return this._editable
                }
                setEditable(e) {
                    this._editable !== e && (this._editable = e, Tr("editable", this, !0, e))
                }
                toJSON() {
                    return {
                        editorState: this._editorState.toJSON()
                    }
                }
            }
            class Wr extends Or {
                constructor(e, t) {
                    super(t), this.__colSpan = e, this.__rowSpan = 1
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        colSpan: this.__colSpan,
                        rowSpan: this.__rowSpan
                    }
                }
                getColSpan() {
                    return this.__colSpan
                }
                setColSpan(e) {
                    return this.getWritable().__colSpan = e, this
                }
                getRowSpan() {
                    return this.__rowSpan
                }
                setRowSpan(e) {
                    return this.getWritable().__rowSpan = e, this
                }
            }

            function Kr(e) {
                return e instanceof Wr
            }
            class Ur extends Or {}

            function Yr(e) {
                return e instanceof Ur
            }
            class jr extends Or {}

            function Hr(e) {
                return e instanceof jr
            }
            t.$addUpdateTag = function(e) {
                hr(), _r()._updateTags.add(e)
            }, t.$applyNodeReplacement = Ze, t.$copyNode = Je, t.$createLineBreakNode = gn, t.$createNodeSelection = Xn, t.$createParagraphNode = Fr, t.$createRangeSelection = function() {
                let e = new Dn("root", 0, "element"),
                    t = new Dn("root", 0, "element");
                return new Wn(e, t, 0, "")
            }, t.$createTabNode = Rn, t.$createTextNode = On, t.$getAdjacentNode = ze, t.$getNearestNodeFromDOMNode = Se, t.$getNearestRootOrShadowRoot = Ge, t.$getNodeByKey = xe, t.$getPreviousSelection = tr, t.$getRoot = we, t.$getSelection = er, t.$getTextContent = function() {
                let e = er();
                return null === e ? "" : e.getTextContent()
            }, t.$hasAncestor = je, t.$hasUpdateTag = function(e) {
                return _r()._updateTags.has(e)
            }, t.$insertNodes = function(e, t) {
                let n = er();
                return null === n && (n = we().selectEnd()), n.insertNodes(e, t)
            }, t.$isBlockElementNode = Zn, t.$isDecoratorNode = Ar, t.$isElementNode = wr, t.$isInlineElementOrDecoratorNode = function(e) {
                return wr(e) && e.isInline() || Ar(e) && e.isInline()
            }, t.$isLeafNode = ye, t.$isLineBreakNode = fn, t.$isNodeSelection = Kn, t.$isParagraphNode = function(e) {
                return e instanceof Pr
            }, t.$isRangeSelection = Fn, t.$isRootNode = Dr, t.$isRootOrShadowRoot = Ve, t.$isTabNode = function(e) {
                return e instanceof kn
            }, t.$isTextNode = wn, t.$nodesOfType = function(e) {
                var t = pr();
                let n = t._readOnly,
                    r = e.getType();
                t = t._nodeMap;
                let i = [];
                for (let [, o] of t) o instanceof e && o.__type === r && (n || o.isAttached()) && i.push(o);
                return i
            }, t.$normalizeSelection__EXPERIMENTAL = at, t.$parseSerializedNode = function(e) {
                return yr(e, _r()._nodes)
            }, t.$setCompositionKey = Ee, t.$setSelection = ke, t.$splitNode = tt, t.BLUR_COMMAND = I, t.CAN_REDO_COMMAND = {}, t.CAN_UNDO_COMMAND = {}, t.CLEAR_EDITOR_COMMAND = {}, t.CLEAR_HISTORY_COMMAND = {}, t.CLICK_COMMAND = r, t.COMMAND_PRIORITY_CRITICAL = 4, t.COMMAND_PRIORITY_EDITOR = 0, t.COMMAND_PRIORITY_HIGH = 3, t.COMMAND_PRIORITY_LOW = 1, t.COMMAND_PRIORITY_NORMAL = 2, t.CONTROLLED_TEXT_INSERTION_COMMAND = l, t.COPY_COMMAND = D, t.CUT_COMMAND = M, t.DELETE_CHARACTER_COMMAND = i, t.DELETE_LINE_COMMAND = d, t.DELETE_WORD_COMMAND = c, t.DEPRECATED_$computeGridMap = sr, t.DEPRECATED_$createGridSelection = function() {
                let e = new Dn("root", 0, "element"),
                    t = new Dn("root", 0, "element");
                return new Bn("root", e, t)
            }, t.DEPRECATED_$getNodeTriplet = function(e) {
                e instanceof Wr || (e instanceof un ? Kr(e = nt(e, Kr)) || L(114) : Kr(e = nt(e.getNode(), Kr)) || L(114));
                let t = e.getParent();
                Hr(t) || L(115);
                let n = t.getParent();
                return Yr(n) || L(116), [e, t, n]
            }, t.DEPRECATED_$isGridCellNode = Kr, t.DEPRECATED_$isGridNode = Yr, t.DEPRECATED_$isGridRowNode = Hr, t.DEPRECATED_$isGridSelection = zn, t.DEPRECATED_GridCellNode = Wr, t.DEPRECATED_GridNode = Ur, t.DEPRECATED_GridRowNode = jr, t.DRAGEND_COMMAND = R, t.DRAGOVER_COMMAND = k, t.DRAGSTART_COMMAND = w, t.DROP_COMMAND = O, t.DecoratorNode = Sr, t.ElementNode = Or, t.FOCUS_COMMAND = $, t.FORMAT_ELEMENT_COMMAND = {}, t.FORMAT_TEXT_COMMAND = g, t.INDENT_CONTENT_COMMAND = {}, t.INSERT_LINE_BREAK_COMMAND = o, t.INSERT_PARAGRAPH_COMMAND = s, t.INSERT_TAB_COMMAND = {}, t.KEY_ARROW_DOWN_COMMAND = T, t.KEY_ARROW_LEFT_COMMAND = y, t.KEY_ARROW_RIGHT_COMMAND = _, t.KEY_ARROW_UP_COMMAND = v, t.KEY_BACKSPACE_COMMAND = x, t.KEY_DELETE_COMMAND = S, t.KEY_DOWN_COMMAND = p, t.KEY_ENTER_COMMAND = E, t.KEY_ESCAPE_COMMAND = b, t.KEY_MODIFIER_COMMAND = P, t.KEY_SPACE_COMMAND = C, t.KEY_TAB_COMMAND = A, t.LineBreakNode = cn, t.MOVE_TO_END = m, t.MOVE_TO_START = N, t.OUTDENT_CONTENT_COMMAND = {}, t.PASTE_COMMAND = a, t.ParagraphNode = Pr, t.REDO_COMMAND = h, t.REMOVE_TEXT_COMMAND = u, t.RootNode = Rr, t.SELECTION_CHANGE_COMMAND = n, t.TabNode = kn, t.TextNode = Nn, t.UNDO_COMMAND = f, t.createCommand = function() {
                return {}
            }, t.createEditor = function(e) {
                var t = e || {},
                    n = ar,
                    r = t.theme || {};
                let i = void 0 === e ? n : t.parentEditor || null,
                    o = t.disableEvents || !1,
                    s = Mr(),
                    l = t.namespace || (null !== i ? i._config.namespace : $e()),
                    a = t.editorState,
                    u = [Rr, Nn, cn, kn, Pr, ...t.nodes || []],
                    c = t.onError;
                if (t = void 0 === t.editable || t.editable, void 0 === e && null !== n) e = n._nodes;
                else
                    for (e = new Map, n = 0; n < u.length; n++) {
                        let t = u[n],
                            r = null;
                        var d = null;
                        "function" != typeof t && (t = (d = t).replace, r = d.with, d = d.withKlass ? d.withKlass : null);
                        let i = t.getType(),
                            o = t.transform(),
                            s = new Set;
                        null !== o && s.add(o), e.set(i, {
                            klass: t,
                            replace: r,
                            replaceWithKlass: d,
                            transforms: s
                        })
                    }
                return r = new zr(s, i, e, {
                    disableEvents: o,
                    namespace: l,
                    theme: r
                }, c || console.error, function(e) {
                    let t = new Map,
                        n = new Set;
                    return e.forEach((e => {
                        if (null != (e = null != e.klass.importDOM ? e.klass.importDOM.bind(e.klass) : null) && !n.has(e)) {
                            n.add(e);
                            var r = e();
                            null !== r && Object.keys(r).forEach((e => {
                                let n = t.get(e);
                                void 0 === n && (n = [], t.set(e, n)), n.push(r[e])
                            }))
                        }
                    })), t
                }(e), t), void 0 !== a && (r._pendingEditorState = a, r._dirtyType = 2), r
            }, t.getNearestEditorFromDOMNode = he, t.isSelectionCapturedInDecoratorInput = ge, t.isSelectionWithinEditor = fe
        },
        804279: () => {
            Prism.languages.c = Prism.languages.extend("clike", {
                comment: {
                    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                    greedy: !0
                },
                string: {
                    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                    lookbehind: !0
                },
                keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
            }), Prism.languages.insertBefore("c", "string", {
                char: {
                    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                    greedy: !0
                }
            }), Prism.languages.insertBefore("c", "string", {
                macro: {
                    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property",
                    inside: {
                        string: [{
                            pattern: /^(#\s*include\s*)<[^>]+>/,
                            lookbehind: !0
                        }, Prism.languages.c.string],
                        char: Prism.languages.c.char,
                        comment: Prism.languages.c.comment,
                        "macro-name": [{
                            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                            lookbehind: !0
                        }, {
                            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                            lookbehind: !0,
                            alias: "function"
                        }],
                        directive: {
                            pattern: /^(#\s*)[a-z]+/,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        "directive-hash": /^#/,
                        punctuation: /##|\\(?=[\r\n])/,
                        expression: {
                            pattern: /\S[\s\S]*/,
                            inside: Prism.languages.c
                        }
                    }
                }
            }), Prism.languages.insertBefore("c", "function", {
                constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
            }), delete Prism.languages.c.boolean
        },
        735433: () => {
            Prism.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }
        },
        402731: () => {
            ! function(e) {
                var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                    n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, (function() {
                        return t.source
                    }));
                e.languages.cpp = e.languages.extend("c", {
                    "class-name": [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }))),
                        lookbehind: !0
                    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                    keyword: t,
                    number: {
                        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0
                    },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/
                }), e.languages.insertBefore("cpp", "string", {
                    module: {
                        pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, (function() {
                            return n
                        })) + ")"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: /^[<"][\s\S]+/,
                            operator: /:/,
                            punctuation: /\./
                        }
                    },
                    "raw-string": {
                        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                        alias: "string",
                        greedy: !0
                    }
                }), e.languages.insertBefore("cpp", "keyword", {
                    "generic-function": {
                        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: e.languages.cpp
                            }
                        }
                    }
                }), e.languages.insertBefore("cpp", "operator", {
                    "double-colon": {
                        pattern: /::/,
                        alias: "punctuation"
                    }
                }), e.languages.insertBefore("cpp", "class-name", {
                    "base-clause": {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.extend("cpp", {})
                    }
                }), e.languages.insertBefore("inside", "double-colon", {
                    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
                }, e.languages.cpp["base-clause"])
            }(Prism)
        },
        115251: () => {
            ! function(e) {
                var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + t.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0
                    },
                    important: /!important\b/i,
                    function: {
                        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                        lookbehind: !0
                    },
                    punctuation: /[(){};:,]/
                }, e.languages.css.atrule.inside.rest = e.languages.css;
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
            }(Prism)
        },
        652503: () => {
            ! function(e) {
                var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
                    n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
                    r = {
                        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
                        lookbehind: !0,
                        inside: {
                            namespace: {
                                pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            punctuation: /\./
                        }
                    };
                e.languages.java = e.languages.extend("clike", {
                    string: {
                        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    "class-name": [r, {
                        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
                        lookbehind: !0,
                        inside: r.inside
                    }, {
                        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
                        lookbehind: !0,
                        inside: r.inside
                    }],
                    keyword: t,
                    function: [e.languages.clike.function, {
                        pattern: /(::\s*)[a-z_]\w*/,
                        lookbehind: !0
                    }],
                    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                    operator: {
                        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                        lookbehind: !0
                    }
                }), e.languages.insertBefore("java", "string", {
                    "triple-quoted-string": {
                        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                        greedy: !0,
                        alias: "string"
                    },
                    char: {
                        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
                        greedy: !0
                    }
                }), e.languages.insertBefore("java", "class-name", {
                    annotation: {
                        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    generics: {
                        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                        inside: {
                            "class-name": r,
                            keyword: t,
                            punctuation: /[<>(),.:]/,
                            operator: /[?&|]/
                        }
                    },
                    import: [{
                        pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
                        lookbehind: !0,
                        inside: {
                            namespace: r.inside.namespace,
                            punctuation: /\./,
                            operator: /\*/,
                            "class-name": /\w+/
                        }
                    }, {
                        pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
                        lookbehind: !0,
                        alias: "static",
                        inside: {
                            namespace: r.inside.namespace,
                            static: /\b\w+$/,
                            punctuation: /\./,
                            operator: /\*/,
                            "class-name": /\w+/
                        }
                    }],
                    namespace: {
                        pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }))),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }
                })
            }(Prism)
        },
        939980: () => {
            Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [Prism.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                    lookbehind: !0
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: Prism.languages.regex
                        },
                        "regex-delimiter": /^\/|\/$/,
                        "regex-flags": /^[a-z]+$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), Prism.languages.insertBefore("javascript", "string", {
                hashbang: {
                    pattern: /^#!.*/,
                    greedy: !0,
                    alias: "comment"
                },
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: Prism.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "string-property": {
                    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property"
                }
            }), Prism.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                    lookbehind: !0,
                    alias: "property"
                }
            }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript
        },
        424064: () => {
            ! function(e) {
                var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

                function n(e) {
                    return e = e.replace(/<inner>/g, (function() {
                        return t
                    })), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                }
                var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                    i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, (function() {
                        return r
                    })),
                    o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
                    "front-matter-block": {
                        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^---|---$/,
                            "front-matter": {
                                pattern: /\S+(?:\s+\S+)*/,
                                alias: ["yaml", "language-yaml"],
                                inside: e.languages.yaml
                            }
                        }
                    },
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: "punctuation"
                    },
                    table: {
                        pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
                        inside: {
                            "table-data-rows": {
                                pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
                                lookbehind: !0,
                                inside: {
                                    "table-data": {
                                        pattern: RegExp(r),
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            },
                            "table-line": {
                                pattern: RegExp("^(" + i + ")" + o + "$"),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\||:?-{3,}:?/
                                }
                            },
                            "table-header-row": {
                                pattern: RegExp("^" + i + "$"),
                                inside: {
                                    "table-header": {
                                        pattern: RegExp(r),
                                        alias: "important",
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            }
                        }
                    },
                    code: [{
                        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                        lookbehind: !0,
                        alias: "keyword"
                    }, {
                        pattern: /^```[\s\S]*?^```$/m,
                        greedy: !0,
                        inside: {
                            "code-block": {
                                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                lookbehind: !0
                            },
                            "code-language": {
                                pattern: /^(```).+/,
                                lookbehind: !0
                            },
                            punctuation: /```/
                        }
                    }],
                    title: [{
                        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                        alias: "important",
                        inside: {
                            punctuation: /==+$|--+$/
                        }
                    }, {
                        pattern: /(^\s*)#.+/m,
                        lookbehind: !0,
                        alias: "important",
                        inside: {
                            punctuation: /^#+|#+$/
                        }
                    }],
                    hr: {
                        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    list: {
                        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "url-reference": {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {
                                pattern: /^(!?\[)[^\]]+/,
                                lookbehind: !0
                            },
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: "url"
                    },
                    bold: {
                        pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^..)[\s\S]+(?=..$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /\*\*|__/
                        }
                    },
                    italic: {
                        pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^.)[\s\S]+(?=.$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /[*_]/
                        }
                    },
                    strike: {
                        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /~~?/
                        }
                    },
                    "code-snippet": {
                        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: ["code", "keyword"]
                    },
                    url: {
                        pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            operator: /^!/,
                            content: {
                                pattern: /(^\[)[^\]]+(?=\])/,
                                lookbehind: !0,
                                inside: {}
                            },
                            variable: {
                                pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                                lookbehind: !0
                            },
                            url: {
                                pattern: /(^\]\()[^\s)]+/,
                                lookbehind: !0
                            },
                            string: {
                                pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                                lookbehind: !0
                            }
                        }
                    }
                }), ["url", "bold", "italic", "strike"].forEach((function(t) {
                    ["url", "bold", "italic", "strike", "code-snippet"].forEach((function(n) {
                        t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                    }))
                })), e.hooks.add("after-tokenize", (function(e) {
                    "markdown" !== e.language && "md" !== e.language || function e(t) {
                        if (t && "string" != typeof t)
                            for (var n = 0, r = t.length; n < r; n++) {
                                var i = t[n];
                                if ("code" === i.type) {
                                    var o = i.content[1],
                                        s = i.content[3];
                                    if (o && s && "code-language" === o.type && "code-block" === s.type && "string" == typeof o.content) {
                                        var l = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                            a = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                                        s.alias ? "string" == typeof s.alias ? s.alias = [s.alias, a] : s.alias.push(a) : s.alias = [a]
                                    }
                                } else e(i.content)
                            }
                    }(e.tokens)
                })), e.hooks.add("wrap", (function(t) {
                    if ("code-block" === t.type) {
                        for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
                            var o = t.classes[r],
                                u = /language-(.+)/.exec(o);
                            if (u) {
                                n = u[1];
                                break
                            }
                        }
                        var c, d = e.languages[n];
                        if (d) t.content = e.highlight((c = t.content, c.replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (function(e, t) {
                            var n;
                            if ("#" === (t = t.toLowerCase())[0]) return n = "x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1)), a(n);
                            var r = l[t];
                            return r || e
                        }))), d, n);
                        else if (n && "none" !== n && e.plugins.autoloader) {
                            var g = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                            t.attributes.id = g, e.plugins.autoloader.loadLanguages(n, (function() {
                                var t = document.getElementById(g);
                                t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                            }))
                        }
                    }
                }));
                var s = RegExp(e.languages.markup.tag.pattern.source, "gi"),
                    l = {
                        amp: "&",
                        lt: "<",
                        gt: ">",
                        quot: '"'
                    },
                    a = String.fromCodePoint || String.fromCharCode;
                e.languages.md = e.languages.markdown
            }(Prism)
        },
        524335: () => {
            Prism.languages.markup = {
                comment: {
                    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                    greedy: !0
                },
                prolog: {
                    pattern: /<\?[\s\S]+?\?>/,
                    greedy: !0
                },
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null
                        },
                        string: {
                            pattern: /"[^"]*"|'[^']*'/,
                            greedy: !0
                        },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/i,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    greedy: !0
                },
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, /"|'/]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: [{
                    pattern: /&[\da-z]{1,8};/i,
                    alias: "named-entity"
                }, /&#x?[\da-f]{1,8};/i]
            }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function(e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            })), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                value: function(e, t) {
                    var n = {};
                    n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: Prism.languages[t]
                    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var r = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: n
                        }
                    };
                    r["language-" + t] = {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages[t]
                    };
                    var i = {};
                    i[e] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                            return e
                        })), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r
                    }, Prism.languages.insertBefore("markup", "cdata", i)
                }
            }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
                value: function(e, t) {
                    Prism.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                        lookbehind: !0,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: !0,
                                        alias: [t, "language-" + t],
                                        inside: Prism.languages[t]
                                    },
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            }
                        }
                    })
                }
            }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml
        },
        11426: () => {
            Prism.languages.objectivec = Prism.languages.extend("c", {
                string: {
                    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    greedy: !0
                },
                keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
            }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec
        },
        180366: () => {
            Prism.languages.python = {
                comment: {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0,
                    greedy: !0
                },
                "string-interpolation": {
                    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "format-spec": {
                                    pattern: /(:)[^:(){}]+(?=\}$)/,
                                    lookbehind: !0
                                },
                                "conversion-option": {
                                    pattern: /![sra](?=[:}]$)/,
                                    alias: "punctuation"
                                },
                                rest: null
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "triple-quoted-string": {
                    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                    greedy: !0,
                    alias: "string"
                },
                string: {
                    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                    greedy: !0
                },
                function: {
                    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                    lookbehind: !0
                },
                "class-name": {
                    pattern: /(\bclass\s+)\w+/i,
                    lookbehind: !0
                },
                decorator: {
                    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                    lookbehind: !0,
                    alias: ["annotation", "punctuation"],
                    inside: {
                        punctuation: /\./
                    }
                },
                keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                boolean: /\b(?:False|None|True)\b/,
                number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[{}[\];(),.:]/
            }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python
        },
        470767: () => {
            ! function(e) {
                for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) t = t.replace(/<self>/g, (function() {
                    return t
                }));
                t = t.replace(/<self>/g, (function() {
                    return /[^\s\S]/.source
                })), e.languages.rust = {
                    comment: [{
                        pattern: RegExp(/(^|[^\\])/.source + t),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                        greedy: !0
                    },
                    char: {
                        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                        greedy: !0
                    },
                    attribute: {
                        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                        greedy: !0,
                        alias: "attr-name",
                        inside: {
                            string: null
                        }
                    },
                    "closure-params": {
                        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "closure-punctuation": {
                                pattern: /^\||\|$/,
                                alias: "punctuation"
                            },
                            rest: null
                        }
                    },
                    "lifetime-annotation": {
                        pattern: /'\w+/,
                        alias: "symbol"
                    },
                    "fragment-specifier": {
                        pattern: /(\$\w+:)[a-z]+/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    variable: /\$\w+/,
                    "function-definition": {
                        pattern: /(\bfn\s+)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    "type-definition": {
                        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    "module-declaration": [{
                        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                        lookbehind: !0,
                        alias: "namespace"
                    }, {
                        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                        lookbehind: !0,
                        alias: "namespace",
                        inside: {
                            punctuation: /::/
                        }
                    }],
                    keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
                    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                    macro: {
                        pattern: /\b\w+!/,
                        alias: "property"
                    },
                    constant: /\b[A-Z_][A-Z_\d]+\b/,
                    "class-name": /\b[A-Z]\w*\b/,
                    namespace: {
                        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                        inside: {
                            punctuation: /::/
                        }
                    },
                    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
                    boolean: /\b(?:false|true)\b/,
                    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
                }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
            }(Prism)
        },
        335266: () => {
            Prism.languages.sql = {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                    lookbehind: !0
                },
                variable: [{
                    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                    greedy: !0
                }, /@[\w.$]+/],
                string: {
                    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                    greedy: !0,
                    lookbehind: !0
                },
                identifier: {
                    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                    greedy: !0,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^`|`$/
                    }
                },
                function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                punctuation: /[;[\]()`,.]/
            }
        },
        590874: () => {
            Prism.languages.swift = {
                comment: {
                    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                    lookbehind: !0,
                    greedy: !0
                },
                "string-literal": [{
                    pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                            lookbehind: !0,
                            inside: null
                        },
                        "interpolation-punctuation": {
                            pattern: /^\)|\\\($/,
                            alias: "punctuation"
                        },
                        punctuation: /\\(?=[\r\n])/,
                        string: /[\s\S]+/
                    }
                }, {
                    pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                            lookbehind: !0,
                            inside: null
                        },
                        "interpolation-punctuation": {
                            pattern: /^\)|\\#+\($/,
                            alias: "punctuation"
                        },
                        string: /[\s\S]+/
                    }
                }],
                directive: {
                    pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ \t]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
                    alias: "property",
                    inside: {
                        "directive-name": /^#\w+/,
                        boolean: /\b(?:false|true)\b/,
                        number: /\b\d+(?:\.\d+)*\b/,
                        operator: /!|&&|\|\||[<>]=?/,
                        punctuation: /[(),]/
                    }
                },
                literal: {
                    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                    alias: "constant"
                },
                "other-directive": {
                    pattern: /#\w+\b/,
                    alias: "property"
                },
                attribute: {
                    pattern: /@\w+/,
                    alias: "atrule"
                },
                "function-definition": {
                    pattern: /(\bfunc\s+)\w+/,
                    lookbehind: !0,
                    alias: "function"
                },
                label: {
                    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                    lookbehind: !0,
                    alias: "important"
                },
                keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
                boolean: /\b(?:false|true)\b/,
                nil: {
                    pattern: /\bnil\b/,
                    alias: "constant"
                },
                "short-argument": /\$\d+\b/,
                omit: {
                    pattern: /\b_\b/,
                    alias: "keyword"
                },
                number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
                "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
                operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
                punctuation: /[{}[\]();,.:\\]/
            }, Prism.languages.swift["string-literal"].forEach((function(e) {
                e.inside.interpolation.inside = Prism.languages.swift
            }))
        },
        496836: () => {
            ! function(e) {
                e.languages.typescript = e.languages.extend("javascript", {
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    },
                    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
                }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
                var t = e.languages.extend("typescript", {});
                delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
                    decorator: {
                        pattern: /@[$\w\xA0-\uFFFF]+/,
                        inside: {
                            at: {
                                pattern: /^@/,
                                alias: "operator"
                            },
                            function: /^[\s\S]+/
                        }
                    },
                    "generic-function": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                        greedy: !0,
                        inside: {
                            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: t
                            }
                        }
                    }
                }), e.languages.ts = e.languages.typescript
            }(Prism)
        },
        915660: (e, t, n) => {
            var r = function(e) {
                var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                    n = 0,
                    r = {},
                    i = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(t) {
                                return t instanceof o ? new o(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function(e) {
                                return Object.prototype.toString.call(e).slice(8, -1)
                            },
                            objId: function(e) {
                                return e.__id || Object.defineProperty(e, "__id", {
                                    value: ++n
                                }), e.__id
                            },
                            clone: function e(t, n) {
                                var r, o;
                                switch (n = n || {}, i.util.type(t)) {
                                    case "Object":
                                        if (o = i.util.objId(t), n[o]) return n[o];
                                        for (var s in r = {}, n[o] = r, t) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
                                        return r;
                                    case "Array":
                                        return o = i.util.objId(t), n[o] ? n[o] : (r = [], n[o] = r, t.forEach((function(t, i) {
                                            r[i] = e(t, n)
                                        })), r);
                                    default:
                                        return t
                                }
                            },
                            getLanguage: function(e) {
                                for (; e;) {
                                    var n = t.exec(e.className);
                                    if (n) return n[1].toLowerCase();
                                    e = e.parentElement
                                }
                                return "none"
                            },
                            setLanguage: function(e, n) {
                                e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                            },
                            currentScript: function() {
                                if ("undefined" == typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error
                                } catch (r) {
                                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                                    if (e) {
                                        var t = document.getElementsByTagName("script");
                                        for (var n in t)
                                            if (t[n].src == e) return t[n]
                                    }
                                    return null
                                }
                            },
                            isActive: function(e, t, n) {
                                for (var r = "no-" + t; e;) {
                                    var i = e.classList;
                                    if (i.contains(t)) return !0;
                                    if (i.contains(r)) return !1;
                                    e = e.parentElement
                                }
                                return !!n
                            }
                        },
                        languages: {
                            plain: r,
                            plaintext: r,
                            text: r,
                            txt: r,
                            extend: function(e, t) {
                                var n = i.util.clone(i.languages[e]);
                                for (var r in t) n[r] = t[r];
                                return n
                            },
                            insertBefore: function(e, t, n, r) {
                                var o = (r = r || i.languages)[e],
                                    s = {};
                                for (var l in o)
                                    if (o.hasOwnProperty(l)) {
                                        if (l == t)
                                            for (var a in n) n.hasOwnProperty(a) && (s[a] = n[a]);
                                        n.hasOwnProperty(l) || (s[l] = o[l])
                                    }
                                var u = r[e];
                                return r[e] = s, i.languages.DFS(i.languages, (function(t, n) {
                                    n === u && t != e && (this[t] = s)
                                })), s
                            },
                            DFS: function e(t, n, r, o) {
                                o = o || {};
                                var s = i.util.objId;
                                for (var l in t)
                                    if (t.hasOwnProperty(l)) {
                                        n.call(t, l, t[l], r || l);
                                        var a = t[l],
                                            u = i.util.type(a);
                                        "Object" !== u || o[s(a)] ? "Array" !== u || o[s(a)] || (o[s(a)] = !0, e(a, n, l, o)) : (o[s(a)] = !0, e(a, n, null, o))
                                    }
                            }
                        },
                        plugins: {},
                        highlightAll: function(e, t) {
                            i.highlightAllUnder(document, e, t)
                        },
                        highlightAllUnder: function(e, t, n) {
                            var r = {
                                callback: n,
                                container: e,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
                            for (var o, s = 0; o = r.elements[s++];) i.highlightElement(o, !0 === t, r.callback)
                        },
                        highlightElement: function(t, n, r) {
                            var o = i.util.getLanguage(t),
                                s = i.languages[o];
                            i.util.setLanguage(t, o);
                            var l = t.parentElement;
                            l && "pre" === l.nodeName.toLowerCase() && i.util.setLanguage(l, o);
                            var a = {
                                element: t,
                                language: o,
                                grammar: s,
                                code: t.textContent
                            };

                            function u(e) {
                                a.highlightedCode = e, i.hooks.run("before-insert", a), a.element.innerHTML = a.highlightedCode, i.hooks.run("after-highlight", a), i.hooks.run("complete", a), r && r.call(a.element)
                            }
                            if (i.hooks.run("before-sanity-check", a), (l = a.element.parentElement) && "pre" === l.nodeName.toLowerCase() && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), !a.code) return i.hooks.run("complete", a), void(r && r.call(a.element));
                            if (i.hooks.run("before-highlight", a), a.grammar)
                                if (n && e.Worker) {
                                    var c = new Worker(i.filename);
                                    c.onmessage = function(e) {
                                        u(e.data)
                                    }, c.postMessage(JSON.stringify({
                                        language: a.language,
                                        code: a.code,
                                        immediateClose: !0
                                    }))
                                } else u(i.highlight(a.code, a.grammar, a.language));
                            else u(i.util.encode(a.code))
                        },
                        highlight: function(e, t, n) {
                            var r = {
                                code: e,
                                grammar: t,
                                language: n
                            };
                            if (i.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                            return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), o.stringify(i.util.encode(r.tokens), r.language)
                        },
                        tokenize: function(e, t) {
                            var n = t.rest;
                            if (n) {
                                for (var r in n) t[r] = n[r];
                                delete t.rest
                            }
                            var i = new a;
                            return u(i, i.head, e), l(e, i, t, i.head, 0),
                                function(e) {
                                    var t = [],
                                        n = e.head.next;
                                    for (; n !== e.tail;) t.push(n.value), n = n.next;
                                    return t
                                }(i)
                        },
                        hooks: {
                            all: {},
                            add: function(e, t) {
                                var n = i.hooks.all;
                                n[e] = n[e] || [], n[e].push(t)
                            },
                            run: function(e, t) {
                                var n = i.hooks.all[e];
                                if (n && n.length)
                                    for (var r, o = 0; r = n[o++];) r(t)
                            }
                        },
                        Token: o
                    };

                function o(e, t, n, r) {
                    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                }

                function s(e, t, n, r) {
                    e.lastIndex = t;
                    var i = e.exec(n);
                    if (i && r && i[1]) {
                        var o = i[1].length;
                        i.index += o, i[0] = i[0].slice(o)
                    }
                    return i
                }

                function l(e, t, n, r, a, d) {
                    for (var g in n)
                        if (n.hasOwnProperty(g) && n[g]) {
                            var f = n[g];
                            f = Array.isArray(f) ? f : [f];
                            for (var h = 0; h < f.length; ++h) {
                                if (d && d.cause == g + "," + h) return;
                                var p = f[h],
                                    _ = p.inside,
                                    m = !!p.lookbehind,
                                    y = !!p.greedy,
                                    N = p.alias;
                                if (y && !p.pattern.global) {
                                    var v = p.pattern.toString().match(/[imsuy]*$/)[0];
                                    p.pattern = RegExp(p.pattern.source, v + "g")
                                }
                                for (var T = p.pattern || p, E = r.next, C = a; E !== t.tail && !(d && C >= d.reach); C += E.value.length, E = E.next) {
                                    var x = E.value;
                                    if (t.length > e.length) return;
                                    if (!(x instanceof o)) {
                                        var b, S = 1;
                                        if (y) {
                                            if (!(b = s(T, C, e, m)) || b.index >= e.length) break;
                                            var A = b.index,
                                                O = b.index + b[0].length,
                                                w = C;
                                            for (w += E.value.length; A >= w;) w += (E = E.next).value.length;
                                            if (C = w -= E.value.length, E.value instanceof o) continue;
                                            for (var k = E; k !== t.tail && (w < O || "string" == typeof k.value); k = k.next) S++, w += k.value.length;
                                            S--, x = e.slice(C, w), b.index -= C
                                        } else if (!(b = s(T, 0, x, m))) continue;
                                        A = b.index;
                                        var R = b[0],
                                            D = x.slice(0, A),
                                            M = x.slice(A + R.length),
                                            $ = C + x.length;
                                        d && $ > d.reach && (d.reach = $);
                                        var I = E.prev;
                                        if (D && (I = u(t, I, D), C += D.length), c(t, I, S), E = u(t, I, new o(g, _ ? i.tokenize(R, _) : R, N, R)), M && u(t, E, M), S > 1) {
                                            var P = {
                                                cause: g + "," + h,
                                                reach: $
                                            };
                                            l(e, t, n, E.prev, C, P), d && P.reach > d.reach && (d.reach = P.reach)
                                        }
                                    }
                                }
                            }
                        }
                }

                function a() {
                    var e = {
                            value: null,
                            prev: null,
                            next: null
                        },
                        t = {
                            value: null,
                            prev: e,
                            next: null
                        };
                    e.next = t, this.head = e, this.tail = t, this.length = 0
                }

                function u(e, t, n) {
                    var r = t.next,
                        i = {
                            value: n,
                            prev: t,
                            next: r
                        };
                    return t.next = i, r.prev = i, e.length++, i
                }

                function c(e, t, n) {
                    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                    t.next = r, r.prev = t, e.length -= i
                }
                if (e.Prism = i, o.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var r = "";
                            return t.forEach((function(t) {
                                r += e(t, n)
                            })), r
                        }
                        var o = {
                                type: t.type,
                                content: e(t.content, n),
                                tag: "span",
                                classes: ["token", t.type],
                                attributes: {},
                                language: n
                            },
                            s = t.alias;
                        s && (Array.isArray(s) ? Array.prototype.push.apply(o.classes, s) : o.classes.push(s)), i.hooks.run("wrap", o);
                        var l = "";
                        for (var a in o.attributes) l += " " + a + '="' + (o.attributes[a] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + l + ">" + o.content + "</" + o.tag + ">"
                    }, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
                    var n = JSON.parse(t.data),
                        r = n.language,
                        o = n.code,
                        s = n.immediateClose;
                    e.postMessage(i.highlight(o, i.languages[r], r)), s && e.close()
                }), !1), i) : i;
                var d = i.util.currentScript();

                function g() {
                    i.manual || i.highlightAll()
                }
                if (d && (i.filename = d.src, d.hasAttribute("data-manual") && (i.manual = !0)), !i.manual) {
                    var f = document.readyState;
                    "loading" === f || "interactive" === f && d && d.defer ? document.addEventListener("DOMContentLoaded", g) : window.requestAnimationFrame ? window.requestAnimationFrame(g) : window.setTimeout(g, 16)
                }
                return i
            }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            /**
             * Prism: Lightweight, robust, elegant syntax highlighting
             *
             * @license MIT <https://opensource.org/licenses/MIT>
             * @author Lea Verou <https://lea.verou.me>
             * @namespace
             * @public
             */
            e.exports && (e.exports = r), void 0 !== n.g && (n.g.Prism = r), r.languages.markup = {
                    comment: {
                        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                        greedy: !0
                    },
                    prolog: {
                        pattern: /<\?[\s\S]+?\?>/,
                        greedy: !0
                    },
                    doctype: {
                        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: !0,
                        inside: {
                            "internal-subset": {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: null
                            },
                            string: {
                                pattern: /"[^"]*"|'[^']*'/,
                                greedy: !0
                            },
                            punctuation: /^<!|>$|[[\]]/,
                            "doctype-tag": /^DOCTYPE/i,
                            name: /[^\s<>'"]+/
                        }
                    },
                    cdata: {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        greedy: !0
                    },
                    tag: {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: !0,
                        inside: {
                            tag: {
                                pattern: /^<\/?[^\s>\/]+/,
                                inside: {
                                    punctuation: /^<\/?/,
                                    namespace: /^[^\s>\/:]+:/
                                }
                            },
                            "special-attr": [],
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            },
                            punctuation: /\/?>/,
                            "attr-name": {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    namespace: /^[^\s>\/:]+:/
                                }
                            }
                        }
                    },
                    entity: [{
                        pattern: /&[\da-z]{1,8};/i,
                        alias: "named-entity"
                    }, /&#x?[\da-f]{1,8};/i]
                }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", (function(e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                })), Object.defineProperty(r.languages.markup.tag, "addInlined", {
                    value: function(e, t) {
                        var n = {};
                        n["language-" + t] = {
                            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                            lookbehind: !0,
                            inside: r.languages[t]
                        }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                        var i = {
                            "included-cdata": {
                                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                inside: n
                            }
                        };
                        i["language-" + t] = {
                            pattern: /[\s\S]+/,
                            inside: r.languages[t]
                        };
                        var o = {};
                        o[e] = {
                            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                                return e
                            })), "i"),
                            lookbehind: !0,
                            greedy: !0,
                            inside: i
                        }, r.languages.insertBefore("markup", "cdata", o)
                    }
                }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
                    value: function(e, t) {
                        r.languages.markup.tag.inside["special-attr"].push({
                            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                            lookbehind: !0,
                            inside: {
                                "attr-name": /^[^\s=]+/,
                                "attr-value": {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        value: {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: !0,
                                            alias: [t, "language-" + t],
                                            inside: r.languages[t]
                                        },
                                        punctuation: [{
                                            pattern: /^=/,
                                            alias: "attr-equals"
                                        }, /"|'/]
                                    }
                                }
                            }
                        })
                    }
                }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml,
                function(e) {
                    var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                    e.languages.css = {
                        comment: /\/\*[\s\S]*?\*\//,
                        atrule: {
                            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                            inside: {
                                rule: /^@[\w-]+/,
                                "selector-function-argument": {
                                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                    lookbehind: !0,
                                    alias: "selector"
                                },
                                keyword: {
                                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                    lookbehind: !0
                                }
                            }
                        },
                        url: {
                            pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                            greedy: !0,
                            inside: {
                                function: /^url/i,
                                punctuation: /^\(|\)$/,
                                string: {
                                    pattern: RegExp("^" + t.source + "$"),
                                    alias: "url"
                                }
                            }
                        },
                        selector: {
                            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                            lookbehind: !0
                        },
                        string: {
                            pattern: t,
                            greedy: !0
                        },
                        property: {
                            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                            lookbehind: !0
                        },
                        important: /!important\b/i,
                        function: {
                            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                            lookbehind: !0
                        },
                        punctuation: /[(){};:,]/
                    }, e.languages.css.atrule.inside.rest = e.languages.css;
                    var n = e.languages.markup;
                    n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
                }(r), r.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                    boolean: /\b(?:false|true)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/
                }, r.languages.javascript = r.languages.extend("clike", {
                    "class-name": [r.languages.clike["class-name"], {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                        lookbehind: !0
                    }],
                    keyword: [{
                        pattern: /((?:^|\})\s*)catch\b/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0
                    }],
                    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: {
                        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                        lookbehind: !0
                    },
                    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "regex-source": {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: !0,
                                alias: "language-regex",
                                inside: r.languages.regex
                            },
                            "regex-delimiter": /^\/|\/$/,
                            "regex-flags": /^[a-z]+$/
                        }
                    },
                    "function-variable": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: "function"
                    },
                    parameter: [{
                        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                }), r.languages.insertBefore("javascript", "string", {
                    hashbang: {
                        pattern: /^#!.*/,
                        greedy: !0,
                        alias: "comment"
                    },
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": {
                                pattern: /^`|`$/,
                                alias: "string"
                            },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    rest: r.languages.javascript
                                }
                            },
                            string: /[\s\S]+/
                        }
                    },
                    "string-property": {
                        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "property"
                    }
                }), r.languages.insertBefore("javascript", "operator", {
                    "literal-property": {
                        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                        lookbehind: !0,
                        alias: "property"
                    }
                }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), r.languages.js = r.languages.javascript,
                function() {
                    if (void 0 !== r && "undefined" != typeof document) {
                        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                        var e = {
                                js: "javascript",
                                py: "python",
                                rb: "ruby",
                                ps1: "powershell",
                                psm1: "powershell",
                                sh: "bash",
                                bat: "batch",
                                h: "c",
                                tex: "latex"
                            },
                            t = "data-src-status",
                            n = "loading",
                            i = "loaded",
                            o = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';
                        r.hooks.add("before-highlightall", (function(e) {
                            e.selector += ", " + o
                        })), r.hooks.add("before-sanity-check", (function(s) {
                            var l = s.element;
                            if (l.matches(o)) {
                                s.code = "", l.setAttribute(t, n);
                                var a = l.appendChild(document.createElement("CODE"));
                                a.textContent = "Loading…";
                                var u = l.getAttribute("data-src"),
                                    c = s.language;
                                if ("none" === c) {
                                    var d = (/\.(\w+)$/.exec(u) || [, "none"])[1];
                                    c = e[d] || d
                                }
                                r.util.setLanguage(a, c), r.util.setLanguage(l, c);
                                var g = r.plugins.autoloader;
                                g && g.loadLanguages(c),
                                    function(e, t, n) {
                                        var r = new XMLHttpRequest;
                                        r.open("GET", e, !0), r.onreadystatechange = function() {
                                            4 == r.readyState && (r.status < 400 && r.responseText ? t(r.responseText) : r.status >= 400 ? n("✖ Error " + r.status + " while fetching file: " + r.statusText) : n("✖ Error: File does not exist or is empty"))
                                        }, r.send(null)
                                    }(u, (function(e) {
                                        l.setAttribute(t, i);
                                        var n = function(e) {
                                            var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                                            if (t) {
                                                var n = Number(t[1]),
                                                    r = t[2],
                                                    i = t[3];
                                                return r ? i ? [n, Number(i)] : [n, void 0] : [n, n]
                                            }
                                        }(l.getAttribute("data-range"));
                                        if (n) {
                                            var o = e.split(/\r\n?|\n/g),
                                                s = n[0],
                                                u = null == n[1] ? o.length : n[1];
                                            s < 0 && (s += o.length), s = Math.max(0, Math.min(s - 1, o.length)), u < 0 && (u += o.length), u = Math.max(0, Math.min(u, o.length)), e = o.slice(s, u).join("\n"), l.hasAttribute("data-start") || l.setAttribute("data-start", String(s + 1))
                                        }
                                        a.textContent = e, r.highlightElement(a)
                                    }), (function(e) {
                                        l.setAttribute(t, "failed"), a.textContent = e
                                    }))
                            }
                        })), r.plugins.fileHighlight = {
                            highlight: function(e) {
                                for (var t, n = (e || document).querySelectorAll(o), i = 0; t = n[i++];) r.highlightElement(t)
                            }
                        };
                        var s = !1;
                        r.fileHighlight = function() {
                            s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), r.plugins.fileHighlight.highlight.apply(this, arguments)
                        }
                    }
                }()
        },
        375933: (e, t, n) => {
            var r;
            ! function() {
                function i(e, t, n) {
                    return e.call.apply(e.bind, arguments)
                }

                function o(e, t, n) {
                    if (!e) throw Error();
                    if (2 < arguments.length) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }

                function s(e, t, n) {
                    return (s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : o).apply(null, arguments)
                }
                var l = Date.now || function() {
                    return +new Date
                };

                function a(e, t) {
                    this.a = e, this.o = t || e, this.c = this.o.document
                }
                var u = !!window.FontFace;

                function c(e, t, n, r) {
                    if (t = e.c.createElement(t), n)
                        for (var i in n) n.hasOwnProperty(i) && ("style" == i ? t.style.cssText = n[i] : t.setAttribute(i, n[i]));
                    return r && t.appendChild(e.c.createTextNode(r)), t
                }

                function d(e, t, n) {
                    (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(n, e.lastChild)
                }

                function g(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }

                function f(e, t, n) {
                    t = t || [], n = n || [];
                    for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
                        for (var o = !1, s = 0; s < r.length; s += 1)
                            if (t[i] === r[s]) {
                                o = !0;
                                break
                            }
                        o || r.push(t[i])
                    }
                    for (t = [], i = 0; i < r.length; i += 1) {
                        for (o = !1, s = 0; s < n.length; s += 1)
                            if (r[i] === n[s]) {
                                o = !0;
                                break
                            }
                        o || t.push(r[i])
                    }
                    e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
                }

                function h(e, t) {
                    for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++)
                        if (n[r] == t) return !0;
                    return !1
                }

                function p(e, t, n) {
                    function r() {
                        l && i && o && (l(s), l = null)
                    }
                    t = c(e, "link", {
                        rel: "stylesheet",
                        href: t,
                        media: "all"
                    });
                    var i = !1,
                        o = !0,
                        s = null,
                        l = n || null;
                    u ? (t.onload = function() {
                        i = !0, r()
                    }, t.onerror = function() {
                        i = !0, s = Error("Stylesheet failed to load"), r()
                    }) : setTimeout((function() {
                        i = !0, r()
                    }), 0), d(e, "head", t)
                }

                function _(e, t, n, r) {
                    var i = e.c.getElementsByTagName("head")[0];
                    if (i) {
                        var o = c(e, "script", {
                                src: t
                            }),
                            s = !1;
                        return o.onload = o.onreadystatechange = function() {
                            s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, n && n(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && i.removeChild(o))
                        }, i.appendChild(o), setTimeout((function() {
                            s || (s = !0, n && n(Error("Script load timeout")))
                        }), r || 5e3), o
                    }
                    return null
                }

                function m() {
                    this.a = 0, this.c = null
                }

                function y(e) {
                    return e.a++,
                        function() {
                            e.a--, v(e)
                        }
                }

                function N(e, t) {
                    e.c = t, v(e)
                }

                function v(e) {
                    0 == e.a && e.c && (e.c(), e.c = null)
                }

                function T(e) {
                    this.a = e || "-"
                }

                function E(e, t) {
                    this.c = e, this.f = 4, this.a = "n";
                    var n = (t || "n4").match(/^([nio])([1-9])$/i);
                    n && (this.a = n[1], this.f = parseInt(n[2], 10))
                }

                function C(e) {
                    var t = [];
                    e = e.split(/,\s*/);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n].replace(/['"]/g, ""); - 1 != r.indexOf(" ") || /^\d/.test(r) ? t.push("'" + r + "'") : t.push(r)
                    }
                    return t.join(",")
                }

                function x(e) {
                    return e.a + e.f
                }

                function b(e) {
                    var t = "normal";
                    return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
                }

                function S(e) {
                    var t = 4,
                        n = "n",
                        r = null;
                    return e && ((r = e.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()), (r = e.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? t = 7 : /[1-9]00/.test(r[1]) && (t = parseInt(r[1].substr(0, 1), 10)))), n + t
                }

                function A(e, t) {
                    this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new T("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
                }

                function O(e) {
                    if (e.g) {
                        var t = h(e.f, e.a.c("wf", "active")),
                            n = [],
                            r = [e.a.c("wf", "loading")];
                        t || n.push(e.a.c("wf", "inactive")), f(e.f, n, r)
                    }
                    w(e, "inactive")
                }

                function w(e, t, n) {
                    e.j && e.h[t] && (n ? e.h[t](n.c, x(n)) : e.h[t]())
                }

                function k() {
                    this.c = {}
                }

                function R(e, t) {
                    this.c = e, this.f = t, this.a = c(this.c, "span", {
                        "aria-hidden": "true"
                    }, this.f)
                }

                function D(e) {
                    d(e.c, "body", e.a)
                }

                function M(e) {
                    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + C(e.c) + ";font-style:" + b(e) + ";font-weight:" + e.f + "00;"
                }

                function $(e, t, n, r, i, o) {
                    this.g = e, this.j = t, this.a = r, this.c = n, this.f = i || 3e3, this.h = o || void 0
                }

                function I(e, t, n, r, i, o, s) {
                    this.v = e, this.B = t, this.c = n, this.a = r, this.s = s || "BESbswy", this.f = {}, this.w = i || 3e3, this.u = o || null, this.m = this.j = this.h = this.g = null, this.g = new R(this.c, this.s), this.h = new R(this.c, this.s), this.j = new R(this.c, this.s), this.m = new R(this.c, this.s), e = M(e = new E(this.a.c + ",serif", x(this.a))), this.g.a.style.cssText = e, e = M(e = new E(this.a.c + ",sans-serif", x(this.a))), this.h.a.style.cssText = e, e = M(e = new E("serif", x(this.a))), this.j.a.style.cssText = e, e = M(e = new E("sans-serif", x(this.a))), this.m.a.style.cssText = e, D(this.g), D(this.h), D(this.j), D(this.m)
                }
                T.prototype.c = function(e) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                    return t.join(this.a)
                }, $.prototype.start = function() {
                    var e = this.c.o.document,
                        t = this,
                        n = l(),
                        r = new Promise((function(r, i) {
                            ! function o() {
                                l() - n >= t.f ? i() : e.fonts.load(function(e) {
                                    return b(e) + " " + e.f + "00 300px " + C(e.c)
                                }(t.a), t.h).then((function(e) {
                                    1 <= e.length ? r() : setTimeout(o, 25)
                                }), (function() {
                                    i()
                                }))
                            }()
                        })),
                        i = null,
                        o = new Promise((function(e, n) {
                            i = setTimeout(n, t.f)
                        }));
                    Promise.race([o, r]).then((function() {
                        i && (clearTimeout(i), i = null), t.g(t.a)
                    }), (function() {
                        t.j(t.a)
                    }))
                };
                var P = {
                        D: "serif",
                        C: "sans-serif"
                    },
                    L = null;

                function F() {
                    if (null === L) {
                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        L = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                    }
                    return L
                }

                function B(e, t, n) {
                    for (var r in P)
                        if (P.hasOwnProperty(r) && t === e.f[P[r]] && n === e.f[P[r]]) return !0;
                    return !1
                }

                function z(e) {
                    var t, n = e.g.a.offsetWidth,
                        r = e.h.a.offsetWidth;
                    (t = n === e.f.serif && r === e.f["sans-serif"]) || (t = F() && B(e, n, r)), t ? l() - e.A >= e.w ? F() && B(e, n, r) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? W(e, e.v) : W(e, e.B) : function(e) {
                        setTimeout(s((function() {
                            z(this)
                        }), e), 50)
                    }(e) : W(e, e.v)
                }

                function W(e, t) {
                    setTimeout(s((function() {
                        g(this.g.a), g(this.h.a), g(this.j.a), g(this.m.a), t(this.a)
                    }), e), 0)
                }

                function K(e, t, n) {
                    this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = n
                }
                I.prototype.start = function() {
                    this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = l(), z(this)
                };
                var U = null;

                function Y(e) {
                    0 == --e.f && e.j && (e.m ? ((e = e.a).g && f(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), w(e, "active")) : O(e.a))
                }

                function j(e) {
                    this.j = e, this.a = new k, this.h = 0, this.f = this.g = !0
                }

                function H(e, t, n, r, i) {
                    var o = 0 == --e.h;
                    (e.f || e.g) && setTimeout((function() {
                        var e = i || null,
                            l = r || {};
                        if (0 === n.length && o) O(t.a);
                        else {
                            t.f += n.length, o && (t.j = o);
                            var a, u = [];
                            for (a = 0; a < n.length; a++) {
                                var c = n[a],
                                    d = l[c.c],
                                    g = t.a,
                                    h = c;
                                if (g.g && f(g.f, [g.a.c("wf", h.c, x(h).toString(), "loading")]), w(g, "fontloading", h), g = null, null === U)
                                    if (window.FontFace) {
                                        h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                        var p = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                        U = h ? 42 < parseInt(h[1], 10) : !p
                                    } else U = !1;
                                g = U ? new $(s(t.g, t), s(t.h, t), t.c, c, t.s, d) : new I(s(t.g, t), s(t.h, t), t.c, c, t.s, e, d), u.push(g)
                            }
                            for (a = 0; a < u.length; a++) u[a].start()
                        }
                    }), 0)
                }

                function G(e, t) {
                    this.c = e, this.a = t
                }

                function V(e, t) {
                    this.c = e, this.a = t
                }

                function J(e, t) {
                    this.c = e || Z, this.a = [], this.f = [], this.g = t || ""
                }
                K.prototype.g = function(e) {
                    var t = this.a;
                    t.g && f(t.f, [t.a.c("wf", e.c, x(e).toString(), "active")], [t.a.c("wf", e.c, x(e).toString(), "loading"), t.a.c("wf", e.c, x(e).toString(), "inactive")]), w(t, "fontactive", e), this.m = !0, Y(this)
                }, K.prototype.h = function(e) {
                    var t = this.a;
                    if (t.g) {
                        var n = h(t.f, t.a.c("wf", e.c, x(e).toString(), "active")),
                            r = [],
                            i = [t.a.c("wf", e.c, x(e).toString(), "loading")];
                        n || r.push(t.a.c("wf", e.c, x(e).toString(), "inactive")), f(t.f, r, i)
                    }
                    w(t, "fontinactive", e), Y(this)
                }, j.prototype.load = function(e) {
                    this.c = new a(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
                        function(e, t, n) {
                            var r = [],
                                i = n.timeout;
                            ! function(e) {
                                e.g && f(e.f, [e.a.c("wf", "loading")]), w(e, "loading")
                            }(t);
                            r = function(e, t, n) {
                                var r, i = [];
                                for (r in t)
                                    if (t.hasOwnProperty(r)) {
                                        var o = e.c[r];
                                        o && i.push(o(t[r], n))
                                    }
                                return i
                            }(e.a, n, e.c);
                            var o = new K(e.c, t, i);
                            for (e.h = r.length, t = 0, n = r.length; t < n; t++) r[t].load((function(t, n, r) {
                                H(e, o, t, n, r)
                            }))
                        }(this, new A(this.c, e), e)
                }, G.prototype.load = function(e) {
                    function t() {
                        if (o["__mti_fntLst" + r]) {
                            var n, i = o["__mti_fntLst" + r](),
                                s = [];
                            if (i)
                                for (var l = 0; l < i.length; l++) {
                                    var a = i[l].fontfamily;
                                    null != i[l].fontStyle && null != i[l].fontWeight ? (n = i[l].fontStyle + i[l].fontWeight, s.push(new E(a, n))) : s.push(new E(a))
                                }
                            e(s)
                        } else setTimeout((function() {
                            t()
                        }), 50)
                    }
                    var n = this,
                        r = n.a.projectId,
                        i = n.a.version;
                    if (r) {
                        var o = n.c.o;
                        _(this.c, (n.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (i ? "?v=" + i : ""), (function(i) {
                            i ? e([]) : (o["__MonotypeConfiguration__" + r] = function() {
                                return n.a
                            }, t())
                        })).id = "__MonotypeAPIScript__" + r
                    } else e([])
                }, V.prototype.load = function(e) {
                    var t, n, r = this.a.urls || [],
                        i = this.a.families || [],
                        o = this.a.testStrings || {},
                        s = new m;
                    for (t = 0, n = r.length; t < n; t++) p(this.c, r[t], y(s));
                    var l = [];
                    for (t = 0, n = i.length; t < n; t++)
                        if ((r = i[t].split(":"))[1])
                            for (var a = r[1].split(","), u = 0; u < a.length; u += 1) l.push(new E(r[0], a[u]));
                        else l.push(new E(r[0]));
                    N(s, (function() {
                        e(l, o)
                    }))
                };
                var Z = "https://fonts.googleapis.com/css";

                function q(e) {
                    this.f = e, this.a = [], this.c = {}
                }
                var X = {
                        latin: "BESbswy",
                        "latin-ext": "çöüğş",
                        cyrillic: "йяЖ",
                        greek: "αβΣ",
                        khmer: "កខគ",
                        Hanuman: "កខគ"
                    },
                    Q = {
                        thin: "1",
                        extralight: "2",
                        "extra-light": "2",
                        ultralight: "2",
                        "ultra-light": "2",
                        light: "3",
                        regular: "4",
                        book: "4",
                        medium: "5",
                        "semi-bold": "6",
                        semibold: "6",
                        "demi-bold": "6",
                        demibold: "6",
                        bold: "7",
                        "extra-bold": "8",
                        extrabold: "8",
                        "ultra-bold": "8",
                        ultrabold: "8",
                        black: "9",
                        heavy: "9",
                        l: "3",
                        r: "4",
                        b: "7"
                    },
                    ee = {
                        i: "i",
                        italic: "i",
                        n: "n",
                        normal: "n"
                    },
                    te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

                function ne(e, t) {
                    this.c = e, this.a = t
                }
                var re = {
                    Arimo: !0,
                    Cousine: !0,
                    Tinos: !0
                };

                function ie(e, t) {
                    this.c = e, this.a = t
                }

                function oe(e, t) {
                    this.c = e, this.f = t, this.a = []
                }
                ne.prototype.load = function(e) {
                    var t = new m,
                        n = this.c,
                        r = new J(this.a.api, this.a.text),
                        i = this.a.families;
                    ! function(e, t) {
                        for (var n = t.length, r = 0; r < n; r++) {
                            var i = t[r].split(":");
                            3 == i.length && e.f.push(i.pop());
                            var o = "";
                            2 == i.length && "" != i[1] && (o = ":"), e.a.push(i.join(o))
                        }
                    }(r, i);
                    var o = new q(i);
                    ! function(e) {
                        for (var t = e.f.length, n = 0; n < t; n++) {
                            var r = e.f[n].split(":"),
                                i = r[0].replace(/\+/g, " "),
                                o = ["n4"];
                            if (2 <= r.length) {
                                var s;
                                if (s = [], l = r[1])
                                    for (var l, a = (l = l.split(",")).length, u = 0; u < a; u++) {
                                        var c;
                                        if ((c = l[u]).match(/^[\w-]+$/))
                                            if (null == (d = te.exec(c.toLowerCase()))) c = "";
                                            else {
                                                if (c = null == (c = d[2]) || "" == c ? "n" : ee[c], null == (d = d[1]) || "" == d) d = "4";
                                                else var d = Q[d] || (isNaN(d) ? "4" : d.substr(0, 1));
                                                c = [c, d].join("")
                                            }
                                        else c = "";
                                        c && s.push(c)
                                    }
                                0 < s.length && (o = s), 3 == r.length && (s = [], 0 < (r = (r = r[2]) ? r.split(",") : s).length && (r = X[r[0]]) && (e.c[i] = r))
                            }
                            for (e.c[i] || (r = X[i]) && (e.c[i] = r), r = 0; r < o.length; r += 1) e.a.push(new E(i, o[r]))
                        }
                    }(o), p(n, function(e) {
                        if (0 == e.a.length) throw Error("No fonts to load!");
                        if (-1 != e.c.indexOf("kit=")) return e.c;
                        for (var t = e.a.length, n = [], r = 0; r < t; r++) n.push(e.a[r].replace(/ /g, "+"));
                        return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
                    }(r), y(t)), N(t, (function() {
                        e(o.a, o.c, re)
                    }))
                }, ie.prototype.load = function(e) {
                    var t = this.a.id,
                        n = this.c.o;
                    t ? _(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", (function(t) {
                        if (t) e([]);
                        else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                            t = n.Typekit.config.fn;
                            for (var r = [], i = 0; i < t.length; i += 2)
                                for (var o = t[i], s = t[i + 1], l = 0; l < s.length; l++) r.push(new E(o, s[l]));
                            try {
                                n.Typekit.load({
                                    events: !1,
                                    classes: !1,
                                    async: !0
                                })
                            } catch (e) {}
                            e(r)
                        }
                    }), 2e3) : e([])
                }, oe.prototype.load = function(e) {
                    var t = this.f.id,
                        n = this.c.o,
                        r = this;
                    t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
                        for (var i = 0, o = n.fonts.length; i < o; ++i) {
                            var s = n.fonts[i];
                            r.a.push(new E(s.name, S("font-weight:" + s.weight + ";font-style:" + s.style)))
                        }
                        e(r.a)
                    }, _(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
                        return e.o.location.hostname || e.a.location.hostname
                    }(this.c) + "/" + t + ".js", (function(t) {
                        t && e([])
                    }))) : e([])
                };
                var se = new j(window);
                se.a.c.custom = function(e, t) {
                    return new V(t, e)
                }, se.a.c.fontdeck = function(e, t) {
                    return new oe(t, e)
                }, se.a.c.monotype = function(e, t) {
                    return new G(t, e)
                }, se.a.c.typekit = function(e, t) {
                    return new ie(t, e)
                }, se.a.c.google = function(e, t) {
                    return new ne(t, e)
                };
                var le = {
                    load: s(se.load, se)
                };
                void 0 === (r = function() {
                    return le
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/vendors~main~.4e64aa7c592312b70e21.js.map