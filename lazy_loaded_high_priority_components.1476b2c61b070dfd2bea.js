/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        621733: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let n;
                if (e.size !== t.size) return !1;
                for (const [a, l] of e)
                    if (n = t.get(a), n !== l || void 0 === n && !t.has(a)) return !1;
                return !0
            }
        },
        809991: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHANNEL_LINK_SHARE_DIRECTION = void 0;
            const n = Object.freeze({
                WHATSAPP: 1,
                STATUS: 2,
                EXTERNAL: 3
            });
            t.CHANNEL_LINK_SHARE_DIRECTION = n
        },
        476300: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHANNEL_LINK_SHARE_SCREEN = void 0;
            const n = Object.freeze({
                CONTEXT_CARD: 1,
                CHANNEL_INFO: 2,
                CHANNEL_THREAD: 3,
                SHARE_LINK_SCREEN: 4
            });
            t.CHANNEL_LINK_SHARE_SCREEN = n
        },
        542040: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DISCLOSURE_ACTION = void 0;
            const n = Object.freeze({
                SCREEN_VIEW: 0,
                CLICK_ON_CONTINUE: 1,
                CANCEL: 2,
                BACK_BUTTON_TOOLBAR: 3,
                BACK_BUTTON_SYSTEM: 4,
                DISMISS: 5,
                DISCLOSURE_INFO_VIEW: 6
            });
            t.DISCLOSURE_ACTION = n
        },
        753146: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DISCLOSURE_TYPE = void 0;
            const n = Object.freeze({
                NON_BLOCKING: 0,
                BLOCKING: 1,
                INFO: 2
            });
            t.DISCLOSURE_TYPE = n
        },
        428179: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChannelLinkShareWamEvent = void 0;
            var a = n(901032),
                l = n(809991),
                r = n(836507),
                o = n(476300);
            const {
                STRING: i
            } = a.TYPES, u = (0, a.defineEvents)({
                ChannelLinkShare: [4728, {
                        channelLinkShareDirection: [1, l.CHANNEL_LINK_SHARE_DIRECTION],
                        channelLinkShareEntryPoint: [2, r.CHANNEL_LINK_SHARE_ENTRY_POINT],
                        channelLinkShareScreen: [4, o.CHANNEL_LINK_SHARE_SCREEN],
                        cid: [3, i]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.ChannelLinkShareWamEvent = u
        },
        683188: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CtwaConsumerDisclosureWamEvent = void 0;
            var a = n(901032),
                l = n(542040),
                r = n(753146);
            const {
                INTEGER: o
            } = a.TYPES, i = (0, a.defineEvents)({
                CtwaConsumerDisclosure: [4406, {
                        ctwaConsumerDisclosureVersion: [3, o],
                        disclosureAction: [1, l.DISCLOSURE_ACTION],
                        disclosureType: [2, r.DISCLOSURE_TYPE]
                    },
                    [1, 1, 1], "private", 0
                ]
            });
            t.CtwaConsumerDisclosureWamEvent = i
        },
        600145: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupProfilePictureWamEvent = void 0;
            var a = n(901032),
                l = n(970739),
                r = n(900213),
                o = n(978244);
            const {
                BOOLEAN: i,
                STRING: u
            } = a.TYPES, s = (0, a.defineEvents)({
                GroupProfilePicture: [3652, {
                        groupCreationDs: [1, u],
                        groupProfileAction: [7, l.GROUP_PROFILE_ACTION_TYPE],
                        hasProfilePicture: [3, i],
                        isAdmin: [4, i],
                        preciseGroupSizeBucket: [5, r.PRECISE_SIZE_BUCKET],
                        profilePictureType: [6, o.PROFILE_PICTURE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.GroupProfilePictureWamEvent = s
        },
        853417: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const {
                    description: n
                } = null !== (t = (0, u.useModelValues)(e.businessProfile, ["description"])) && void 0 !== t ? t : {};
                if (null == n) return null;
                return i.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: o.fbt._("About", null, {
                        hk: "1IJ9KC"
                    })
                }, i.default.createElement(r.TextSpan, {
                    theme: "title"
                }, n))
            };
            var l = n(464659),
                r = n(180519),
                o = n(548360),
                i = a(n(667294)),
                u = n(655241)
        },
        973366: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const {
                    commands: n,
                    commandsDescription: a
                } = null !== (t = (0, p.useModelValues)(e.businessProfile, ["commands", "commandsDescription"])) && void 0 !== t ? t : {};
                if (null == n || !n.length) return null;
                return d.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-commands",
                    title: c.fbt._("Commands", null, {
                        hk: "GLKbo"
                    })
                }, Boolean(a) && d.default.createElement(i.TextSpan, {
                    theme: "title"
                }, a), d.default.createElement("div", {
                    className: (0, f.default)(m.commands, u.uiMargin.top8)
                }, n.map((e => {
                    let {
                        name: t,
                        description: n
                    } = e;
                    const a = `/${t} `;
                    return d.default.createElement(r.Clickable, {
                        key: t,
                        title: n,
                        onClick: () => {
                            o.ComposeBoxActions.paste(null, a, {
                                insertLeadingSpace: !0
                            })
                        },
                        xstyle: [m.command, u.uiPadding.vert4, u.uiPadding.horiz10, u.uiMargin.end8, u.uiMargin.vert4]
                    }, d.default.createElement(s.WDSTextSmall, {
                        as: "span",
                        color: "primary"
                    }, a))
                }))))
            };
            var l = n(464659),
                r = n(950987),
                o = n(877171),
                i = n(180519),
                u = n(676345),
                s = n(851488),
                c = n(548360),
                d = a(n(667294)),
                f = a(n(156720)),
                p = n(655241);
            const m = {
                command: {
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "rnr876i8"
                },
                commands: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    flexWrap: "lkhkxwyq"
                }
            }
        },
        498692: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const [n] = (0, c.useContactValues)(e.contact.id, [o.getId]), a = null === (t = l.BotProfileCollection.get(n)) || void 0 === t ? void 0 : t.description;
                if (null == a) return null;
                return s.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: u.fbt._("About", null, {
                        hk: "3eKeST"
                    })
                }, s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, a))
            };
            var l = n(169437),
                r = n(464659),
                o = n(660666),
                i = n(180519),
                u = n(548360),
                s = a(n(667294)),
                c = n(379811)
        },
        753602: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t
                } = e;
                if (!(0, r.shouldShowConsumerTransparencyDisclosure)(t)) return null;
                return p.default.createElement(s.default, {
                    xstyle: [m.businessAccount, d.uiMargin.top10]
                }, p.default.createElement(u.default, {
                    testid: "about-business-chat",
                    onClick: o.showConsumerTransparencyModalDialog,
                    side: p.default.createElement(l.ChevronRightAltIcon, {
                        height: 24,
                        width: 10,
                        xstyle: m.iconColour
                    })
                }, p.default.createElement(c.FlexRow, {
                    align: "center"
                }, p.default.createElement(i.DataSharingIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [m.iconColour, d.uiMargin.end20]
                }), f.fbt._("About this business chat", null, {
                    hk: "PZHUK"
                }))))
            };
            var l = n(755782),
                r = n(188131),
                o = n(328232),
                i = n(20509),
                u = a(n(831269)),
                s = a(n(969358)),
                c = n(690495),
                d = n(676345),
                f = n(548360),
                p = a(n(667294));
            a(n(156720));
            const m = {
                businessAccount: {
                    fontSize: "enbbiyaj"
                },
                iconColour: {
                    color: "n0kqff35"
                }
            }
        },
        20509: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DataSharingIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 66,
                    g = 66;
                null == a && null == c || (m = a, g = c);
                return i.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "data-sharing"
                }, f), i.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 66 66",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, u.default)(n),
                    fill: "none"
                }, i.default.createElement("path", {
                    d: "M52.1731 31.43L41.2382 16.1374C40.3179 14.8382 38.8292 14.0532 37.2323 14.0532C33.1994 14.0532 30.8716 18.6004 33.1994 21.8755L41.1299 32.9999L33.1994 44.1243C30.8446 47.3994 33.1994 51.9466 37.2323 51.9466C38.8292 51.9466 40.345 51.1616 41.2652 49.8624L52.2002 34.5698C52.8498 33.6224 52.8498 32.3774 52.1731 31.43Z",
                    fill: "currentColor"
                }), i.default.createElement("path", {
                    d: "M33.2264 31.43L22.3186 16.1374C21.3712 14.8382 19.8826 14.0532 18.2856 14.0532C14.2527 14.0532 11.8979 18.6004 14.2527 21.8755L22.1832 32.9999L14.2527 44.1243C11.8979 47.3994 14.2527 51.9466 18.2856 51.9466C19.8826 51.9466 21.3983 51.1616 22.3186 49.8624L33.2535 34.5698C33.9031 33.6224 33.9031 32.3774 33.2264 31.43Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(667294)),
                u = a(n(156720));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        328232: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConsumerTransparencyModalDialog = S, t.showConsumerTransparencyModalDialog = function() {
                f.ModalManager.open(y.default.createElement(S, null))
            };
            var l = n(811026),
                r = n(103440),
                o = n(683188),
                i = n(20509),
                u = n(753233),
                s = n(258105),
                c = n(690495),
                d = n(118612),
                f = n(114850),
                p = n(65034),
                m = n(180519),
                g = n(676345),
                h = n(54052),
                E = n(542040),
                v = n(753146),
                b = n(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                C = a(n(156720));

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }
            const _ = {
                fullWidth: {
                    width: "ln8gz9je"
                },
                centeredText: {
                    textAlign: "qfejxiq4"
                },
                bulletIconColor: {
                    color: "i5443yhl"
                },
                illustrationWrapper: {
                    color: "bj5r3vhm",
                    backgroundColor: "jd3v83ju",
                    width: "cnprk2g9",
                    height: "j74n1y92",
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    alignItems: "gndfcl4n"
                }
            };
            const k = () => y.default.createElement(c.FlexColumn, null, y.default.createElement(c.FlexRow, {
                justify: "center",
                xstyle: [_.fullWidth, g.uiMargin.bottom8]
            }, y.default.createElement("div", {
                className: (0, C.default)(_.illustrationWrapper)
            }, y.default.createElement(i.DataSharingIcon, {
                width: 66,
                height: 66
            }))), y.default.createElement(m.TextDiv, {
                size: "24",
                color: "dark",
                weight: "medium",
                xstyle: [_.centeredText, g.uiMargin.top36]
            }, b.fbt._("About chats that start from Facebook or Instagram ads", null, {
                hk: "2aZNno"
            })), y.default.createElement(m.TextDiv, {
                size: "14",
                weight: "normal",
                xstyle: [_.centeredText, g.uiMargin.top16]
            }, b.fbt._("When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}", [b.fbt._implicitParam("=m2", y.default.createElement(u.ExternalLink, {
                href: (0, s.getConsumerTransparencyHCAUrl)()
            }, b.fbt._("Learn more", null, {
                hk: "1aIT4P"
            })))], {
                hk: "3BDV9F"
            })), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top36
            }, y.default.createElement(h.VisibilityOffIcon, {
                height: 24,
                width: 24,
                xstyle: _.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, b.fbt._("WhatsApp never shares your message content or calls", null, {
                hk: "3F3S6a"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top20
            }, y.default.createElement(l.BusinessDataSharingIcon, {
                height: 24,
                width: 24,
                xstyle: _.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, b.fbt._("Info Meta receives may include the number of interactions with a business", null, {
                hk: "47Hbwq"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top20
            }, y.default.createElement(p.SettingsSecurityIcon, {
                height: 24,
                width: 24,
                xstyle: _.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, b.fbt._("You can always stop chatting with a business or block them", null, {
                hk: "1dF4Qk"
            }))));

            function S() {
                (0, y.useEffect)((() => {
                    new o.CtwaConsumerDisclosureWamEvent({
                        ctwaConsumerDisclosureVersion: 1,
                        disclosureAction: E.DISCLOSURE_ACTION.SCREEN_VIEW,
                        disclosureType: v.DISCLOSURE_TYPE.INFO
                    }).commit()
                }), []);
                const e = () => f.ModalManager.close();
                return y.default.createElement(r.ConfirmPopup, {
                    testid: "ctwa-consumer-transparency-modal-dialog",
                    type: d.ModalTheme.DataSharing,
                    onOK: e,
                    okText: b.fbt._("Close", null, {
                        hk: "Vnajg"
                    }),
                    onOverlayClick: e
                }, y.default.createElement(k, null))
            }
        },
        894629: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    adminFunnelLogger: t,
                    focusOnMount: n
                } = e, [a, r] = (0, g.useState)(null != n && n), s = (0, v.useModelValues)(e.chat, ["id", "isNewsletter", "newsletterMetadata"]), c = (0, v.useOptionalModelValues)(s.newsletterMetadata, ["description", "creationTime", "membershipType"]), f = (0, h.default)(c, ["change:description"], (() => (null == c ? void 0 : c.description) || ""));
                (0, E.useListener)(u.Cmd, "edit_newsletter_description", (() => {
                    r(!0)
                }));
                const [b, C] = (0, g.useState)(f), M = (0, g.useRef)(f), _ = (0, g.useCallback)((() => {
                    b !== M.current && (M.current = b, t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET))
                }), [t, b]), k = (0, g.useCallback)(function() {
                    var e = (0, l.default)((function*() {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        _(), t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield y({
                            chat: s,
                            desc: e,
                            adminFunnelLogger: t,
                            setIsEditing: r
                        })
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), [s, _, t]);
                if (null == c) return null;
                const S = m.fbt._("Add channel description", null, {
                        hk: "4cBfrw"
                    }),
                    {
                        creationTime: w
                    } = c,
                    P = null != w ? i.Clock.newsletterDescriptionCreatedStr(c.creationTime) : null;
                return g.default.createElement(o.default, {
                    description: f,
                    bulletPointsEnabled: !1,
                    chat: e.chat,
                    showFullDescription: !1,
                    testid: "newsletter-info-drawer-description-title-input",
                    containerTestId: "newsletter-info-drawer-description-container",
                    emptyValuePlaceholder: S,
                    creationString: P,
                    canSetDescription: (0, d.iAmOwner)(c),
                    setDescriptionAction: k,
                    onChange: C,
                    onBlur: () => {
                        _(), r(!1)
                    },
                    setIsEditing: a,
                    focusOnMount: n
                })
            };
            var l = a(n(348926)),
                r = n(328620),
                o = a(n(711367)),
                i = n(63014),
                u = n(780549),
                s = n(172365),
                c = a(n(395767)),
                d = n(751460),
                f = n(390737),
                p = n(269430),
                m = n(548360),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                h = a(n(524578)),
                E = n(808446),
                v = n(655241);

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }

            function y(e) {
                var t;
                let {
                    chat: n,
                    desc: a = "",
                    adminFunnelLogger: l,
                    setIsEditing: o,
                    toastId: i = (0, r.genId)()
                } = e;
                const u = (0, s.editNewsletterMetadataAction)(n, {
                        editDescription: !0
                    }, {
                        description: a
                    }),
                    d = null === (t = n.newsletterMetadata) || void 0 === t ? void 0 : t.description,
                    h = new r.ActionType(m.fbt._("Changing channel description", null, {
                        hk: "3QNpiW"
                    })),
                    E = u.then((() => {
                        l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
                        const e = Boolean(d) ? m.fbt._("Channel description changed", null, {
                            hk: "ATEd7"
                        }) : m.fbt._("Channel description added", null, {
                            hk: "2z54Ca"
                        });
                        return new r.ActionType(e, {
                            actionText: (0, c.default)("Undo"),
                            actionHandler: () => y({
                                chat: n,
                                desc: d,
                                adminFunnelLogger: l,
                                toastId: i
                            })
                        })
                    })).catch((() => (l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), __LOG__(3)
                        `channel:handleEditDescription dropped`, new r.ActionType(m.fbt._("Channel description changed failed", null, {
                            hk: "1We4xJ"
                        }), {
                            actionText: (0, c.default)("Try again"),
                            actionHandler: () => y({
                                chat: n,
                                desc: d,
                                adminFunnelLogger: l,
                                toastId: i
                            })
                        })))).finally((() => {
                        o && o(!1)
                    }));
                return f.ToastManager.open(g.default.createElement(r.ActionToast, {
                    id: i,
                    initialAction: h,
                    pendingAction: E
                })), u
            }
        },
        751046: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(775593),
                r = n(54509),
                o = a(n(306007)),
                i = n(464659),
                u = n(780549),
                s = n(949359),
                c = n(841605),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(626194),
                m = n(114850),
                g = a(n(832897)),
                h = n(558173),
                E = a(n(894629)),
                v = n(73225),
                b = n(280635),
                y = n(683023),
                C = a(n(664531)),
                M = n(751460),
                _ = n(620973),
                k = n(349372),
                S = n(617058),
                w = n(663149),
                P = n(150103),
                O = a(n(634152)),
                I = n(163139),
                T = n(220584),
                N = n(382117),
                A = n(676345),
                x = n(460416),
                D = n(744976),
                L = n(818674),
                R = n(344575),
                j = n(851488),
                B = n(548360),
                F = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = z(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                W = a(n(156720)),
                G = a(n(524578)),
                H = a(n(637660)),
                V = n(808446),
                U = a(n(321201));

            function z(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (z = function(e) {
                    return e ? n : t
                })(e)
            }
            const q = {
                flexShrink: "oq44ahr5",
                flexGrow: "tvf2evcx",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function Y(e, t) {
                var n, a;
                const {
                    chat: z,
                    newsletterMetadata: Y,
                    onClose: K,
                    onDeleteNewsletter: X,
                    onAdminCenter: Z,
                    onSettings: Q,
                    onShareLink: $,
                    adminFunnelLogger: J,
                    focusDescriptionOnMount: ee
                } = e, te = (0, U.default)(), ne = (0, F.useRef)(null), ae = (0, G.default)(Y, ["change:suspended"], (() => !0 === (null == Y ? void 0 : Y.suspended))), le = (0, G.default)(Y, ["change:canBeMuted"], (() => Boolean(null == Y ? void 0 : Y.canBeMuted) && !ae)), re = null !== (n = (0, h.useNewsletterMessageDeliveryUpdates)(z)) && void 0 !== n ? n : [], oe = (0, v.isNewsletterMessageDeliveryUpdatesEnabled)() && re.length > 0, ie = null !== (a = (0, h.useNewsletterGeosuspendedCountries)(z)) && void 0 !== a ? a : [], ue = (0, v.isNewsletterGeosuspendAdminAlertsEnabled)() && ie.length > 0;
                (0, V.useListener)(u.Cmd, "edit_newsletter_description", (() => {
                    ne.current && ne.current.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }));
                const se = (0, H.default)((() => new N.UiActionWamEvent({
                        uiActionType: D.UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                        uiActionPreloaded: !0
                    }))),
                    ce = ae ? null : F.default.createElement(E.default, {
                        chat: z,
                        adminFunnelLogger: J,
                        focusOnMount: ee
                    }),
                    de = (0, M.iAmAdminOrOwner)(Y),
                    fe = le && !de ? F.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: A.uiMargin.top10
                    }, F.default.createElement(g.default, {
                        chat: z,
                        mute: z.mute,
                        settings: O.default
                    })) : null,
                    pe = (0, F.useCallback)((() => {
                        m.ModalManager.open(F.default.createElement(_.NewsletterPhoneNumberNux, null))
                    }), []),
                    me = (0, F.useCallback)((() => {
                        m.ModalManager.open(F.default.createElement(S.NewsletterPublicChannelPrivacyNux, {
                            chat: z
                        }))
                    }), [z]),
                    ge = ae ? null : F.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: A.uiMargin.top10
                    }, F.default.createElement(k.NewsletterPrivacyRow, {
                        onClick: de ? me : null,
                        title: B.fbt._("Public channel", null, {
                            hk: "1a60HF"
                        }),
                        text: de ? B.fbt._("What you share is visible to anyone, but your phone number isn't. Click to learn more.", null, {
                            hk: "4auNa3"
                        }) : B.fbt._("Anyone can find this channel and see what's been shared.", null, {
                            hk: "1T1Xsg"
                        }),
                        icon: F.default.createElement(r.BusinessWebsiteIcon, {
                            color: T.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    }), !de && F.default.createElement(k.NewsletterPrivacyRow, {
                        onClick: pe,
                        title: B.fbt._("Profile privacy", null, {
                            hk: "fHnmE"
                        }),
                        text: (0, s.getNewsletterProfilePrivacyText)(),
                        icon: F.default.createElement(c.DialpadIcon, {
                            color: T.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    })),
                    he = F.default.createElement(C.default, {
                        xstyle: A.uiMargin.top10,
                        chat: e.chat,
                        onDeleteNewsletter: X
                    }),
                    Ee = oe || ue ? F.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: A.uiMargin.top10
                    }, F.default.createElement(o.default, {
                        testid: "newsletter-info-admin-center-row",
                        icon: F.default.createElement(R.WarningIcon, {
                            color: T.SvgColorProp.SECONDARY,
                            height: 16
                        }),
                        onClick: Z,
                        title: F.default.createElement(j.WDSTextTitle, null, B.fbt._("Channel Alerts", null, {
                            hk: "1NYThG"
                        }))
                    })) : null,
                    ve = (0, v.isNewsletterSubscriberListEnabled)() && de && !ae ? F.default.createElement(w.NewsletterSubscriberList, {
                        newsletter: z,
                        adminFunnelLogger: J,
                        onShareLink: $
                    }) : null,
                    be = de && (0, v.isNewsletterReactionSettingsEnabled)() && !ae ? F.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: A.uiMargin.top10
                    }, F.default.createElement(o.default, {
                        testid: "newsletter-info-channel-settings",
                        title: F.default.createElement(j.WDSTextTitle, null, B.fbt._("Channel settings", null, {
                            hk: "4xHSt"
                        })),
                        icon: F.default.createElement(P.SettingsIcon, {
                            color: T.SvgColorProp.SECONDARY,
                            height: 20
                        }),
                        onClick: Q,
                        side: "chevron"
                    })) : null;
                return (0, F.useEffect)((() => {
                    const e = se.current;
                    e && (e.markUiActionT(), e.commit(), se.current = void 0), (0, L.logUiActionShadowPrivateStatsTestEvents)(), de && (0, v.isNewsletterAdminMetadataFetchingEnabled)() && (0, b.getIntegrityUpdatesAction)(z.id, l.JOB_PRIORITY.UI_ACTION)
                }), []), F.default.createElement(d.default, {
                    ref: t,
                    key: "newsletter-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: (0, v.isNewsletterTSLEnabled)() ? {
                        surface: "channel-profile",
                        extras: {
                            threadType: x.THREAD_TYPE.CHANNEL,
                            channelWid: z.id
                        }
                    } : void 0
                }, F.default.createElement(p.DrawerHeader, {
                    title: B.fbt._("Channel info", null, {
                        hk: "2MU3nu"
                    }),
                    type: p.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        K ? K() : null == te || te.requestDismiss()
                    },
                    testid: "newsletter-info-header"
                }), F.default.createElement(f.default, {
                    ref: ne
                }, F.default.createElement("section", {
                    className: (0, W.default)(q)
                }, F.default.createElement(y.NewsletterInfoTopCard, {
                    chat: (0, I.unproxy)(z),
                    adminFunnelLogger: J
                }), ce, Ee, be, fe, ge, ve, he, undefined)))
            }
            var K = (0, F.forwardRef)(Y);
            t.default = K
        },
        988149: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t,
                    adminFunnelLogger: n
                } = e;
                const a = (0, y.useOptionalModelValues)(t.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]),
                    [r, i] = (0, v.useState)(t.formattedTitle),
                    m = (0, v.useRef)(t.formattedTitle),
                    C = (0, v.useCallback)((() => {
                        r !== m.current && (m.current = r, n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET))
                    }), [n, r]),
                    k = (0, v.useCallback)(function() {
                        var e = (0, l.default)((function*(e) {
                            C(), e !== t.formattedTitle && (n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield _(t, e, n))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [t, C, n]);
                if (null == a) return null;
                if (!0 === a.isSuspendedOrTerminated || !(0, f.iAmOwner)(a)) return v.default.createElement(p.TextHeader, {
                    className: (0, b.default)(g.uiMargin.vert6, M),
                    level: "2",
                    theme: "large"
                }, v.default.createElement(d.Name, {
                    chat: t,
                    breakWord: !0,
                    checkmarkLarge: !0
                }));
                return v.default.createElement(s.default, {
                    subject: t.formattedTitle,
                    onSave: k,
                    editRestrictionInfo: () => {
                        c.ModalManager.open(v.default.createElement(o.ConfirmPopup, {
                            onOK: () => c.ModalManager.close(),
                            okText: (0, u.default)("OK")
                        }, E.fbt._("Only admins can edit this channel's info", null, {
                            hk: "Z6ACg"
                        })))
                    },
                    editable: !0,
                    emptyErrorMessage: E.fbt._("Channel name can't be empty", null, {
                        hk: "2ep6gS"
                    }),
                    onChange: i,
                    onBlur: C,
                    direction: "ltr"
                })
            };
            var l = a(n(348926)),
                r = n(328620),
                o = n(103440),
                i = n(172365),
                u = a(n(395767)),
                s = a(n(559719)),
                c = n(114850),
                d = n(21645),
                f = n(751460),
                p = n(180519),
                m = n(390737),
                g = n(676345),
                h = n(269430),
                E = n(548360),
                v = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                b = a(n(156720)),
                y = n(655241);

            function C(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (C = function(e) {
                    return e ? n : t
                })(e)
            }
            const M = {
                textAlign: "qfejxiq4"
            };

            function _(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, r.genId)();
                const l = (0, i.editNewsletterMetadataAction)(e, {
                        editName: !0
                    }, {
                        name: t
                    }),
                    o = e.name,
                    s = new r.ActionType(E.fbt._("Renaming channel", null, {
                        hk: "3xRXjW"
                    })),
                    c = l.then((() => (n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS), new r.ActionType(E.fbt._("Channel renamed to {name}", [E.fbt._param("name", t)], {
                        hk: "JAzRN"
                    }), {
                        actionText: (0, u.default)("Undo"),
                        actionHandler: () => _(e, o, n, a)
                    })))).catch((() => (n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), __LOG__(3)
                        `newsletter:handleEditSubject dropped`, new r.ActionType(E.fbt._("Couldn't rename channel", null, {
                            hk: "3OWiwP"
                        }), {
                            actionText: (0, u.default)("Try again"),
                            actionHandler: () => _(e, t, n, a)
                        }))));
                return m.ToastManager.open(v.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: s,
                    pendingAction: c
                })), l
            }
        },
        683023: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewsletterInfoTopCard = function(e) {
                const {
                    adminFunnelLogger: t
                } = e, n = (0, N.useOptionalModelValues)(e.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]);
                let a = (null == n ? void 0 : n.privacy) === o.NewsletterPrivacy.Private ? O.fbt._("Private Channel", null, {
                    hk: "4eaPAs"
                }) : O.fbt._("Channel", null, {
                    hk: "26BY5U"
                });
                (null == n ? void 0 : n.terminated) && (a = O.fbt._("Deleted channel", null, {
                    hk: "3S2eSl"
                }));
                const l = null != (null == n ? void 0 : n.size) ? (0, i.getNewsletterFollowersText)(n.size, !0) : null;
                return I.default.createElement(s.default, {
                    theme: "padding-large"
                }, I.default.createElement(c.FlexColumn, {
                    align: "center"
                }, I.default.createElement(g.default, {
                    chat: e.chat,
                    xstyle: _.uiMargin.bottom7,
                    readOnly: !0 === (null == n ? void 0 : n.isSuspendedOrTerminated) || !(0, E.iAmOwner)(n),
                    adminFunnelLogger: t,
                    showOutline: !0
                }), I.default.createElement(h.default, {
                    chat: e.chat,
                    adminFunnelLogger: t
                }), I.default.createElement("div", {
                    className: (0, T.default)(D.newsletterSecondary)
                }, I.default.createElement(u.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, I.default.createElement(M.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, a, (null == n ? void 0 : n.isSuspendedOrTerminated) ? null : I.default.createElement(I.default.Fragment, null, f.default.isRTL() ? " - " : " · ", l))))), (null == n ? void 0 : n.isSuspendedOrTerminated) ? null : I.default.createElement(L, {
                    chat: e.chat
                }))
            };
            var l = a(n(348926)),
                r = n(731971),
                o = n(927531),
                i = n(949359),
                u = n(306703),
                s = a(n(969358)),
                c = n(690495),
                d = n(596533),
                f = a(n(932325)),
                p = n(406506),
                m = n(114850),
                g = a(n(501624)),
                h = a(n(988149)),
                E = n(751460),
                v = n(405473),
                b = n(259414),
                y = n(956113),
                C = n(163139),
                M = n(180519),
                _ = n(676345),
                k = n(106645),
                S = a(n(625903)),
                w = n(874806),
                P = n(476300),
                O = n(548360),
                I = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                T = a(n(156720)),
                N = n(655241),
                A = n(671342);

            function x(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (x = function(e) {
                    return e ? n : t
                })(e)
            }
            const D = {
                newsletterSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                },
                actionIcon: {
                    color: "fsk8o631"
                },
                infoAction: {
                    flexGrow: "ggj6brxn",
                    color: "fsk8o631",
                    fontWeight: "hnx8ox4h"
                },
                spinner: {
                    stroke: "mqe5ufcr"
                },
                infoActionBtn: {
                    fontSize: "ovllcyds",
                    minWidth: "pwaghgrf"
                }
            };

            function L(e) {
                let {
                    chat: t
                } = e;
                const [n, a] = (0, I.useState)(!1), o = t.newsletterMetadata, u = (0, I.useCallback)((0, l.default)((function*() {
                    a(!0), yield(0, v.subscribeToNewsletter)((0, C.unproxy)(t), {
                        eventSurface: w.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }), a(!1)
                })), [t]), s = (0, I.useCallback)((() => {
                    m.ModalManager.open(I.default.createElement(k.UnfollowNewsletterConfirmationModal, {
                        chat: t,
                        eventSurface: w.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }))
                }), [t]), f = [];
                (0, E.iAmGuest)(o) ? f.push({
                    Icon: b.PlusLargeIcon,
                    onClick: u,
                    testid: "newsletter-info-follow-action",
                    title: O.fbt._("Follow", null, {
                        hk: "1MHfKq"
                    }),
                    isLoading: n
                }): (0, E.iAmSubscriber)(o) && f.push({
                    Icon: r.CheckmarkIcon,
                    onClick: s,
                    testid: "newsletter-info-unfollow-action",
                    title: O.fbt._("Following", null, {
                        hk: "4pSME4"
                    }),
                    isLoading: !1
                });
                const [g, h, M] = (0, A.useNewsletterInviteLink)({
                    chat: t,
                    linkShareLoggingNavigationParams: {
                        linkShareScreen: P.CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO
                    }
                });
                return null != g && (f.push({
                    Icon: d.ForwardIcon,
                    onClick: M,
                    testid: "newsletter-info-invite-action",
                    title: (0, i.getForwardNewsletterLinkText)(),
                    isLoading: !1
                }), document.queryCommandSupported("copy") && f.push({
                    Icon: p.LinkIcon,
                    onClick: h,
                    testid: "newsletter-info-copy-link-action",
                    title: (0, i.getCopyLinkText)(),
                    isLoading: !1
                })), I.default.createElement(c.FlexRow, {
                    justify: "center",
                    align: "center",
                    xstyle: [_.uiMargin.top25, _.uiMargin.bottom10]
                }, f.map(((e, t) => {
                    let {
                        testid: a,
                        Icon: l,
                        onClick: r,
                        title: o,
                        isLoading: i
                    } = e;
                    return I.default.createElement(S.default, {
                        key: t,
                        "aria-label": o,
                        testid: a,
                        onClick: r,
                        xstyle: D.infoActionBtn,
                        disabled: n
                    }, I.default.createElement(c.FlexColumn, {
                        align: "center",
                        xstyle: [D.infoAction, _.uiPadding.horiz15]
                    }, i ? I.default.createElement(y.Spinner, {
                        color: D.spinner,
                        size: 32,
                        xstyle: _.uiMargin.bottom15
                    }) : I.default.createElement(l, {
                        xstyle: [D.actionIcon, _.uiMargin.bottom15],
                        width: 24,
                        height: 24
                    }), o))
                })))
            }
        },
        664531: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t,
                    xstyle: n,
                    onDeleteNewsletter: a
                } = e;
                const r = E.default.createElement(C, {
                        chat: t
                    }),
                    o = E.default.createElement(y, {
                        chat: t
                    }),
                    i = E.default.createElement(M, {
                        chat: t,
                        onDeleteNewsletter: a
                    });
                return E.default.createElement(l.ChatInfoDrawerButtonsSection, {
                    xstyle: n
                }, r, o, i)
            };
            var l = n(464659),
                r = n(184385),
                o = n(36045),
                i = n(69943),
                u = n(114850),
                s = n(73225),
                c = n(751460),
                d = a(n(726619)),
                f = n(453603),
                p = n(647890),
                m = n(106645),
                g = n(874806),
                h = n(548360),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                v = n(655241);

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }

            function y(e) {
                let {
                    chat: t
                } = e;
                const n = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
                if ((null == n ? void 0 : n.isSuspendedOrTerminated) || (0, c.iAmOwner)(n) || (0, c.iAmAdmin)(n) || !(0, s.isNewsletterReportingEnabled)()) return null;
                const a = h.fbt._("Report Channel", null, {
                    hk: "3DYeSq"
                });
                return E.default.createElement(o.DrawerButtonSimple, {
                    testid: "newsletter-integrity-report-button",
                    icon: E.default.createElement(p.ThumbsDownIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        u.ModalManager.open(E.default.createElement(d.default, {
                            chat: t,
                            spamFlow: f.SpamFlow.NewsletterInfoReport
                        }))
                    }
                }, a)
            }

            function C(e) {
                let {
                    chat: t
                } = e;
                const n = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    a = h.fbt._("Unfollow", null, {
                        hk: "3NYOtp"
                    }),
                    l = (0, E.useCallback)((() => {
                        u.ModalManager.open(E.default.createElement(m.UnfollowNewsletterConfirmationModal, {
                            chat: t,
                            eventSurface: g.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                        }))
                    }), [t]);
                return (0, c.iAmSubscriber)(n) ? E.default.createElement(o.DrawerButtonSimple, {
                    testid: "li-unfollow-newsletter",
                    icon: E.default.createElement(i.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: l
                }, a) : null
            }

            function M(e) {
                let {
                    chat: t,
                    onDeleteNewsletter: n
                } = e;
                const a = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    l = h.fbt._("Delete channel", null, {
                        hk: "2PQtz4"
                    });
                return (0, c.iAmOwner)(a) ? E.default.createElement(o.DrawerButtonSimple, {
                    testid: "li-delete-newsletter",
                    icon: E.default.createElement(r.DeleteIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: n
                }, l) : null
            }
        },
        671342: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useNewsletterInviteLink = function(e) {
                let {
                    chat: t,
                    linkShareLoggingNavigationParams: n
                } = e;
                const a = t.formattedTitle,
                    g = (0, m.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "inviteCode"]),
                    {
                        inviteCode: h
                    } = g || {},
                    E = null != h ? `https://whatsapp.com/channel/${h}` : null,
                    v = (0, p.useCallback)((() => {
                        if (null == E) return;
                        (0, o.logNewsletterLinkShare)({
                            shareDirection: c.CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                            linkShareScreen: n.linkShareScreen,
                            newsletter: (0, d.toNewsletterWid)(t.id),
                            linkShareScreenEntryPoint: n.linkShareScreenEntryPoint
                        });
                        const e = f.fbt._("Follow the {newsletter_name} channel on WhatsApp: {link}", [f.fbt._param("newsletter_name", a), f.fbt._param("link", E)], {
                                hk: "2JUBPH"
                            }),
                            l = f.fbt._("", null, {
                                hk: "rzrsn"
                            });
                        r.ModalManager.open(p.default.createElement(i.default, {
                            title: l.toString(),
                            text: e.toString(),
                            origin: t.id
                        }), {
                            transition: "modal-flow"
                        })
                    }), [E, n, t.id, a]),
                    b = (0, p.useCallback)((() => {
                        if (null == E) return;
                        (0, l.copyTextToClipboard)(E) ? s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Link copied to clipboard.", null, {
                                hk: "24K2ka"
                            })
                        })): s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Couldn't copy to clipboard.", null, {
                                hk: "2JI7CO"
                            })
                        }))
                    }), [E]);
                return [E, b, v]
            };
            var l = n(985714),
                r = n(114850),
                o = n(215441),
                i = a(n(210002)),
                u = n(625786),
                s = n(390737),
                c = n(809991),
                d = n(669050),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = n(655241);

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        215441: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logNewsletterLinkShare = function(e) {
                let {
                    shareDirection: t,
                    linkShareScreenEntryPoint: n,
                    linkShareScreen: r,
                    newsletter: o
                } = e;
                if (!(0, l.isNewsletterLinkShareLoggingEnabled)()) return;
                new a.ChannelLinkShareWamEvent({
                    channelLinkShareDirection: t,
                    channelLinkShareEntryPoint: n,
                    channelLinkShareScreen: r,
                    cid: o.user
                }).commit()
            };
            var a = n(428179),
                l = n(73225)
        },
        933655: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewsletterEmojiSettings = function(e) {
                let {
                    currentlySelected: t,
                    onClick: n
                } = e;
                const a = f.default.createElement("div", {
                    className: (0, p.default)([m.title, c.uiMargin.bottom15])
                }, d.fbt._("Which reactions can followers send", null, {
                    hk: "4fwuWS"
                }));
                return f.default.createElement(f.default.Fragment, null, a, h.map((e => {
                    if (e.value !== l.NewsletterReactionCodesSetting.None || (0, i.isNewsletterReactionSettingForNoneEnabled)()) return f.default.createElement(u.RadioWithLabel, {
                        theme: u.RadioWithLabelThemeEnum.LARGE,
                        key: e.value,
                        name: "newsletter-reaction-codes-setting",
                        value: e.value,
                        label: e.label,
                        checked: e.value === t,
                        onChange: n,
                        xstyle: m.radioLabel
                    })
                })))
            };
            var l = n(927531),
                r = n(70354),
                o = a(n(225148)),
                i = n(73225),
                u = n(695431),
                s = n(348538),
                c = n(676345),
                d = n(548360),
                f = a(n(667294)),
                p = a(n(156720));
            const m = {
                radioLabel: {
                    color: "b40j3n3c"
                },
                title: {
                    color: "i8b0kslj"
                }
            };

            function g() {
                return f.default.createElement("span", null, s.REACTIONS_DEFAULT_SENDING_TRAY.map(((e, t) => {
                    const n = r.EmojiUtil.normalizeEmojiFromString(e),
                        a = t + 1 === s.REACTIONS_DEFAULT_SENDING_TRAY.length ? c.uiMargin.end0 : c.uiMargin.end4;
                    return null != n ? f.default.createElement("span", {
                        className: (0, p.default)(a),
                        key: `newsletter-emoji-container-${t}`
                    }, f.default.createElement(o.default, {
                        key: `newsletter-emoji-${t}`,
                        emoji: n,
                        size: "small",
                        element: "span"
                    })) : null
                })))
            }
            const h = [{
                label: d.fbt._("Any emoji", null, {
                    hk: "PwBNc"
                }),
                value: l.NewsletterReactionCodesSetting.All
            }, {
                label: d.fbt._("Default only ({reaction-emojis})", [d.fbt._param("reaction-emojis", f.default.createElement(g, null))], {
                    hk: "YnzVd"
                }),
                value: l.NewsletterReactionCodesSetting.Basic
            }, {
                label: d.fbt._("None", null, {
                    hk: "vlKK9"
                }),
                value: l.NewsletterReactionCodesSetting.None
            }]
        },
        660508: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(967154)),
                r = a(n(170206)),
                o = n(949359),
                i = n(528259),
                u = n(306703),
                s = n(23641),
                c = a(n(908081)),
                d = n(36045),
                f = n(626194),
                p = n(690495),
                m = n(596533),
                g = n(220584),
                h = n(676345),
                E = n(476300),
                v = n(851488),
                b = n(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                C = a(n(156720)),
                M = n(655241),
                _ = n(671342);

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }
            const S = {
                    drawer: {
                        backgroundColor: "lkjmyc96"
                    },
                    header: {
                        width: "gofbmt1g",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        backgroundColor: "f6ipylw5",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    },
                    optionsHeader: {
                        textAlign: "ljrqcn24"
                    },
                    divider: {
                        width: "ln8gz9je",
                        height: "kanlod6e",
                        backgroundColor: "i86xphuw"
                    },
                    mouseCursor: {
                        cursor: "ajgl1lbb"
                    },
                    link: {
                        wordBreak: "m1c2hokz"
                    },
                    newsletterName: {
                        wordBreak: "cw3vfol9",
                        maxHeight: "krcjiuu9"
                    }
                },
                w = (0, y.forwardRef)(((e, t) => {
                    var n;
                    const a = null !== (n = e.entryPoint) && void 0 !== n ? n : void 0;
                    void 0 === a && (__LOG__(3, void 0, void 0, !0, ["newsletter-logging"])
                        `Encountered null link share screen entry point`, SEND_LOGS("Null link share screen entry point in newsletter link share logging", 1, "newsletter-logging"));
                    const [k, w, P] = (0, _.useNewsletterInviteLink)({
                        chat: e.newsletter,
                        linkShareLoggingNavigationParams: {
                            linkShareScreen: E.CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
                            linkShareScreenEntryPoint: a
                        }
                    }), O = (0, M.useOptionalModelValues)(e.newsletter.newsletterMetadata, ["name"]), I = (0, M.useModelValues)(e.newsletter.contact, ["id", "profilePicThumb"]), T = [];
                    null != k && (T.push({
                        Icon: m.ForwardIcon,
                        onClick: P,
                        testid: "newsletter-info-invite-action",
                        title: (0, o.getSendLinkViaWhatsAppText)()
                    }), document.queryCommandSupported("copy") && T.push({
                        Icon: i.CopyIcon,
                        onClick: w,
                        testid: "newsletter-info-copy-link-action",
                        title: (0, o.getCopyLinkText)()
                    }));
                    const N = y.default.createElement("div", {
                            className: (0, C.default)([S.header, h.uiMargin.all15])
                        }, y.default.createElement(r.default, {
                            image: y.default.createElement(s.DetailImage, {
                                id: I.id,
                                size: 56,
                                shape: s.DetailImageShape.Circle,
                                quality: s.DetailImageQuality.High
                            }),
                            primary: y.default.createElement(v.WDSTextTitle, {
                                xstyle: S.newsletterName
                            }, null == O ? void 0 : O.name),
                            secondary: y.default.createElement(u.SelectableLink, {
                                selectable: !0,
                                onClick: w,
                                xstyle: S.mouseCursor
                            }, y.default.createElement(v.WDSTextMuted, {
                                color: "link",
                                textWrap: "wrap",
                                xstyle: S.link,
                                testid: "newsletter-link-drawer-copyable-link"
                            }, k)),
                            theme: "newsletter-link-cell",
                            className: (0, C.default)(h.uiMargin.vert4, h.uiMargin.horiz2)
                        })),
                        A = y.default.createElement(v.WDSTextSectionTitle, {
                            xstyle: S.optionsHeader,
                            marginEnd: 32,
                            marginStart: 32,
                            marginTop: 16,
                            marginBottom: 20,
                            color: "primary"
                        }, (0, o.getChannelLinkInformationText)()),
                        x = y.default.createElement(p.FlexRow, {
                            xstyle: [h.uiMargin.vert4, h.uiMargin.horiz30]
                        }, y.default.createElement("div", {
                            className: (0, C.default)(S.divider)
                        })),
                        D = e.onBack ? {
                            onBack: e.onBack
                        } : {
                            onCancel: e.onClose
                        };
                    return y.default.createElement(c.default, {
                        ref: t,
                        theme: "striped",
                        testid: "newsletter-link-drawer",
                        xstyle: S.drawer
                    }, y.default.createElement(f.DrawerHeader, (0, l.default)({
                        title: b.fbt._("Channel Link", null, {
                            hk: "TovMA"
                        }),
                        type: f.DRAWER_HEADER_TYPE.SMALL
                    }, D, {
                        rtlFixIfOnDarwin: !0,
                        testid: "newsletter-link-drawer-header"
                    })), N, A, x, T.map(((e, t) => {
                        let {
                            testid: n,
                            Icon: a,
                            onClick: l,
                            title: r
                        } = e;
                        return y.default.createElement(d.DrawerButtonSimple, {
                            key: `${n}-${t}`,
                            testid: n,
                            icon: y.default.createElement(a, {
                                width: 24,
                                height: 24,
                                color: g.SvgColorProp.SECONDARY
                            }),
                            divider: !1,
                            onClick: l
                        }, r)
                    })))
                }));
            w.displayName = "NewsletterLinkDrawer";
            var P = w;
            t.default = P
        },
        245272: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(348926)),
                r = n(780549),
                o = n(927531),
                i = a(n(908081)),
                u = a(n(324093)),
                s = n(626194),
                c = n(172365),
                d = n(933655),
                f = n(676345),
                p = n(548360),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(156720)),
                h = n(808446),
                E = n(655241);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }

            function b() {
                return (b = (0, l.default)((function*(e, t) {
                    try {
                        return yield(0, c.editNewsletterMetadataAction)(e, {
                            editReactionCodesSetting: !0
                        }, {
                            reactionCodesSetting: t
                        })
                    } catch (t) {
                        __LOG__(4, void 0, new Error, !0, ["reactions", "newsletter"])
                        `[handleReactionCodesSettingChange][editNewsletterMetadataAction] Error editing reaction settings for newsletter ${e.id}`, SEND_LOGS("newsletter-edit-reaction-settings-failed", 1, "reactions", "newsletter")
                    }
                }))).apply(this, arguments)
            }
            const y = {
                    body: {
                        flexShrink: "oq44ahr5",
                        flexGrow: "ggj6brxn",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    drawer: {
                        backgroundColor: "lkjmyc96"
                    }
                },
                C = (0, m.forwardRef)(((e, t) => {
                    var n, a;
                    const c = (0, m.useCallback)(function() {
                            var t = (0, l.default)((function*(t) {
                                var n;
                                const a = null !== (n = o.NewsletterReactionCodesSetting.cast(Number(t.target.value))) && void 0 !== n ? n : o.NewsletterReactionCodesSetting.Basic;
                                e.adminFunnelLogger.logReactionSetting(a), yield function() {
                                    return b.apply(this, arguments)
                                }(e.newsletter, a)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), [e.newsletter, e.adminFunnelLogger]),
                        v = (0, E.useOptionalModelValues)(null === (n = e.newsletter) || void 0 === n ? void 0 : n.newsletterMetadata, ["reactionCodesSetting"]);
                    return (0, h.useListener)(r.Cmd, "edit_newsletter_description", (() => e.onBack())), m.default.createElement(i.default, {
                        ref: t,
                        theme: "striped",
                        testid: "newsletter-settings-drawer",
                        xstyle: y.drawer
                    }, m.default.createElement(s.DrawerHeader, {
                        title: p.fbt._("Channel settings", null, {
                            hk: "2bWwDX"
                        }),
                        type: s.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: !0,
                        testid: "newsletter-settings-drawer-header"
                    }), m.default.createElement(u.default, null, m.default.createElement("section", {
                        className: (0, g.default)([y.body, f.uiMargin.horiz30, f.uiMargin.vert30])
                    }, m.default.createElement(d.NewsletterEmojiSettings, {
                        onClick: c,
                        currentlySelected: null !== (a = null == v ? void 0 : v.reactionCodesSetting) && void 0 !== a ? a : o.NewsletterReactionCodesSetting.Basic
                    }))))
                }));
            C.displayName = "NewsletterSettingsDrawer";
            var M = C;
            t.default = M
        },
        355793: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExitedGroupQPSurface = function(e) {
                let {
                    group: t
                } = e;
                const n = (0, s.usePrivacyTipQuickPromotion)({
                    surfaceId: l.QP_SURFACE_ID_EXITED_GROUP,
                    group: t
                });
                if (null == n || !(0, i.groupsPrivacyTipsEnabled)()) return;
                const {
                    promotion: a,
                    sanitizedText: c,
                    image: d,
                    dismiss: f,
                    primaryActionClick: p,
                    settingStep: m
                } = n, g = a.promotion.data.primaryAction;
                return u.default.createElement(r.FlexRow, {
                    paddingTop: 8
                }, u.default.createElement(o.PrivacyTipBanner, {
                    text: c,
                    image: d,
                    actionText: null == g ? void 0 : g.text,
                    onDismiss: f,
                    onAction: p,
                    settingStep: m
                }))
            };
            var l = n(312158),
                r = n(690495),
                o = n(959989),
                i = n(753284),
                u = a(n(667294)),
                s = n(179203)
        },
        371125: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    stickerPackId: t,
                    onStickerPackView: n,
                    stickerPackViewDelay: a,
                    sticker: g
                } = e, h = function(e) {
                    (0, p.useEffect)((() => {
                        e && d.StickerPackCollectionMd.fetchStickerPack(e)
                    }), [e]);
                    return (0, m.default)(d.StickerPackCollectionMd, "add remove reset", (() => null != e ? d.StickerPackCollectionMd.get(e) : null))
                }(t);
                let E;
                if (t) {
                    const e = e => {
                        e.stopPropagation(), n && n(), null != a ? self.setTimeout((() => r.Cmd.openStickerPack(t)), a + 150) : r.Cmd.openStickerPack(t)
                    };
                    (0, s.isFavoriteStickersEnabled)() ? null != g && (E = p.default.createElement(u.FlexRow, null, p.default.createElement(l.default, {
                        onClick: e,
                        type: "secondary"
                    }, f.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    })), i.FavoriteStickerCollection.get(g.filehash) ? p.default.createElement(l.default, {
                        onClick: () => (0, o.removeStickerFromFavorites)(g),
                        type: "secondary"
                    }, f.fbt._("Remove From Favorites", null, {
                        hk: "3YoUkP"
                    })) : p.default.createElement(l.default, {
                        onClick: () => (0, o.addStickerToFavorites)(g),
                        type: "secondary"
                    }, f.fbt._("Add to Favorites", null, {
                        hk: "3x4EBo"
                    })))): E = p.default.createElement(l.default, {
                        onClick: e,
                        type: "secondary"
                    }, f.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    }))
                }
                return p.default.createElement(p.default.Fragment, null, p.default.createElement(c.StickerDetailsStickerPackInfo, {
                    name: null == h ? void 0 : h.name,
                    publisher: null == h ? void 0 : h.publisher,
                    theme: c.Theme.MediaViewer
                }), E)
            };
            var l = a(n(692629)),
                r = n(780549),
                o = n(225446),
                i = n(788788),
                u = n(690495),
                s = n(97858),
                c = n(438543),
                d = n(425192),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = a(n(524578));

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        565527: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(348926)),
                r = n(637842),
                o = n(778945),
                i = n(87630),
                u = a(n(908081)),
                s = a(n(324093)),
                c = n(626194),
                d = n(548360),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }
            const m = (e, t) => {
                const {
                    contactId: n
                } = e, [a, p] = (0, f.useState)(void 0), [m, g] = (0, f.useState)(!0);
                (0, f.useEffect)((() => {
                    (function() {
                        var e = (0, l.default)((function*() {
                            const e = yield o.BusinessProfileCollection.update(n, {
                                getMerchantCompliance: !0
                            }), t = (Array.isArray(e) ? e[0] : e).serialize();
                            t ? (p(t.legalEntityDetails || void 0), g(!1)) : __LOG__(3)
                            `compliance: cannot fetch business details (${n.toString()})`
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                const {
                    entityName: h,
                    customerCareDetails: E,
                    grievanceOfficerDetails: v
                } = null != a ? a : {}, b = (0, r.getEntityTypeText)(a);
                return f.default.createElement(u.default, {
                    ref: t,
                    key: "merchant-details-modal",
                    theme: "striped"
                }, f.default.createElement(c.DrawerHeader, {
                    title: d.fbt._("Business details", null, {
                        hk: "m9xzp"
                    }),
                    type: c.DRAWER_HEADER_TYPE.SMALL,
                    onCancel: e.onClose
                }), f.default.createElement(s.default, {
                    theme: m ? "center-content" : void 0
                }, m ? f.default.createElement(i.ComplianceInfoLoading, null) : f.default.createElement(f.default.Fragment, null, f.default.createElement(i.ComplianceInfoGroup, null, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: h,
                    label: d.fbt._("Legal Name of Business", null, {
                        hk: "2s9jD"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: b,
                    label: d.fbt._("Business Type", null, {
                        hk: "48J73B"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Customer Care Information", null, {
                        hk: "qlYos"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "PMTTg"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "tXYaf"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "2jYxR1"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Grievance Officer Information", null, {
                        hk: "3emd7I"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == v ? void 0 : v.name,
                    label: d.fbt._("Name", null, {
                        hk: "2vEs6r"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == v ? void 0 : v.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "3kk5I"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == v ? void 0 : v.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "4GBzF0"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == v ? void 0 : v.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "3SvbLl"
                    })
                })))))
            };
            var g = (0, f.forwardRef)(m);
            t.default = g
        },
        517729: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    contact: t
                } = e;
                const [n, a] = (0, k.useContactValues)(t.id, [s.getVerifiedLevel, s.getVerifiedName]), S = (0, f.getBusinessFaqUrl)(), P = !u.Conn.isSMB;
                (0, M.useEffect)((() => {
                    P && new l.BannerEventWamEvent({
                        bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: b.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [P]);
                const O = n !== r.VERIFIED_LEVEL.HIGH || (0, m.isBlueEducationEnabled)() ? C.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                }) : C.fbt._('WhatsApp has verified that this is the official business account of "{businessName}". This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.', [C.fbt._param("businessName", a)], {
                    hk: "43yvU"
                });
                return M.default.createElement(i.ConfirmPopup, {
                    title: C.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: () => {
                        g.ModalManager.close(), P && new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: b.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: (0, p.default)("OK")
                }, M.default.createElement(c.EmojiText, {
                    text: O
                }), " ", M.default.createElement(o.default, {
                    href: S,
                    onClick: e => {
                        e.preventDefault(), g.ModalManager.close(), self.setTimeout((() => (0, d.openExternalLink)(S)), 10)
                    }
                }, C.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                })), P && M.default.createElement("div", {
                    className: (0, _.default)(v.uiMargin.top16)
                }, M.default.createElement(E.TextSpan, {
                    theme: "muted",
                    size: "13"
                }, C.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                    hk: "14W7ur"
                }), M.default.createElement("br", null), M.default.createElement(o.default, {
                    onClick: e => {
                        e.preventDefault(), g.ModalManager.close(), new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: b.BANNER_OPERATIONS.CLICK
                        }).commit(), self.setTimeout((() => g.ModalManager.open(M.default.createElement(h.SmbAppUpsellModal, null))), 200)
                    },
                    className: (0, _.default)(w)
                }, C.fbt._("Learn about getting the app", null, {
                    hk: "3ncguo"
                })))))
            };
            var l = n(240045),
                r = n(817649),
                o = a(n(196554)),
                i = n(103440),
                u = n(445729),
                s = n(660666),
                c = n(305521),
                d = n(753233),
                f = n(258105),
                p = a(n(395767)),
                m = n(97858),
                g = n(114850),
                h = n(945270),
                E = n(180519),
                v = n(676345),
                b = n(493885),
                y = n(403602),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                _ = a(n(156720)),
                k = n(379811);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }
            const w = {
                color: "jq3rn4u7"
            }
        },
        945270: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbAppUpsellModal = function() {
                return g.default.createElement(o.ConfirmPopup, {
                    title: m.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: () => {
                        new l.BannerEventWamEvent({
                            bannerType: p.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.BANNER_OPERATIONS.DISMISS
                        }).commit(), c.ModalManager.close()
                    },
                    okText: (0, s.default)("Close")
                }, g.default.createElement(d.default, null), g.default.createElement("p", null, g.default.createElement(i.EmojiText, {
                    text: m.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                        hk: "2SAIXH"
                    })
                })), g.default.createElement("br", null), g.default.createElement("p", null, g.default.createElement(i.EmojiText, {
                    text: m.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                        hk: "2840mD"
                    })
                }), " ", g.default.createElement(r.default, {
                    href: h,
                    onClick: e => {
                        e.preventDefault(), c.ModalManager.close(), self.setTimeout((() => (0, u.openExternalLink)(h)), 10)
                    }
                }, m.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                }))))
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var l = n(240045),
                r = a(n(196554)),
                o = n(103440),
                i = n(305521),
                u = n(753233),
                s = a(n(395767)),
                c = n(114850),
                d = a(n(345257)),
                f = n(493885),
                p = n(403602),
                m = n(548360),
                g = a(n(667294));
            const h = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = h
        },
        345257: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const {
                    theme: e
                } = (0, s.useContext)(i.ThemeContext);
                return s.default.createElement(l.FlexRow, {
                    align: "center",
                    justify: "center",
                    xstyle: u.uiMargin.vert15
                }, s.default.createElement(o.WAWebQRCode, {
                    data: "https://www.whatsapp.com/business/download",
                    colorDark: "#122e31",
                    size: r.QR_EDGE / 2
                }, (t => s.default.createElement("div", {
                    ref: t,
                    className: (0, c.default)("dark" === e && f.codeDarkMode, f.code, u.uiPadding.all12)
                }, s.default.createElement(p, {
                    theme: e
                })))))
            };
            var l = n(690495),
                r = n(914368),
                o = n(647781),
                i = n(667738),
                u = n(676345),
                s = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                c = a(n(156720));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
            const f = {
                code: {
                    position: "g0rxnol2"
                },
                codeDarkMode: {
                    backgroundColor: "rfib67n1",
                    borderTopStartRadius: "boajuire",
                    borderTopEndRadius: "o93wvyfv",
                    borderBottomEndRadius: "i5w8n1e6",
                    borderBottomStartRadius: "cnpay6qi"
                },
                codeLogo: {
                    position: "lhggkp7q",
                    top: "myeiuhv9",
                    start: "m7kgcvyw",
                    zIndex: "b9fczbqn",
                    width: "tddarlmj",
                    height: "jbxl65f1",
                    color: "ep2u7qgo",
                    userSelect: "rkxvyd19",
                    transform: "qk2y3tb3"
                }
            };

            function p() {
                return s.default.createElement("div", {
                    className: (0, c.default)(f.codeLogo)
                }, s.default.createElement("svg", {
                    width: "100%",
                    viewBox: "0 0 64 64",
                    xmlns: "http://www.w3.org/2000/svg"
                }, s.default.createElement("path", {
                    fill: "#FFF",
                    d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
                }), s.default.createElement("g", {
                    transform: "translate(8 6)"
                }, s.default.createElement("path", {
                    d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                    fill: "#123033"
                }))))
            }
        },
        314810: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    active: t,
                    contact: n,
                    onClick: a,
                    contextMenu: l,
                    isPendingParticipant: u = !1,
                    contextEnabled: s,
                    onContext: c,
                    theme: d,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p,
                    elevatedPushNamesEnabled: m
                } = e, g = (0, o.useModelValues)(e.participant, ["isAdmin"]);
                return r.default.createElement(i, {
                    active: t,
                    contact: n,
                    admin: g.isAdmin,
                    onClick: u ? c : a,
                    theme: d || "drawer-list",
                    contextEnabled: () => null != s && s(n),
                    contextMenu: l,
                    onContext: e => null == c ? void 0 : c(e, n),
                    isPendingParticipant: u,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: m,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p
                })
            };
            var l = n(822652),
                r = a(n(667294)),
                o = n(655241);
            const i = (0, l.ContactFactory)()
        },
        321574: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    docMsgs: t,
                    chat: n,
                    isFilterEnabled: a = !1,
                    filterText: h
                } = e, E = (0, r.default)(e, g), v = (0, m.default)(), b = (0, f.default)((() => new s.default((e => {
                    const t = [],
                        n = (0, o.getText)(e);
                    null != n && t.push(n);
                    const a = e.mediaData.filename;
                    return t.push(a), t.join(" ")
                }))));
                (0, p.useListener)(t, "add", (e => {
                    a && b.current.cacheMessageTokens(e)
                })), (0, p.useListener)(t, "remove", (e => {
                    a && b.current.removeMessageTokensFromCache(e)
                })), (0, p.useListener)(t, "reset", (() => {
                    a && b.current.clearTokensCache()
                })), (0, d.useEffect)((() => {
                    a && t.forEach((e => {
                        b.current.cacheMessageTokens(e)
                    }))
                }), [t, b, a]);
                const y = a ? (e, t) => b.current.filter(e, h, t) : void 0;
                return d.default.createElement(d.default.Fragment, null, d.default.createElement(u.default, (0, l.default)({
                    testid: "doc-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        t.hasDocBefore && v((() => {
                            t.queryDocs(n, e)
                        }))
                    },
                    getHasBefore: () => t.hasDocBefore,
                    getQueryBefore: () => t.queryDocBefore,
                    emptyText: c.fbt._("No Docs", null, {
                        hk: "1MvZZl"
                    }),
                    chat: n,
                    filterMessages: y
                }, E)), d.default.createElement(i.HistorySyncGalleryPlaceholder, {
                    chat: n
                }))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(163755),
                i = n(217714),
                u = a(n(101760)),
                s = a(n(443461)),
                c = n(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                f = a(n(637660)),
                p = n(808446),
                m = a(n(940630));
            const g = ["docMsgs", "chat", "isFilterEnabled", "filterText"];

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        671597: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    linkMsgs: t,
                    chat: n,
                    selectedMessages: a,
                    selectable: C,
                    onMessageSelect: M,
                    isFilterEnabled: _ = !1,
                    filterText: k
                } = e, S = (0, b.default)(), w = (0, E.default)((() => new p.default((e => (0, i.getText)(e)))));
                (0, v.useListener)(t, "add", (e => {
                    _ && w.current.cacheMessageTokens(e)
                })), (0, v.useListener)(t, "remove", (e => {
                    w.current.removeMessageTokensFromCache(e)
                })), (0, v.useListener)(t, "reset", (() => {
                    _ && w.current.clearTokensCache()
                })), (0, h.useEffect)((() => {
                    _ && t.forEach((e => {
                        w.current.cacheMessageTokens(e)
                    }))
                }), [t, w, _]), (0, v.useListener)(n.msgs, "add bulk_add", (e => {
                    if (!e) return;
                    const n = [],
                        a = Array.isArray(e) ? e : [e];
                    Promise.all(a.map((e => ((0, f.getLinksFromMsg)(e).length && n.push(e), Promise.resolve())))).then((() => {
                        n.length && t.add(n)
                    }))
                }));
                const P = _ ? (e, t) => w.current.filter(e, k, t) : void 0,
                    {
                        linkMsgs: O,
                        chat: I,
                        filterText: T,
                        isFilterEnabled: N
                    } = e,
                    A = (0, r.default)(e, y);
                return h.default.createElement(h.default.Fragment, null, h.default.createElement(c.default, (0, l.default)({
                    testid: "link-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        t.hasLinkBefore && S((() => {
                            t.queryLinks(n, e)
                        }))
                    },
                    getHasBefore: () => t.hasLinkBefore,
                    getQueryBefore: () => t.queryLinkBefore,
                    messageElements: (e, t) => ((e, t, n, a, l) => {
                        const r = [];
                        return e.forEach((e => {
                            const i = !(0, d.getIsSentByMe)(e) && (0, d.getIsGroupMsg)(e);
                            let u = null;
                            (0, d.getLinkPreview)(e) && (u = h.default.createElement(m.default, {
                                testid: "link-gallery-msg",
                                key: e.id.toString(),
                                msg: e,
                                selectable: n,
                                selectedMessages: l,
                                onMessageSelect: a,
                                displayType: o.DISPLAY_TYPE.GALLERY_LINKS,
                                onClickMsg: t
                            })), (0, f.getGalleryLinks)(e).forEach(((o, c) => {
                                o.href === e.matchedText && null != u || r.push(h.default.createElement(s.default, {
                                    testid: "link-gallery-msg",
                                    key: `${e.id.toString()}-${c}`,
                                    msg: e.safe(),
                                    link: o,
                                    displayAuthor: i,
                                    selectable: n,
                                    selectedMessages: l,
                                    onMessageSelect: a,
                                    onClickMsg: t
                                }))
                            })), null != u && r.push(u)
                        })), r.reverse(), r
                    })(e, t, C, M, a),
                    emptyText: g.fbt._("No Links", null, {
                        hk: "rFshX"
                    }),
                    chat: n,
                    filterMessages: P
                }, A)), h.default.createElement(u.HistorySyncGalleryPlaceholder, {
                    chat: e.chat
                }))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(356097),
                i = n(163755),
                u = n(217714),
                s = a(n(318787)),
                c = a(n(101760)),
                d = n(787742),
                f = n(44118),
                p = a(n(443461)),
                m = a(n(565644)),
                g = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = a(n(637660)),
                v = n(808446),
                b = a(n(940630));
            const y = ["linkMsgs", "chat", "filterText", "isFilterEnabled"];

            function C(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (C = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        318787: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    msg: t,
                    link: n,
                    displayAuthor: a,
                    selectedMessages: S,
                    onMessageSelect: w,
                    onClickMsg: P,
                    testid: O
                } = e, [I, T, N, A, x, D, L, R, j, B, F, W] = (0, k.useMsgValues)(e.msg.id, [h.getBody, h.getCaption, s.getDir, h.getId, h.getIsSentByMe, s.getMediaData, h.getType, s.getRtl, s.getSenderObj, h.getStar, s.getAsRevoked, h.getIsKept]), [G, H] = (0, M.useState)(!1), [V, U] = (0, M.useState)((() => S.isSelected(t.unsafe())));
                (0, _.useListener)(S, A.toString(), (e => {
                    V !== e && U(e)
                }));
                const z = e.selectable || G ? M.default.createElement(g.default, {
                        checked: V,
                        onClick: e => {
                            e && e.stopPropagation(), w(t.unsafe(), !V)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    q = (0, u.Conversation)({
                        mentions: t.mentionMap(),
                        groupMentions: t.groupMentionMap(),
                        links: (0, E.getLinksFromMsg)(t.unsafe()),
                        phoneNumbers: (0, b.getPhoneNumbersFromMsg)(t.unsafe()),
                        selectable: true,
                        trusted: (0, v.isTrusted)(t.unsafe()),
                        fromMe: A.fromMe,
                        fromChatWid: A.remote
                    }),
                    Y = I && I.includes(n.url) ? I : T,
                    K = a ? M.default.createElement("div", {
                        className: f.default.author
                    }, M.default.createElement(m.default, {
                        msg: t,
                        contact: j
                    })) : null,
                    X = (0, E.getSuspiciousLinks)(t.unsafe()).length > 0;
                return M.default.createElement(c.default, {
                    hover: G,
                    onClick: () => {
                        P(t.unsafe(), !V)
                    },
                    onMouseEnter: G ? null : () => {
                        G || H(!0)
                    },
                    onMouseOver: G ? null : () => {
                        G || H(!0)
                    },
                    onMouseLeave: G ? () => {
                        G && H(!1)
                    } : null,
                    testid: O
                }, M.default.createElement("div", {
                    className: f.default.msg
                }, M.default.createElement(y.default, {
                    transitionName: "delay-leave"
                }, z), M.default.createElement(C.MessageContainer, {
                    isSentByMe: x
                }, M.default.createElement("div", {
                    className: (0, r.classnamesConvertMeToStylexPlease)({
                        [f.default.hasAuthor]: a,
                        [f.default.hasSuspiciousLinks]: X,
                        [f.default.bubble]: !0
                    })
                }, K, M.default.createElement(l.SuspiciousLabel, {
                    link: n,
                    displayType: o.DISPLAY_TYPE.GALLERY
                }), M.default.createElement(p.default, {
                    title: n.url,
                    isSentByMe: x,
                    canonicalUrl: n.domain,
                    displayType: o.DISPLAY_TYPE.GALLERY,
                    star: B,
                    kept: W,
                    isLoading: !1
                }), M.default.createElement(i.EmojiText, {
                    text: Y,
                    selectable: true,
                    className: f.default.text,
                    dirMismatch: R !== d.default.isRTL(),
                    direction: N,
                    formatters: q
                })))))
            };
            var l = n(751349),
                r = n(396574),
                o = n(356097),
                i = n(305521),
                u = n(675886),
                s = n(163755),
                c = a(n(296518)),
                d = a(n(932325)),
                f = a(n(663945)),
                p = a(n(428543)),
                m = a(n(599664)),
                g = a(n(6323)),
                h = n(787742),
                E = n(44118),
                v = n(435711),
                b = n(527530),
                y = a(n(844453)),
                C = n(512873),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                _ = n(808446),
                k = n(871210);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        101760: (e, t, n) => {
            "use strict";
            var a = n(530066).default,
                l = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    getHasBefore: t,
                    getQueryBefore: n,
                    msgsCollection: l,
                    msgsCollectionUpdateEvents: k,
                    emptyText: w,
                    scrollOffset: P = 0,
                    selectable: O,
                    onMessageSelect: I,
                    queryCollection: T,
                    selectedMessages: N,
                    messageElements: A,
                    onProductDetail: x,
                    setScrollOffset: D,
                    filterMessages: L,
                    testid: R
                } = e, j = t(), B = n(), F = (0, h.useRef)(null), W = (0, _.default)(), G = (0, M.default)((e => {
                    j && T(e)
                }), 100), [H, V] = (0, h.useState)((() => l.toArray())), U = (0, M.default)((e => {
                    const t = e.scrollHeight - e.clientHeight - e.scrollTop;
                    j && t < f.SCROLL_FUDGE && G(l.head()), D && D(e.scrollTop)
                }), 100);
                (0, h.useEffect)((() => {
                    j && G();
                    const e = F.current;
                    return e && (e.scrollTop = P), () => {
                        U.cancel()
                    }
                }), []);
                const z = (e, t) => {
                        const n = (0, g.unproxy)(e);
                        O && void 0 !== t ? I(n, t) : u.Cmd.openChatAt((0, p.getChat)(n), (0, i.getSearchContext)((0, p.getChat)(n), n))
                    },
                    q = (0, h.useRef)(),
                    Y = (0, v.default)(),
                    K = (0, h.useCallback)(function() {
                        var e = (0, r.default)((function*(e) {
                            var t;
                            if (null === (t = q.current) || void 0 === t || t.abort(), null == e) return V(l.toArray()), void Y();
                            q.current = new a;
                            const n = q.current.signal;
                            try {
                                const t = yield e(l, n);
                                n.aborted || W.aborted || (V(t), Y())
                            } catch (e) {
                                if (e.name !== o.ABORT_ERROR) throw e
                            }
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [l, Y, W]);
                (0, b.useListener)(l, k, (() => K(L))), (0, h.useEffect)((() => (K(L), () => {
                    var e;
                    return null === (e = q.current) || void 0 === e ? void 0 : e.abort()
                })), [K, L]);
                const [X, {
                    height: Z
                }] = (0, y.default)(), Q = (0, C.default)(X, F);
                (0, h.useEffect)((() => {
                    null != L && t() && !n() && null != F.current && F.current.scrollHeight < Z + f.SCROLL_FUDGE && G(l.head())
                }));
                let $ = null;
                $ = A ? A(H, z) : H.map(((e, t) => h.default.createElement(m.default, {
                    key: `${e.id.toString()}_${t}`,
                    msg: e,
                    selectable: O,
                    selectedMessages: N,
                    onMessageSelect: I,
                    displayType: s.DISPLAY_TYPE.GALLERY,
                    onClickMsg: z,
                    onProductClick: x
                }))).reverse();
                if (B) {
                    if (0 === $.length) return h.default.createElement(c.Loading, null);
                    $.push(h.default.createElement(d.default, {
                        key: -1
                    }))
                }
                if (0 === $.length && !B && !j) return h.default.createElement(c.Empty, {
                    text: w,
                    testid: "no-elements"
                });
                return h.default.createElement("div", {
                    ref: Q,
                    onScroll: e => {
                        U(e.currentTarget)
                    },
                    className: (0, E.default)(S)
                }, $)
            };
            var r = l(n(348926)),
                o = n(898817),
                i = n(713105),
                u = n(780549),
                s = n(356097),
                c = n(811720),
                d = l(n(495012)),
                f = n(914368),
                p = n(163755),
                m = l(n(565644)),
                g = n(163139),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = l(n(156720)),
                v = l(n(969651)),
                b = n(808446),
                y = l(n(695841)),
                C = l(n(38085)),
                M = l(n(286481)),
                _ = l(n(895851));

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }
            const S = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                overflowX: "gfz4du6o",
                overflowY: "rpvcun8f",
                flexGrow: "ggj6brxn"
            }
        },
        285192: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    productMsgs: t,
                    chat: n
                } = e, a = (0, r.default)(e, d), f = (0, c.default)();
                return s.default.createElement(s.default.Fragment, null, s.default.createElement(i.default, (0, l.default)({
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                    queryCollection: e => f((() => {
                        t.queryProducts(n, e)
                    })),
                    getHasBefore: () => t.hasProductBefore,
                    getQueryBefore: () => t.hasProductBefore ? Promise.resolve() : null,
                    emptyText: u.fbt._("No products", null, {
                        hk: "8o7dB"
                    }),
                    chat: n
                }, a)), s.default.createElement(o.HistorySyncGalleryPlaceholder, {
                    chat: n
                }))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(217714),
                i = a(n(101760)),
                u = n(548360),
                s = a(n(667294)),
                c = a(n(940630));
            const d = ["productMsgs", "chat"]
        },
        153316: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGeneralChatParticipantListText = function(e) {
                return e ? l.fbt._("New community members will no longer be automatically added to this group because it is full.", null, {
                    hk: "4gQBxr"
                }) : l.fbt._("New community members will be automatically added to this group, until it is full.", null, {
                    hk: "2XFJsD"
                })
            };
            var l = n(548360);
            a(n(667294))
        },
        495346: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    onEnd: t
                } = e;
                const [n, a] = (0, i.useFlow)(u.Chats, {
                    transitions: i.FlowTransitions.DrawerLeft,
                    onEnd: t
                });
                if (null == a.step) return null;
                let s;
                switch (a.step) {
                    case u.Chats:
                        s = o.default.createElement(l.default, {
                            settings: r.default,
                            onClose: () => {
                                a.pop()
                            }
                        })
                }
                return o.default.createElement(n, {
                    flow: a
                }, s)
            };
            var l = a(n(854534)),
                r = a(n(634152)),
                o = a(n(667294)),
                i = n(839062);
            const u = n(76672).Mirrored(["Chats"])
        },
        339257: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InfoFlow = void 0;
            var l = a(n(348926)),
                r = a(n(81109)),
                o = n(898817),
                i = n(418987),
                u = a(n(670983)),
                s = a(n(229922)),
                c = n(72696),
                d = a(n(55423)),
                f = a(n(791865)),
                p = n(374660),
                m = n(780549),
                g = n(927531),
                h = n(473735),
                E = n(260854),
                v = n(174834),
                b = n(355734),
                y = n(355351),
                C = n(103440),
                M = a(n(655237)),
                _ = n(834110),
                k = a(n(41493)),
                S = n(568550),
                w = n(900316),
                P = a(n(365889)),
                O = a(n(649391)),
                I = a(n(395767)),
                T = a(n(941943)),
                N = n(408256),
                A = n(393609),
                x = a(n(596090)),
                D = n(113269),
                L = a(n(422325)),
                R = n(147550),
                j = a(n(302112)),
                B = n(306472),
                F = n(114850),
                W = a(n(550506)),
                G = n(608637),
                H = a(n(720406)),
                V = n(898297),
                U = n(558173),
                z = a(n(58880)),
                q = n(73225),
                Y = a(n(751046)),
                K = a(n(660508)),
                X = a(n(245272)),
                Z = n(95589),
                Q = a(n(386067)),
                $ = n(932523),
                J = n(77548),
                ee = a(n(614058)),
                te = a(n(632289)),
                ne = n(559016),
                ae = a(n(898707)),
                le = n(242677),
                re = a(n(559893)),
                oe = n(977575),
                ie = n(316348),
                ue = n(555622),
                se = n(126592),
                ce = a(n(979588)),
                de = n(470824),
                fe = n(111971),
                pe = n(238669),
                me = n(377773),
                ge = a(n(804477)),
                he = n(684259),
                Ee = n(455915),
                ve = n(836507),
                be = n(901952),
                ye = n(298187),
                Ce = a(n(556869)),
                Me = n(548360),
                _e = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = Pe(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                ke = n(839062),
                Se = a(n(17533)),
                we = a(n(895851));

            function Pe(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (Pe = function(e) {
                    return e ? n : t
                })(e)
            }
            const Oe = R.InfoFlowStep,
                Ie = e => {
                    var t;
                    if (e.isGroup) return Oe.GroupInfo;
                    if (e.isBroadcast) return Oe.BroadcastInfo;
                    if (e.isUser) return Oe.ContactInfo;
                    if (e.isNewsletter) return Oe.NewsletterInfo;
                    const n = null !== (t = e.kind) && void 0 !== t ? t : "undefined";
                    throw (0, Ce.default)(`Invalid chat provided of kind ${n}`)
                },
                Te = (0, _e.forwardRef)(((e, t) => {
                    var n, a, R;
                    const {
                        chat: Ce,
                        initialStep: Pe = Ie(Ce),
                        showFullGroupDescription: Te,
                        scrollToParticipantList: Ne,
                        profileEntryPoint: Ae,
                        onEnd: xe,
                        displayName: De,
                        sourceGroupChatOrNewsletter: Le,
                        focusNewsletterDescriptionOnMount: Re,
                        newsletterLinkShareScreenEntryPoint: je
                    } = e, Be = (0, _e.useRef)(0), Fe = (0, Se.default)((e => {
                        Be.current = e
                    })), We = (0, _e.useRef)(void 0), Ge = null !== (n = (0, U.useNewsletterGeosuspendedCountries)(Ce)) && void 0 !== n ? n : [], He = null !== (a = (0, U.useNewsletterMessageDeliveryUpdates)(Ce)) && void 0 !== a ? a : [], Ve = (0, V.getNewsletterAlertScreenType)(He, Ge), Ue = (0, _e.useContext)(S.DrawerContext), [ze, qe] = (0, ke.useFlow)(Pe, {
                        transitions: ke.FlowTransitions.DrawerRight,
                        onEnd: xe
                    }), Ye = (0, _e.useRef)(new G.NewsletterAdminFunnelLogger(he.ADMIN_FLOW_TYPE.EDIT)), Ke = (0, _e.useRef)(je), [Xe, Ze] = (0, _e.useState)(null), [Qe, $e] = (0, _e.useState)(void 0), [Je, et] = (0, _e.useState)(null), [tt, nt] = (0, _e.useState)(null), [at, lt] = (0, _e.useState)(null), [rt, ot] = (0, _e.useState)(null), [it, ut] = (0, _e.useState)(null);
                    (0, _e.useEffect)((() => {
                        if (Ce.isGroup)(0, D.queryAndUpdateGroupMetadataById)(Ce.id, "interactive");
                        else if (Ce.isUser) Ce.contact.isBusiness && (0, c.canSeeBizProfileV3)() && w.DrawerManager.setDrawerContext("right", (0, $.buildProductCatalogContext)(new le.ProductCatalogSession, (0, _.getMaybeBizPlatformForLogging)(Ce.contact.id.toString()), Ee.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                        else if (Ce.isNewsletter) {
                            var e;
                            (0, se.queryAndUpdateNewsletterMetadataAction)((0, i.toNewsletterJid)(Ce.id.toString()), {
                                fields: (0, r.default)({
                                    name: !0,
                                    picture: !0,
                                    description: !0,
                                    inviteLink: !0,
                                    handle: !0,
                                    subscribers: !0,
                                    privacy: !0,
                                    verification: !0,
                                    state: !0
                                }, !(null === (e = Ce.newsletterMetadata) || void 0 === e ? void 0 : e.isPreview) && {
                                    muted: !0,
                                    membership: !0
                                })
                            })
                        }
                    }), []);
                    const st = (e, t) => {
                            Ze(e), $e(t), qe.push(Oe.ProductDetail)
                        },
                        ct = e => {
                            et(e), qe.push(Oe.ProductCollection)
                        },
                        dt = e => {
                            Ze(e), qe.push(Oe.ProductLink)
                        },
                        ft = e => {
                            Ze(e), qe.push(Oe.ProductInfo)
                        },
                        pt = (e, t) => {
                            nt(e), lt(t), qe.push(Oe.CatalogLink)
                        },
                        mt = e => {
                            const t = (0, $.getProductCatalogContext)(Ue);
                            (0, d.default)(e, Ce, t) && (ot(e), qe.push(Oe.Cart))
                        },
                        gt = (e, t) => {
                            const n = Ce.id;
                            ue.QPL.markerStart(ie.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                annotations: {
                                    string: {
                                        EntryPoint: t
                                    }
                                }
                            }), (0, J.logCarouselViewMoreClick)({
                                catalogOwnerWid: n,
                                catalogContext: e
                            }), qe.push(Oe.Catalog)
                        },
                        ht = () => {
                            F.ModalManager.open(_e.default.createElement(C.ConfirmPopup, {
                                onOK: () => F.ModalManager.close(),
                                okText: (0, I.default)("OK")
                            }, Me.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })))
                        },
                        Et = (0, we.default)(),
                        vt = function() {
                            var t = (0, l.default)((function*(t) {
                                yield(0, s.default)((0, de.setGroupSubject)(e.chat, t), Et).catch((0, o.catchAbort)((() => {}))).catch((() => {
                                    __LOG__(3)
                                    `name_group_modal:onSetSubject failed`
                                })), F.ModalManager.close(), qe.push(Oe.GroupInviteLink)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        bt = () => {
                            var e;
                            if ((0, p.isInviteGrowthLockedGroup)(Ce)) {
                                var t;
                                const e = !!(null === (t = Ce.groupMetadata) || void 0 === t ? void 0 : t.participants.iAmAdmin());
                                (0, A.openGrowthLockedModal)(e, !0)
                            } else if (null === (e = Ce.groupMetadata) || void 0 === e ? void 0 : e.isUnnamed) {
                                var n, a;
                                const e = Me.fbt._("This group was created without a name. Give it a name to share the group link.", null, {
                                    hk: "1uQedr"
                                });
                                F.ModalManager.open(_e.default.createElement(W.default, {
                                    chat: Ce,
                                    subtext: e,
                                    onCancel: () => F.ModalManager.close(),
                                    onOK: vt,
                                    editable: null === (n = Ce.groupMetadata) || void 0 === n ? void 0 : n.canSetSubject(),
                                    editRestrictionInfo: (null === (a = Ce.groupMetadata) || void 0 === a ? void 0 : a.restrict) ? ht : void 0
                                }))
                            } else qe.push(Oe.GroupInviteLink)
                        },
                        yt = e => {
                            lt(e || Ce.contact), qe.push(Oe.Verification)
                        },
                        Ct = () => {
                            (0, me.shouldShowNUX)(Z.NUX.EPHEMERAL) ? F.ModalManager.open(_e.default.createElement(O.default, {
                                chat: Ce,
                                fromMe: !0,
                                onOk: () => qe.push(Oe.Ephemeral)
                            })): qe.push(Oe.Ephemeral)
                        },
                        Mt = () => {
                            var e;
                            const t = null === (e = Ce.groupMetadata) || void 0 === e ? void 0 : e.parentGroup;
                            t && m.Cmd.openCommunityHome(t, !0)
                        },
                        _t = () => {
                            qe.end(pe.DismissReason.LIFECYCLE)
                        },
                        kt = () => {
                            We.current = void 0, Be.current = 0, qe.push(Oe.MediaGallery)
                        },
                        St = () => {
                            We.current = B.TABS.PRODUCTS, qe.pop()
                        };
                    if (!qe.step) return null;
                    const wt = null != Le ? Le : Ce;
                    let Pt;
                    switch (qe.step) {
                        case Oe.GroupInfo:
                            if ((0, p.isCommunityAnnouncementGroup)(wt) && !(0, p.isDeactivatedCommunityAnnouncementGroup)(wt) && (null === (R = wt.groupMetadata) || void 0 === R ? void 0 : R.participants.iAmMember()) && (0, v.communityTabbedInfoEnabled)()) {
                                var Ot;
                                const e = null === (Ot = wt.groupMetadata) || void 0 === Ot ? void 0 : Ot.parentGroup;
                                Pt = _e.default.createElement(E.CommunityFlowLoadable, {
                                    homeTheme: b.CommunityHomeTheme.TabbedInfo,
                                    initialStep: h.CommunityFlowStep.CommunityHome,
                                    initialTab: y.CommunityInfoTabs.Announcements,
                                    jid: e,
                                    onBack: () => qe.pop()
                                })
                            } else Pt = _e.default.createElement(T.default, {
                                chat: wt,
                                showFullGroupDescription: Te,
                                scrollToParticipantList: Ne,
                                groupMetadata: wt.groupMetadata,
                                contact: wt.contact,
                                profilePicThumb: wt.contact.getProfilePicThumb(),
                                onVerification: yt,
                                onStarred: () => qe.push(Oe.Starred),
                                onKept: () => qe.push(Oe.Kept),
                                onSentForAdminReview: () => qe.push(Oe.SentForAdminReview),
                                onMediaGallery: kt,
                                onAdminSetting: () => qe.push(Oe.GroupSettings),
                                onGroupInviteLink: bt,
                                onPendingParticipants: () => qe.push(Oe.PendingParticipants),
                                onEphemeral: Ct,
                                onCommunityClick: Mt,
                                onClose: () => {
                                    Le ? qe.end() : qe.pop()
                                }
                            });
                            break;
                        case Oe.SentForAdminReview:
                            Pt = _e.default.createElement(ce.default, {
                                chat: Ce,
                                ref: t,
                                onClose: () => qe.pop()
                            });
                            break;
                        case Oe.BroadcastInfo:
                            Pt = _e.default.createElement(f.default, {
                                chat: Ce,
                                contact: Ce.contact,
                                onStarred: () => qe.push(Oe.Starred),
                                onMediaGallery: kt,
                                onClose: () => qe.pop()
                            });
                            break;
                        case Oe.ContactInfo:
                            Pt = _e.default.createElement(M.default, {
                                contact: Ce.contact,
                                onVerification: yt,
                                onStarred: () => qe.push(Oe.Starred),
                                onKept: () => qe.push(Oe.Kept),
                                onMediaGallery: kt,
                                onProductCatalog: gt,
                                onProductDetail: st,
                                onEphemeral: Ct,
                                onClose: () => qe.pop(),
                                profileEntryPoint: Ae,
                                onBack: Le ? () => {
                                    Le.isNewsletter ? qe.push(Oe.NewsletterInfo) : qe.push(Oe.GroupInfo)
                                } : null
                            });
                            break;
                        case Oe.NewsletterInfo:
                            (0, q.isNewsletterEnabled)() && (Pt = _e.default.createElement(Y.default, {
                                chat: wt,
                                newsletterMetadata: wt.newsletterMetadata,
                                profilePicThumb: wt.contact.getProfilePicThumb(),
                                adminFunnelLogger: Ye.current,
                                onClose: () => {
                                    qe.end()
                                },
                                onDeleteNewsletter: () => qe.push(Oe.DeleteNewsletter),
                                onAdminCenter: () => qe.push(Oe.NewsletterAdminCenter),
                                onSettings: () => qe.push(Oe.NewsletterSettings),
                                onShareLink: () => {
                                    Ke.current = ve.CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE, qe.push(Oe.NewsletterLink)
                                },
                                focusDescriptionOnMount: Re
                            }));
                            break;
                        case Oe.NewsletterSettings:
                            (0, q.isNewsletterReactionSettingsEnabled)() && (Pt = _e.default.createElement(X.default, {
                                onBack: () => qe.pop(),
                                newsletter: Ce,
                                adminFunnelLogger: Ye.current
                            }));
                            break;
                        case Oe.NewsletterLink:
                            (0, q.isNewsletterChannelLinkPageEnabled)(Ce) && (Pt = _e.default.createElement(K.default, {
                                entryPoint: Ke.current,
                                onClose: () => {
                                    qe.end()
                                },
                                onBack: qe.previousStep === Oe.NewsletterInfo ? () => qe.pop() : null,
                                newsletter: Ce
                            }));
                            break;
                        case Oe.DeleteNewsletter:
                            Pt = _e.default.createElement(z.default, {
                                chat: Ce,
                                onBack: () => qe.pop()
                            });
                            break;
                        case Oe.NewsletterAdminCenter:
                            Pt = _e.default.createElement(H.default, {
                                chat: Ce,
                                onBack: () => qe.pop(),
                                alertScreen: Ve,
                                entryPoint: g.AlertEntryPoint.INFO_DRAWER
                            });
                            break;
                        case Oe.ProductDetail:
                            Pt = _e.default.createElement(ee.default, {
                                chat: Ce,
                                collectionId: Qe,
                                product: (0, u.default)(Xe, "product"),
                                onEnd: _t,
                                onBack: St,
                                refreshCarousel: !1,
                                onProductLinkClick: dt,
                                onProductMoreInformation: ft,
                                onCartClick: mt
                            });
                            break;
                        case Oe.ProductCollection:
                            {
                                const e = Ce.id;Pt = _e.default.createElement(oe.CollectionContentDrawer, {
                                    contact: Ce.contact,
                                    onProductDetail: st,
                                    catalogId: e,
                                    onBack: () => qe.pop(),
                                    onCatalogLinkClick: pt,
                                    onCartClick: mt,
                                    collection: (0, u.default)(Je, "collection")
                                });
                                break
                            }
                        case Oe.ProductLink:
                            Pt = _e.default.createElement(te.default, {
                                product: (0, u.default)(Xe, "product"),
                                onBack: () => qe.pop()
                            });
                            break;
                        case Oe.ProductInfo:
                            Pt = _e.default.createElement(ae.default, {
                                product: (0, u.default)(Xe, "product"),
                                onBack: St
                            });
                            break;
                        case Oe.CatalogLink:
                            Pt = _e.default.createElement(Q.default, {
                                catalog: (0, u.default)(tt, "catalog"),
                                contact: (0, u.default)(at, "contact"),
                                onBack: () => qe.pop()
                            });
                            break;
                        case Oe.Cart:
                            {
                                const e = (0, $.getProductCatalogContext)(Ue),
                                    t = (0, d.default)((0, u.default)(rt, "cartId"), Ce, e);Pt = (0, u.default)(t, "cartFlow");
                                break
                            }
                        case Oe.Catalog:
                            Pt = _e.default.createElement(re.default, {
                                contact: Ce.contact,
                                onProductDetail: st,
                                catalogId: Ce.id,
                                onBack: () => qe.pop(),
                                businessProfile: Ce.contact.businessProfile,
                                onCatalogLinkClick: pt,
                                onCartClick: mt,
                                onCollectionSeeAll: ct
                            });
                            break;
                        case Oe.ProductList:
                            Pt = _e.default.createElement(ne.ProductListDrawer, {
                                contact: Ce.contact,
                                onProductDetail: st,
                                catalogId: Ce.id,
                                onBack: () => qe.pop(),
                                businessProfile: Ce.contact.businessProfile,
                                onCatalogLinkClick: pt,
                                onCartClick: mt
                            });
                            break;
                        case Oe.Starred:
                            Pt = _e.default.createElement(fe.StarredDrawerLoadable, {
                                chat: Ce,
                                starredMsgs: Ce.getStarredMsgs(),
                                onClose: () => qe.pop()
                            });
                            break;
                        case Oe.Kept:
                            Pt = _e.default.createElement(j.default, {
                                chat: Ce,
                                keptMsgs: Ce.getKeptMsgs(),
                                onClose: () => qe.pop()
                            });
                            break;
                        case Oe.GroupSettings:
                            Pt = _e.default.createElement(L.default, {
                                chat: Ce,
                                groupMetadata: Ce.groupMetadata,
                                onClose: () => qe.pop()
                            });
                            break;
                        case Oe.MediaGallery:
                            Pt = _e.default.createElement(B.MediaGalleryDrawer, {
                                chat: Ce,
                                onBack: () => qe.pop(),
                                onProductDetail: st,
                                setProductsScrollOffset: Fe,
                                initialTab: We.current,
                                productsScrollOffset: Be.current
                            });
                            break;
                        case Oe.GroupInviteLink:
                            Pt = _e.default.createElement(N.GroupInviteLinkDrawerLoadable, {
                                chat: Ce,
                                groupMetadata: (0, u.default)(Ce.groupMetadata, "chat.groupMetadata"),
                                onBack: () => qe.pop(),
                                onGroupSettings: () => qe.push(Oe.GroupSettings)
                            });
                            break;
                        case Oe.PendingParticipants:
                            Pt = _e.default.createElement(x.default, {
                                chat: Ce,
                                onBack: () => qe.pop()
                            });
                            break;
                        case Oe.Verification:
                            Pt = _e.default.createElement(ge.default.VerificationDrawerLoadable, {
                                contact: (0, u.default)(at, "contact"),
                                onClose: () => qe.pop(),
                                isFirstLevel: !1
                            });
                            break;
                        case Oe.DefaultEphemerality:
                            Pt = _e.default.createElement(k.default, {
                                onClose: () => qe.pop(),
                                entryPoint: (0, u.default)(it, "defaultEphemeralityEntryPoint")
                            });
                            break;
                        case Oe.Ephemeral:
                            {
                                const e = Ce.isGroup ? be.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : be.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;Pt = _e.default.createElement(P.default, {
                                    chat: Ce,
                                    showNux: (0, me.shouldShowNUX)(Z.NUX.EPHEMERAL),
                                    entryPoint: ye.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                    onClose: () => qe.pop(),
                                    onCloseNux: () => qe.push(Oe.Ephemeral),
                                    onDDMSettingsClick: () => (ut(e), void qe.push(Oe.DefaultEphemerality))
                                });
                                break
                            }
                    }
                    return _e.default.createElement(ze, {
                        ref: t,
                        flow: qe,
                        displayName: De
                    }, Pt)
                }));
            t.InfoFlow = Te, Te.displayName = "InfoFlow"
        },
        600788: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const {
                    msg: n,
                    highlightedMsgIds: a
                } = e, A = (0, N.default)(), x = (0, T.default)(), D = (0, k.default)(), L = (0, S.default)((() => n.type === g.MSG_TYPE.IMAGE ? new v.UiActionWamEvent({
                    uiActionType: y.UI_ACTION_TYPE.IMAGE_OPEN,
                    uiActionPreloaded: n.mediaData.mediaStage === c.MEDIA_DATA_STAGE.RESOLVED
                }) : null)), R = (0, S.default)((() => (0, o.constructMediaMsgs)((0, u.getChat)(n), n))), j = R.current.length, B = (0, P.default)(j), F = (0, _.useRef)(null), W = (0, _.useRef)(), G = (0, _.useRef)(), H = (0, _.useRef)(null), V = (0, _.useRef)(null), U = (0, _.useRef)(null), [z, q] = (0, _.useState)(n), [Y, K] = (0, _.useState)(!1), [X, Z] = (0, _.useState)(!0), Q = (0, P.default)(z), $ = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = V.current,
                        n = U.current,
                        a = H.current;
                    if (!t || !n || !a) return;
                    let l = 0;
                    a instanceof HTMLElement && (l = a.clientWidth / 2 - t.clientWidth / 2), (0, b.default)(n, "stop");
                    let r = 0;
                    e && (r = 300), (0, b.default)(a, "scroll", {
                        duration: r,
                        container: n,
                        offset: l,
                        axis: "x",
                        easing: [.1, .82, .25, 1]
                    })
                }, J = e => {
                    if (!e) return !0;
                    const {
                        isViewOnce: t
                    } = e, n = (0, m.getIsStickerMsg)(e);
                    return !t && !n
                };
                (0, _.useEffect)((() => {
                    var e;
                    $(), J(n) && (e = V.current) && (0, b.default)(e, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((() => {
                        A.aborted || Z(!1)
                    }))
                }), []), (0, _.useEffect)((() => {
                    j > (null != B ? B : 0) && $()
                }));
                const ee = e => {
                        x((() => {
                            R.current.loadMoreAroundIfNeeded(e)
                        })), q(e)
                    },
                    te = e => {
                        if (e && e.stopPropagation(), Y) return;
                        const t = z;
                        if (!t) return;
                        let a = null;
                        a = R.current.getAfter(t), a ? ee(a) : R.current.hasMediaAfter && (W.current || (W.current = R.current.queryMedia({
                            chat: (0, u.getChat)(n),
                            msg: n,
                            direction: "after"
                        }).then((e => {
                            A.aborted || "number" == typeof e.length && e.length > 0 && z === n && te()
                        })).catch((() => {
                            __LOG__(3)
                            `query media msgs error: `
                        })).finally((() => {
                            W.current = null
                        }))))
                    },
                    ne = e => {
                        if (e && e.stopPropagation(), Y) return;
                        const t = z;
                        if (!t) return;
                        let a = null;
                        a = R.current.getBefore(t), a ? ee(a) : R.current.hasMediaBefore && (G.current || (G.current = R.current.queryMedia({
                            chat: (0, u.getChat)(n),
                            msg: n,
                            direction: "before"
                        }).then((e => {
                            A.aborted || "number" == typeof e.length && e.length > 0 && z === n && ne()
                        })).catch((() => {
                            __LOG__(3)
                            `query media msgs error: `
                        })).finally((() => {
                            G.current = null
                        }))))
                    };
                let ae = null;
                n.type === g.MSG_TYPE.IMAGE && (ae = () => {
                    const e = L.current;
                    var t;
                    e && (Object.assign(e, (0, C.getGroupCountMetricsFromChatWid)(null === (t = (0, u.getChat)(n)) || void 0 === t ? void 0 : t.id)), e.markUiActionT(), e.commit(), L.current = null);
                    (0, M.logUiActionShadowPrivateStatsTestEvents)()
                });
                const le = () => {
                        p.ModalManager.closeMedia()
                    },
                    re = (0, O.default)((() => {
                        q(null), le()
                    })),
                    oe = (null == z ? void 0 : z.isViewOnce) || z && (0, m.getIsStickerMsg)(z);
                (0, w.useListener)(oe ? z : null, "revoked", re);
                const ie = oe ? null : R.current;
                (0, w.useListener)(ie, "remove", ((e, t, n) => {
                    const a = R.current,
                        l = z;
                    if (a.includes(e) || null != l && null != l.id && l.id.toString() !== e.id.toString()) return void D();
                    const o = n.index;
                    0 === a.length ? le() : a.length === o ? ee((0, r.default)(a.at(o - 1), "mediaMsgs.at(index - 1)")) : ee((0, r.default)(a.at(o), "mediaMsgs.at(index)"))
                })), (0, w.useListener)(ie, "reset", (() => {
                    le()
                })), (0, w.useListener)(ie, "query_media_after", (() => {
                    D()
                })), (0, w.useListener)(ie, "query_media_before", (() => {
                    const e = U.current;
                    e && (F.current = e.scrollWidth, e instanceof HTMLElement && D())
                })), (0, w.useListener)(window, "keydown", (e => {
                    if (e.defaultPrevented) return;
                    const t = s.default.isRTL();
                    e.keyCode === l.default.LEFT ? t ? te() : ne() : e.keyCode === l.default.RIGHT && (t ? ne() : te())
                })), (0, _.useEffect)((() => {
                    x((() => {
                        z && R.current.loadMoreAroundIfNeeded(z)
                    }))
                }), [z, R, x]), (0, _.useEffect)((() => {
                    if (Q !== z) $(!0);
                    else {
                        const e = U.current;
                        if (!e || null == F.current || 0 === F.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - F.current), F.current = null
                    }
                }), [z, Q]);
                const ue = (0, I.default)(((e, t, n) => {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            const e = (0, r.default)(t.head(), "mediaMsgs.head()");
                            x((() => {
                                t.queryMedia({
                                    chat: (0, u.getChat)(e),
                                    msg: e
                                }), D()
                            }))
                        }
                        if (t.hasMediaAfter && n + i.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            const e = (0, r.default)(t.last(), "mediaMsgs.last()");
                            x((() => {
                                t.queryMedia({
                                    chat: (0, u.getChat)(e),
                                    msg: e,
                                    direction: "after"
                                }), D()
                            }))
                        }
                    }
                }), 100);
                if (!z) return null;
                if ((0, u.getChat)(n).isSuspendedOrTerminated() && (0, f.isGroupSuspendV2Enabled)()) return void(0, h.openSuspendedGroupMediaDownloadFailureModal)();
                const se = R.current,
                    ce = se.last(),
                    de = se.hasMediaAfter || z !== ce ? te : null,
                    fe = se.head();
                let pe = null;
                return pe = se.hasMediaBefore || z !== fe ? ne : null, pe = se.hasMediaBefore || z !== fe ? ne : null, _.default.createElement("div", {
                    className: Y ? "img-zoomed-in" : null
                }, J(z) && _.default.createElement(E.default, {
                    activeMsg: z,
                    mediaMsgs: R.current,
                    highlightedMsgIds: e.highlightedMsgIds,
                    onSelectThumb: ee,
                    onSetActiveThumb: e => {
                        H.current = e
                    },
                    onScroll: e => {
                        ue(e.currentTarget, R.current, e.currentTarget.scrollLeft)
                    },
                    setRefThumbsContainer: e => {
                        V.current = e
                    },
                    setRefThumbs: e => {
                        U.current = e
                    }
                }), _.default.createElement(d.default, {
                    msg: z,
                    mediaData: z.mediaData,
                    onBack: le,
                    onExitAnimation: () => {
                        var e;
                        J(n) && (e = V.current) && (0, b.default)(e, {
                            opacity: [0, 1],
                            translateY: ["100%", "0%"]
                        }, {
                            duration: 300,
                            easing: [.1, .82, .25, 1]
                        })
                    },
                    onNext: de,
                    onPrev: pe,
                    onImgZoomIn: e => {
                        K(e)
                    },
                    getZoomNode: e.getZoomNode,
                    startTime: e.startTime,
                    isAnimatingIn: X,
                    onImageLoad: ae,
                    msgIndexInAlbum: (() => {
                        let e = -1;
                        if (!a || !z) return e;
                        const t = z.id.toString();
                        if (!a.has(t)) return e;
                        let n = 0;
                        return a.forEach((a => {
                            a === t && (e = n), n++
                        })), e
                    })(),
                    albumSize: (null === (t = e.highlightedMsgIds) || void 0 === t ? void 0 : t.size) || 0
                }))
            };
            var l = a(n(953268)),
                r = a(n(670983)),
                o = n(78810),
                i = n(914368),
                u = n(163755),
                s = a(n(932325)),
                c = n(172259),
                d = a(n(933147)),
                f = n(97858),
                p = n(114850),
                m = n(787742),
                g = n(373070),
                h = n(983271),
                E = a(n(266648)),
                v = n(382117),
                b = a(n(330619)),
                y = n(744976),
                C = n(531737),
                M = n(818674),
                _ = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                k = a(n(969651)),
                S = a(n(637660)),
                w = n(808446),
                P = a(n(49710)),
                O = a(n(17533)),
                I = a(n(286481)),
                T = a(n(940630)),
                N = a(n(895851));

            function A(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (A = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        340576: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requireBundle = t.SendContactsModalLoadable = void 0;
            var l = a(n(348926)),
                r = a(n(114945)),
                o = a(n(97359)),
                i = a(n(205106)),
                u = a(n(261724)),
                s = n(548360),
                c = a(n(667294));
            const d = (0, i.default)((0, l.default)((function*() {
                const e = yield Promise.all([n.e(8295), n.e(1702), n.e(9488), n.e(2790), n.e(275)]).then(n.bind(n, 915132));
                return (0, o.default)(e)
            })), "SendContactsModal");
            t.requireBundle = d;
            const f = (0, r.default)({
                loader: d,
                loading: e => c.default.createElement(u.default, {
                    title: s.fbt._("Send contacts", null, {
                        hk: "9ZMyz"
                    }),
                    error: Boolean(e.error)
                })
            });
            t.SendContactsModalLoadable = f
        },
        854534: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(35234),
                r = n(700071),
                o = n(351053),
                i = n(394164),
                u = n(780549),
                s = n(174834),
                c = n(877171),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(626194),
                m = n(811720),
                g = n(512938),
                h = a(n(570834)),
                E = a(n(335540)),
                v = n(81644),
                b = n(97858),
                y = a(n(237889)),
                C = n(180519),
                M = n(454905),
                _ = n(548360),
                k = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = I(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                S = a(n(156720)),
                w = a(n(637660)),
                P = n(808446),
                O = n(655241);

            function I(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (I = function(e) {
                    return e ? n : t
                })(e)
            }
            const T = {
                    borderBottom: "qmxv8cnq",
                    backgroundColor: "s9raicp8"
                },
                N = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                A = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "h5uqwbaf",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "kjjye8e3",
                    textAlign: "ljrqcn24"
                },
                x = {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                D = (0, r.ChatFactory)(),
                L = (0, g.FlatListFactory)();

            function R(e, t) {
                const {
                    onClose: n
                } = e, a = () => o.ChatCollection.filter((e => e.archive && e.shouldAppearInList)), g = (0, O.useModelValues)(e.settings, ["showArchiveV2", "archive"]), I = (0, w.default)((() => new h.default)), R = (0, w.default)((() => new y.default([], (e => e.id.toString())))), j = (0, k.useRef)(null), [B, F] = (0, k.useState)(a), W = () => (0, b.archiveV2Supported)() && g.showArchiveV2;
                (0, P.useListener)(o.ChatCollection, [W() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (() => {
                    F(a())
                }));
                const G = e => {
                    R.current.setVal(e, !1)
                };
                (0, P.useListener)(u.Cmd, "close_chat", (e => {
                    e === R.current.getVal() && R.current.unset()
                })), (0, P.useListener)(u.Cmd, "update_chatlist_selection", G);
                (0, k.useEffect)((() => {
                    if (W()) {
                        const e = a(),
                            t = new Map;
                        e.forEach((e => {
                            e.archiveAtMentionViewedInDrawer = !0, t.set(e.id.toString(), !0)
                        })), (0, l.updateChatArchiveDrawer)(t)
                    }
                    j.current && E.default.focus(j.current);
                    const e = o.ChatCollection.toArray().find((e => e.active && e.archive));
                    e && G(e)
                }), []);
                const H = () => {
                        n()
                    },
                    V = (e, t) => {
                        u.Cmd.openChatFromUnread(t).then((e => {
                            e && c.ComposeBoxActions.focus(t)
                        })), (0, b.archiveV2Supported)() && g.archive.enabled || H()
                    },
                    U = e => {
                        e.preventDefault(), e.stopPropagation(), R.current.setNext(!0)
                    },
                    z = e => {
                        e.preventDefault(), e.stopPropagation(), R.current.setPrev(!0)
                    };
                let q, Y;
                if (R.current.init(B, !0), (() => {
                        const e = o.ChatCollection.some((e => e.archive));
                        return (0, b.archiveV2Supported)() && e
                    })()) {
                    const e = _.fbt._("These chats stay archived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2GTpJ"
                        }),
                        t = _.fbt._("These chats are unarchived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                            hk: "2QaWm0"
                        });
                    q = k.default.createElement("div", {
                        className: (0, S.default)(T)
                    }, k.default.createElement("div", {
                        className: (0, S.default)(N)
                    }, k.default.createElement("div", {
                        className: (0, S.default)(A)
                    }, k.default.createElement(C.WDSTextMuted, {
                        as: "p"
                    }, g.showArchiveV2 ? e : t))))
                }
                Y = B.length > 0 ? k.default.createElement(v.HotKeys, {
                    ref: j,
                    handlers: {
                        down: U,
                        up: z
                    }
                }, q, k.default.createElement(L, {
                    className: (0, S.default)(x),
                    data: B.map((e => ({
                        itemKey: e.id.toString(),
                        chat: e,
                        height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? i.SUBGROUP_V2_CHAT_CELL_HEIGHT : void 0
                    }))),
                    flatListController: I.current,
                    direction: "vertical",
                    renderItem: e => k.default.createElement(D, {
                        chat: e.chat,
                        mode: r.Mode.LAST,
                        active: R.current,
                        onClick: V,
                        hideArchivedIcon: (0, b.archiveV2Supported)() && g.archive.enabled,
                        hideMuteIcon: W(),
                        hideMuteOption: W(),
                        ephemeralIcon: "chat-list",
                        showCommunityInfo: !0
                    })
                })) : k.default.createElement(m.Archived, null);
                const K = (0, b.archiveV2Supported)() && g.archive.enabled ? _.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : _.fbt._("Archived chats", null, {
                    hk: "23HH3O"
                });
                return k.default.createElement(d.default, {
                    ref: t,
                    theme: "archived"
                }, k.default.createElement(p.DrawerHeader, {
                    title: K,
                    onBack: H,
                    type: (0, M.topMenuRedesignEnabled)() ? p.DRAWER_HEADER_TYPE.TAB : p.DRAWER_HEADER_TYPE.LARGE,
                    menu: null
                }), k.default.createElement(f.default, {
                    flatListControllers: [I.current]
                }, Y))
            }
            var j = (0, k.forwardRef)(R);
            t.default = j
        },
        201833: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContactInfoBizBot1pSection = function() {
                const e = d.default.createElement(s.TextSpan, {
                        theme: "title"
                    }, c.fbt._("AI from Meta", null, {
                        hk: "3vj17i"
                    })),
                    t = d.default.createElement(s.TextDiv, {
                        theme: "muted"
                    }, c.fbt._("AI from Meta receives chats and generates messages for this business. Click to learn more.", null, {
                        hk: "3iYvrS"
                    })),
                    n = d.default.createElement(l.AiSignalIcon, {
                        color: u.SvgColorProp.SECONDARY,
                        width: 20,
                        height: 20
                    });
                return d.default.createElement(o.default, {
                    onClick: () => {
                        i.ModalManager.open(d.default.createElement(r.BizBot1pLearnMore, null))
                    },
                    icon: n,
                    title: e,
                    secondaryTitle: t
                })
            };
            var l = n(321545),
                r = n(461012),
                o = a(n(306007)),
                i = n(114850),
                u = n(220584),
                s = n(180519),
                c = n(548360),
                d = a(n(667294))
        },
        302112: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(348926)),
                r = n(698867),
                o = n(751461),
                i = n(356097),
                u = n(811720),
                s = n(978752),
                c = a(n(75531)),
                d = n(281134),
                f = n(982015),
                p = n(280511),
                m = n(548360),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                h = a(n(156720));

            function E(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (E = function(e) {
                    return e ? n : t
                })(e)
            }
            const v = {
                paddingTop: "s7fqlky6",
                paddingEnd: "iffbo4e8",
                paddingBottom: "q1tx93la",
                paddingStart: "e8k79tju",
                fontSize: "ovllcyds",
                lineHeight: "durt31hz",
                color: "amgz1mtg"
            };

            function b(e, t) {
                const {
                    keptMsgs: n,
                    onClose: a,
                    chat: E
                } = e, [b, y] = (0, s.useKicNux)(E);
                (0, g.useEffect)((() => {
                    b && y(p.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
                }), []), (0, g.useEffect)((() => {
                    (0, l.default)((function*() {
                        const e = new o.DisappearingMessageKeepInChatWamEvent({
                            kicActionName: d.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                            kicEntryPoint: f.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                            messagesInFolder: n.length,
                            isAGroup: null == E ? void 0 : E.isGroup
                        });
                        var t;
                        (null == E ? void 0 : E.isGroup) && e.set({
                            isAdmin: null == E || null === (t = E.groupMetadata) || void 0 === t ? void 0 : t.participants.iAmAdmin()
                        });
                        if (E) {
                            const t = yield(0, r.getChatThreadID)(null == E ? void 0 : E.id.toJid());
                            null != t && e.set({
                                threadId: t
                            })
                        }
                        e.commit()
                    }))()
                }), []);
                const C = m.fbt._("Kept messages", null, {
                        hk: "iGco8"
                    }),
                    M = g.default.createElement(u.KeptMsgs, null);
                let _ = null;
                var k;
                (null == E ? void 0 : E.isGroup) ? _ = (null === (k = E.groupMetadata) || void 0 === k ? void 0 : k.restrict) ? g.default.createElement("div", {
                    className: (0, h.default)(v)
                }, m.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                    hk: "2P8fIj"
                })) : g.default.createElement("div", {
                    className: (0, h.default)(v)
                }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                    hk: "3VYBCh"
                })): _ = g.default.createElement("div", {
                    className: (0, h.default)(v)
                }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                    hk: "3sFKOP"
                }));
                return g.default.createElement(c.default, {
                    testid: "kept-drawer",
                    ref: t,
                    msgCollection: n,
                    onClose: a,
                    chat: E,
                    title: C,
                    emptyListText: M,
                    descriptionSection: _,
                    displayType: i.DISPLAY_TYPE.KEPT_MSGS
                })
            }
            var y = (0, g.forwardRef)(b);
            t.default = y
        },
        306472: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TABS = t.MediaGalleryDrawer = void 0;
            var l = a(n(252628)),
                r = n(328620),
                o = a(n(638938)),
                i = n(409623),
                u = a(n(321574)),
                s = a(n(908081)),
                c = a(n(324093)),
                d = n(626194),
                f = a(n(671597)),
                p = a(n(482530)),
                m = n(97858),
                g = n(913257),
                h = a(n(930440)),
                E = a(n(285192)),
                v = a(n(434377)),
                b = n(392632),
                y = a(n(844453)),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                _ = a(n(156720)),
                k = a(n(261716)),
                S = a(n(637660));

            function w(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (w = function(e) {
                    return e ? n : t
                })(e)
            }
            const P = {
                    display: "p357zi0d",
                    flexGrow: "ggj6brxn",
                    flexShrink: "m0h2a7mj",
                    flexBasis: "rjo8vgbg",
                    flexDirection: "f8m0rgwh",
                    height: "ppled2lx"
                },
                O = {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                I = n(76672)({
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                });
            t.TABS = I;
            const T = e => {
                    const {
                        selected: t,
                        onSearch: n
                    } = e;
                    switch (t) {
                        case I.MEDIA:
                        case I.LINKS:
                        case I.DOCS:
                            return M.default.createElement(i.ListSearch, {
                                onSearch: n,
                                loading: !1,
                                listFilterEnabled: !1,
                                chatlistFilterEnabled: !1,
                                mode: o.default.Chatlist,
                                placeholder: C.fbt._("Search", null, {
                                    hk: "418EDN"
                                })
                            });
                        default:
                            return null
                    }
                },
                N = e => {
                    switch (e.selectedTab) {
                        case I.MEDIA:
                            return M.default.createElement(p.default, {
                                chat: e.chat,
                                mediaMsgs: e.chat.getMediaMsgs(),
                                selectable: e.selectable,
                                onMessageSelect: e.onMessageSelect,
                                selectedMessages: e.selectedMessages,
                                fullCollection: !0,
                                isFilterEnabled: e.isFilterEnabled,
                                filterText: e.filterText
                            });
                        case I.LINKS:
                            return M.default.createElement(f.default, {
                                chat: e.chat,
                                linkMsgs: e.chat.getLinkMsgs(),
                                selectable: e.selectable,
                                onMessageSelect: e.onMessageSelect,
                                selectedMessages: e.selectedMessages,
                                isFilterEnabled: e.isFilterEnabled,
                                filterText: e.filterText
                            });
                        case I.DOCS:
                            return M.default.createElement(u.default, {
                                chat: e.chat,
                                docMsgs: e.chat.getDocMsgs(),
                                selectable: e.selectable,
                                onMessageSelect: e.onMessageSelect,
                                selectedMessages: e.selectedMessages,
                                isFilterEnabled: e.isFilterEnabled,
                                filterText: e.filterText
                            });
                        case I.PRODUCTS:
                            return M.default.createElement(E.default, {
                                chat: e.chat,
                                productMsgs: e.chat.getProductMsgs(),
                                selectable: e.selectable,
                                onMessageSelect: e.onMessageSelect,
                                selectedMessages: e.selectedMessages,
                                onProductDetail: e.onProductDetail,
                                setScrollOffset: e.setScrollOffset,
                                scrollOffset: e.scrollOffset
                            })
                    }
                };
            const A = (0, M.forwardRef)(((e, t) => {
                const {
                    chat: n,
                    onProductDetail: a,
                    setProductsScrollOffset: o,
                    initialTab: i = I.MEDIA,
                    productsScrollOffset: u = 0
                } = e, [f, p] = (0, M.useState)(i), [E, w] = (0, M.useState)(null), [A, x] = (0, M.useState)(!1), [D, L] = (0, k.default)(), R = (0, m.mediaLinksDocsFilteringEnabled)(), j = (0, S.default)((() => new h.default([], (e => e.id.toString())))), B = () => {
                    A && (j.current.unsetAll(), x(!1))
                }, F = (0, M.useCallback)((e => {
                    const t = I.cast(e);
                    if (null == t) return;
                    const n = (0, l.default)(I).indexOf(f),
                        a = (0, l.default)(I).indexOf(t);
                    n !== a && j.current.unsetAll(), p(t), w(a > n ? "right" : "left"), x(!1)
                }), [j, f]), W = (0, M.useMemo)((() => {
                    const e = [{
                        id: I.MEDIA,
                        title: C.fbt._("Media", null, {
                            hk: "2BqnhF"
                        })
                    }, {
                        id: I.DOCS,
                        title: C.fbt._("Docs", null, {
                            hk: "M40SP"
                        })
                    }, {
                        id: I.LINKS,
                        title: C.fbt._("Links", null, {
                            hk: "3uaiIi"
                        })
                    }];
                    return e.push({
                        id: I.PRODUCTS,
                        title: C.fbt._("Products", null, {
                            hk: "3Ky71N"
                        })
                    }), M.default.createElement(v.default, {
                        tabConfigs: e,
                        selectedId: f,
                        onSelect: F,
                        testIdPrefix: "gallery-tab"
                    })
                }), [f, F]), G = function(e) {
                    switch (e) {
                        case I.MEDIA:
                            return g.MultiSelectBarEntryPoint.MEDIA;
                        case I.DOCS:
                            return g.MultiSelectBarEntryPoint.DOCS;
                        case I.LINKS:
                            return g.MultiSelectBarEntryPoint.LINKS;
                        case I.PRODUCTS:
                            return g.MultiSelectBarEntryPoint.PRODUCTS
                    }
                }(f), H = [I.MEDIA, I.DOCS].includes(f), V = A ? M.default.createElement(b.UIE, {
                    displayName: "MediaMultiSelect",
                    escapable: !0,
                    requestDismiss: B
                }, M.default.createElement(g.MultiSelectBar, {
                    chat: n,
                    noSortOnForward: !0,
                    theme: "mediaGallery",
                    toastPosition: r.ToastPosition.RIGHT,
                    downloadButton: H,
                    selectedMessages: j.current,
                    onCancel: B,
                    entryPoint: G
                })) : null, U = "right" === E ? "slide-forward" : "slide-back";
                return M.default.createElement(s.default, {
                    ref: t,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    tsNavigationData: {
                        surface: "media-drawer"
                    }
                }, M.default.createElement(d.DrawerHeader, {
                    title: " ",
                    onBack: e.onBack,
                    rtlFixIfOnDarwin: !0,
                    type: d.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY,
                    focusBackOrCancel: !0
                }), V, W, R ? M.default.createElement(T, {
                    selected: f,
                    onSearch: L
                }) : null, M.default.createElement(c.default, {
                    "data-list-scroll-container": !0
                }, M.default.createElement(y.default, {
                    transitionName: U,
                    className: (0, _.default)(P)
                }, M.default.createElement("div", {
                    className: (0, _.default)(O),
                    key: f
                }, M.default.createElement("div", {
                    className: (0, _.default)(P)
                }, M.default.createElement(N, {
                    chat: n,
                    selectable: A,
                    onMessageSelect: (e, t) => {
                        A || x(!0), j.current.setVal(e, t), 0 === j.current.getSelected().length && B()
                    },
                    selectedMessages: j.current,
                    fullCollection: !0,
                    isFilterEnabled: R,
                    filterText: D,
                    onProductDetail: a,
                    setScrollOffset: o,
                    scrollOffset: u,
                    selectedTab: f,
                    mediaMsgs: n.getMediaMsgs(),
                    linkMsgs: n.getLinkMsgs(),
                    docMsgs: n.getDocMsgs(),
                    productMsgs: n.getProductMsgs()
                }))))))
            }));
            t.MediaGalleryDrawer = A, A.displayName = "MediaGalleryDrawer"
        },
        266466: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const [t, n] = (0, s.useState)(!1);
                let a, d;
                e.isBusiness ? (a = u.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                    hk: "1N7YEc"
                }), d = u.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : (a = u.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                    hk: "2qS1tP"
                }), d = u.fbt._("Block contact", null, {
                    hk: "41X9mL"
                }));
                return s.default.createElement(r.ConfirmPopup, {
                    onOK: function() {
                        e.onReport(t)
                    },
                    okText: u.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: e.onCancel,
                    title: e.title
                }, s.default.createElement("div", {
                    className: (0, c.default)(f.section, i.uiMargin.top12, i.uiMargin.end0, f.border)
                }, s.default.createElement(l.CheckBox, {
                    onChange: () => n((e => !e)),
                    checked: t,
                    id: "menu-icon-report-spam"
                }), s.default.createElement(o.TextLabel, {
                    xstyle: f.checkboxLabel,
                    htmlFor: "menu-icon-report-spam"
                }, d)), s.default.createElement(o.TextParagraph, {
                    xstyle: f.section,
                    color: "muted"
                }, a))
            };
            var l = n(468926),
                r = n(103440),
                o = n(180519),
                i = n(676345),
                u = n(548360),
                s = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                c = a(n(156720));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
            const f = {
                section: {
                    marginBottom: "t4zgqcuo"
                },
                checkboxLabel: {
                    marginStart: "fooq7fky"
                },
                border: {
                    paddingBottom: "dledyozo",
                    borderBottom: "j4zbmt6h"
                }
            }
        },
        755140: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = a.ChatCollection.getActive();
                (0, p.useEffect)((() => {
                    e.entryPoint && (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, e.entryPoint)
                }), [e.entryPoint]);
                const n = f.fbt._("Request phone number?", null, {
                        hk: "1BOtdo"
                    }),
                    m = f.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                        hk: "3SHZ6I"
                    }),
                    g = f.fbt._("Send Request", null, {
                        hk: "4tsuDY"
                    }),
                    h = f.fbt._("Cancel", null, {
                        hk: "37A1CY"
                    });
                return p.default.createElement(l.ConfirmPopup, {
                    onOK: () => {
                        t && ((0, i.sendRequestPhoneNumber)((0, u.unproxy)(t)), null != e.entryPoint && (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.SEND_REQUEST, e.entryPoint)), o.ModalManager.close()
                    },
                    okText: g,
                    onCancel: () => o.ModalManager.close(),
                    cancelText: h,
                    title: n
                }, m)
            };
            var a = n(351053),
                l = n(103440),
                r = n(543081),
                o = n(114850),
                i = n(942319),
                u = n(163139),
                s = n(334724),
                c = n(1373),
                d = n(262553),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        735848: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return y.default.createElement(r.ConfirmPopup, {
                    title: b.fbt._("About AI Support Assistant", null, {
                        hk: "13m6JU"
                    }),
                    okText: (0, u.default)("Ok"),
                    onOK: () => d.ModalManager.close(),
                    cancelText: (0, u.default)("Learn more"),
                    onCancel: () => {
                        (0, o.openExternalLink)((0, i.getSagaFaqUrl)())
                    }
                }, y.default.createElement(s.FlexColumn, {
                    align: "stretch"
                }, y.default.createElement(c.default, {
                    xstyle: h.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(f.SagaHelpIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(v.WDSTextTitle, null, b.fbt._("AI uses official help content", null, {
                        hk: "gpKd"
                    })),
                    secondary: y.default.createElement(v.WDSTextMuted, {
                        textWrap: "wrap"
                    }, b.fbt._("AI assistant uses WhatsApp help content to generate answers for your questions.", null, {
                        hk: "1iUEXr"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: h.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(p.SagaMessageIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(v.WDSTextTitle, null, b.fbt._("AI chats naturally with you", null, {
                        hk: "1ulA6D"
                    })),
                    secondary: y.default.createElement(v.WDSTextMuted, {
                        textWrap: "wrap"
                    }, b.fbt._("You can simply chat with AI assistant in a natural conversation to get your questions answered.", null, {
                        hk: "3EHsmT"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: h.uiMargin.top10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(l.AiSignalIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER,
                        height: 24,
                        width: 24
                    }),
                    primary: y.default.createElement(v.WDSTextTitle, null, b.fbt._("This is a service from Meta", null, {
                        hk: "qUAif"
                    })),
                    secondary: y.default.createElement(v.WDSTextMuted, {
                        textWrap: "wrap"
                    }, b.fbt._("Some messages are generated by AI using a secure service from Meta. They are marked with {icon}.", [b.fbt._param("icon", y.default.createElement(m.default, {
                        height: 16,
                        width: 16
                    }))], {
                        hk: "jNDS3"
                    }))
                }))))
            };
            var l = n(321545),
                r = n(103440),
                o = n(753233),
                i = n(258105),
                u = a(n(395767)),
                s = n(690495),
                c = a(n(469733)),
                d = n(114850),
                f = n(217864),
                p = n(373732),
                m = a(n(61476)),
                g = n(220584),
                h = n(676345),
                E = n(219753),
                v = n(851488),
                b = n(548360),
                y = a(n(667294))
        },
        9729: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return {
                    isVoiceCallEnabled: !1,
                    isVideoCallEnabled: !1,
                    canStartVoiceCall: !1,
                    canStartVideoCall: !1,
                    startVoiceCall: () => {},
                    startVideoCall: () => {}
                }
            };
            n(445729), n(660666), n(667294), n(808446)
        },
        791865: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(896322)),
                r = a(n(35644)),
                o = (a(n(306007)), n(464659)),
                i = a(n(740681)),
                u = n(63014),
                s = n(780549),
                c = n(184385),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(36045),
                m = n(626194),
                g = a(n(209064)),
                h = n(673509),
                E = a(n(409558)),
                v = n(258105),
                b = a(n(570834)),
                y = n(97858),
                C = n(114850),
                M = n(111367),
                _ = (n(407024), n(163139)),
                k = (n(220584), n(180519)),
                S = n(521394),
                w = n(548360),
                P = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = D(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                O = a(n(156720)),
                I = a(n(969651)),
                T = a(n(637660)),
                N = n(808446),
                A = n(655241),
                x = a(n(321201));

            function D(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (D = function(e) {
                    return e ? n : t
                })(e)
            }
            const L = {
                flexGrow: "tvf2evcx",
                flexShrink: "oq44ahr5",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function R(e, t) {
                var n, a;
                const {
                    onClose: D,
                    onMediaGallery: R
                } = e, j = (0, I.default)(), B = (0, x.default)(), F = (0, T.default)((() => new b.default)), W = (0, A.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, N.useListener)(null === (n = W.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], j);
                let G = null;
                R && (G = P.default.createElement(i.default, {
                    onMediaGallery: R,
                    chat: (0, _.unproxy)(W)
                }));
                const H = P.default.createElement(o.ChatInfoDrawerButtonsSection, null, P.default.createElement(p.DrawerButtonSimple, {
                    testid: "li-delete-broadcast",
                    icon: P.default.createElement(c.DeleteIcon, null),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        s.Cmd.deleteOrExitChat((0, _.unproxy)(W))
                    }
                }, w.fbt._("Delete broadcast list", null, {
                    hk: "3xAxXY"
                })));
                let V;
                (null === (a = W.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (V = u.Clock.createdStr(W.groupMetadata.creation), V = P.default.createElement(k.TextDiv, {
                    theme: "small"
                }, V)) : V = null;
                const U = P.default.createElement(E.default, {
                    highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: () => {
                        if ((0, y.isPrivacyNarrativeV1Enabled)() && (0, M.shouldShowNewE2eInfoModal)((0, _.unproxy)(W))) {
                            const e = (0, v.getE2EFaqUrl)();
                            C.ModalManager.open(P.default.createElement(h.E2eInfoModalV2, {
                                highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: e
                            }))
                        } else C.ModalManager.open(P.default.createElement(g.default, {
                            highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                            chatId: W.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: w.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                });
                return P.default.createElement(d.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped"
                }, P.default.createElement(m.DrawerHeader, {
                    type: m.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        D ? D() : null == B || B.requestDismiss()
                    }
                }, P.default.createElement(k.TextDiv, {
                    theme: "title"
                }, w.fbt._("Broadcast list info", null, {
                    hk: "3S4EgV"
                })), V), P.default.createElement(f.default, {
                    flatListControllers: [F.current]
                }, P.default.createElement("div", {
                    className: (0, O.default)(L)
                }, P.default.createElement(r.default, {
                    chat: (0, _.unproxy)(W)
                }), G, undefined, P.default.createElement(o.ChatInfoDrawerSection, null, U), P.default.createElement(l.default, {
                    chat: (0, _.unproxy)(W),
                    flatListController: F.current
                }), H)))
            }
            var j = (0, P.forwardRef)(R);
            t.default = j
        },
        896322: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n;
                const a = (0, m.default)(),
                    c = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, g.useListener)(c, "add remove reset", a);
                const h = (0, p.useMemo)((() => c ? c.map((e => ({
                        itemKey: e.id.toString(),
                        participant: e,
                        height: 68
                    }))) : []), [c]),
                    v = (e, t) => {
                        (0, f.isMePrimary)(t.id) || (0, s.findChat)(t.id, "broadcastInfoRecipients").then((function(e) {
                            o.Cmd.openChatFromUnread(e).then((t => {
                                t && i.ComposeBoxActions.focus(e)
                            }))
                        }))
                    },
                    b = null !== (n = null == c ? void 0 : c.length) && void 0 !== n ? n : 0,
                    y = d.default.t(279, {
                        count: b,
                        _plural: b
                    });
                return p.default.createElement(r.ChatInfoDrawerListSection, {
                    title: y
                }, p.default.createElement(E, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: h,
                    renderItem: e => {
                        const {
                            participant: t
                        } = e, n = u.ContactCollection.gadd(t.id);
                        return p.default.createElement(l.Contact, {
                            contact: n,
                            theme: "chat-info",
                            admin: !!t.isAdmin,
                            onClick: v,
                            key: t.id.toString(),
                            waitIdle: !0
                        })
                    }
                }))
            };
            var l = n(822652),
                r = n(464659),
                o = n(780549),
                i = n(877171),
                u = n(177938),
                s = n(581354),
                c = n(512938),
                d = a(n(932325)),
                f = n(459857),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = a(n(969651)),
                g = n(808446);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
            const E = (0, c.FlatListFactory)()
        },
        35644: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n;
                const a = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    b = (0, h.useModelValues)(e.chat.contact, ["name"]),
                    y = (0, m.default)();
                (0, g.useListener)(a, "add remove reset", y);
                const C = null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0,
                    M = d.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + u.default.t(279, {
                        count: C,
                        _plural: C
                    }),
                    _ = b.name ? f.default.createElement(s.Name, {
                        contact: e.chat.contact,
                        selectable: !0
                    }) : d.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                return f.default.createElement(o.default, {
                    theme: "padding-large"
                }, f.default.createElement("div", {
                    className: (0, p.default)(E)
                }, f.default.createElement(r.DetailImage, {
                    id: e.chat.id,
                    size: r.DetailImageSize.Large
                })), f.default.createElement(i.FlexColumn, {
                    align: "center"
                }, f.default.createElement(c.TextHeader, {
                    level: "2",
                    size: "24"
                }, _), f.default.createElement("div", {
                    className: (0, p.default)(v)
                }, f.default.createElement(l.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, f.default.createElement(c.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, M)))))
            };
            var l = n(306703),
                r = n(23641),
                o = a(n(969358)),
                i = n(690495),
                u = a(n(932325)),
                s = n(21645),
                c = n(180519),
                d = n(548360),
                f = a(n(667294)),
                p = a(n(156720)),
                m = a(n(969651)),
                g = n(808446),
                h = n(655241);
            const E = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                v = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                }
        },
        988808: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    contact: t
                } = e;
                const {
                    status: n
                } = (0, g.useModelValues)(t.getStatus(), ["status"]), a = (0, g.useOptionalModelValues)(t, ["id", "textStatusString", "textStatusEmoji", "textStatusExpiryTs", "textStatusEphemeralDuration", "textStatusLastUpdateTime"]);
                if (f.default.isPSA(t.id)) {
                    const e = (0, u.isBlueEnabled)() ? p.fbt._("Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.", null, {
                        hk: "Q5o0r"
                    }).toString() : p.fbt._('Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.', null, {
                        hk: "8bwzI"
                    }).toString();
                    return m.default.createElement(l.ChatInfoDrawerSection, {
                        titleTestId: "section-about",
                        title: ""
                    }, m.default.createElement(s.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, p.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                        hk: "1fpFwJ"
                    }).toString(), m.default.createElement("br", null), p.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                        hk: "4gcJHK"
                    }).toString(), m.default.createElement("br", null), e), m.default.createElement("br", null), m.default.createElement("br", null), m.default.createElement(i.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: h.whatsapp_url
                    }, "https://whatsapp.com/"))
                }
                const E = (0, d.shouldDisplayTextStatus)(null == a ? void 0 : a.textStatusString, null == a ? void 0 : a.textStatusEmoji, null == a ? void 0 : a.textStatusEphemeralDuration, null == a ? void 0 : a.textStatusLastUpdateTime, null == a ? void 0 : a.textStatusExpiryTs);
                if ((0, c.receiveTextStatusEnabled)() && (null == a ? void 0 : a.textStatusLastUpdateTime) !== d.TEXT_STATUS_NOT_FETCHED && !E || !(0, c.receiveTextStatusEnabled)() && "" === n) return null;
                let v = p.fbt._("About", null, {
                    hk: "4qoAfH"
                });
                (0, c.receiveTextStatusEnabled)() && !0 === E && (v = p.fbt._("", null, {
                    hk: "dWrS1"
                }));
                return m.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: v
                }, m.default.createElement(s.TextSpan, {
                    theme: "title",
                    size: "16"
                }, (0, c.receiveTextStatusEnabled)() ? m.default.createElement(o.default, {
                    contactId: t.id
                }) : m.default.createElement(r.default, {
                    id: t.id
                })))
            };
            var l = n(464659),
                r = a(n(203528)),
                o = a(n(717304)),
                i = n(753233),
                u = n(97858),
                s = n(180519),
                c = n(491805),
                d = n(596328),
                f = a(n(124928)),
                p = n(548360),
                m = a(n(667294)),
                g = (a(n(156720)), n(655241));
            const h = {
                whatsapp_url: {
                    color: "hafg4y3t"
                }
            }
        },
        876588: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const [t] = (0, E.useContactValues)(e.contact.id, [p.getCommonGroups]), [n, a] = (0, h.useState)(!0);
                (0, h.useEffect)((() => {
                    (0, d.findCommonGroups)(e.contact).catch((e => {
                        throw __LOG__(4, !0, new Error, !0)
                        `get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + e), (0, m.default)("get from participants table failed")
                    }))
                }), []);
                const f = (0, v.default)(t, ["add", "remove"], (() => {
                        if (!t) return [];
                        let e = t;
                        return e.length > o.INFO_DRAWER_MAX_ROWS && n && (e = e.slice(0, o.INFO_DRAWER_MAX_ROWS)), e.map((e => ({
                            itemKey: e.id.toString(),
                            chat: e,
                            height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? r.SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                        })))
                    }), [n]),
                    b = () => {
                        a(!1)
                    },
                    C = (t, n) => {
                        u.Cmd.openChatFromUnread(n).then((e => {
                            e && c.ComposeBoxActions.focus(n)
                        })), e.onClose()
                    };
                if (!t || 0 === t.length) return null;
                let M;
                if (t.length > o.INFO_DRAWER_MAX_ROWS && n) {
                    const e = t.length - o.INFO_DRAWER_MAX_ROWS;
                    M = h.default.createElement(i.default, {
                        numMore: e,
                        onClick: b
                    })
                }
                const _ = g.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [g.fbt._plural(t.length, "number")], {
                    hk: "2bl4a5"
                });
                return h.default.createElement(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: _
                }, h.default.createElement(y, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: f,
                    renderItem: e => {
                        const {
                            chat: t
                        } = e;
                        return h.default.createElement(l.Chat, {
                            chat: t,
                            theme: "chat-info",
                            mode: l.Mode.INFO,
                            onClick: C,
                            key: t.id.toString(),
                            showCommunityInfo: !0
                        })
                    }
                }), M)
            };
            var l = n(700071),
                r = n(394164),
                o = n(464659),
                i = a(n(831584)),
                u = n(780549),
                s = n(174834),
                c = n(877171),
                d = n(701777),
                f = n(512938),
                p = n(714574),
                m = a(n(556869)),
                g = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = n(379811),
                v = a(n(524578));

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }
            const y = (0, f.FlatListFactory)()
        },
        655237: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(967154)),
                r = a(n(81109)),
                o = n(122583),
                i = n(15842),
                u = n(632157),
                s = a(n(174662)),
                c = n(984330),
                d = a(n(853417)),
                f = a(n(973366)),
                p = n(72696),
                m = n(354458),
                g = a(n(498692)),
                h = a(n(983345)),
                E = a(n(463954)),
                v = a(n(753602)),
                b = a(n(906015)),
                y = n(815651),
                C = n(745309),
                M = n(542358),
                _ = a(n(718796)),
                k = n(713464),
                S = n(351053),
                w = n(738501),
                P = a(n(306007)),
                O = n(464659),
                I = a(n(740681)),
                T = n(998123),
                N = n(698867),
                A = n(780549),
                x = n(660666),
                D = a(n(988808)),
                L = n(201833),
                R = a(n(876588)),
                j = a(n(700829)),
                B = a(n(109007)),
                F = a(n(366773)),
                W = a(n(305122)),
                G = a(n(533159)),
                H = a(n(704714)),
                V = a(n(928008)),
                U = n(834110),
                z = n(184385),
                q = a(n(908081)),
                Y = a(n(324093)),
                K = n(36045),
                X = n(568550),
                Z = n(626194),
                Q = n(900316),
                $ = a(n(969358)),
                J = n(71957),
                ee = a(n(570834)),
                te = n(714574),
                ne = n(769153),
                ae = a(n(344460)),
                le = n(917504),
                re = n(609181),
                oe = n(114850),
                ie = a(n(832897)),
                ue = a(n(499717)),
                se = a(n(213393)),
                ce = n(932523),
                de = n(242677),
                fe = a(n(335748)),
                pe = n(10586),
                me = a(n(634152)),
                ge = n(163139),
                he = n(220584),
                Ee = n(180519),
                ve = n(625786),
                be = n(390737),
                ye = n(508228),
                Ce = n(459857),
                Me = n(887222),
                _e = n(455915),
                ke = a(n(124928)),
                Se = n(548360),
                we = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = Ae(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                Pe = a(n(156720)),
                Oe = n(379811),
                Ie = a(n(637660)),
                Te = a(n(558532)),
                Ne = a(n(321201));

            function Ae(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (Ae = function(e) {
                    return e ? n : t
                })(e)
            }
            const xe = {
                body: {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function De(e) {
                let {
                    contact: t,
                    catalogContext: n,
                    onProductDetail: a,
                    onProductCatalog: l
                } = e;
                const r = k.CatalogCollection.get(t.id);
                if (!r) return null;
                let o = "",
                    i = !1;
                (0, p.canSeeBizProfileV3)() && (o = Se.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), i = !0);
                const {
                    session: u
                } = n;
                return u.isAccidental() ? null : (0, M.hasShop)(t.businessProfile) ? (0, p.bannedShopsEnabled)() && (0, M.isShopBanned)(t.businessProfile) ? null : we.default.createElement(fe.default, {
                    businessProfile: t.businessProfile,
                    catalog: r,
                    subtitle: o,
                    hideIncompleteRows: i
                }) : we.default.createElement(se.default, {
                    onProductDetail: a,
                    onProductCatalog: l,
                    catalog: r,
                    subtitle: o,
                    hideIncompleteRows: i,
                    shouldLog: !0
                })
            }

            function Le(e, t) {
                const {
                    contact: n,
                    onVerification: a,
                    onClose: M,
                    onBack: se,
                    onProductDetail: fe,
                    onProductCatalog: Ae,
                    canLogQpl: Le = !0
                } = e, Re = (0, Ne.default)(), je = (0, we.useContext)(X.DrawerContext), [Be, Fe, We, Ge, He, Ve, Ue, ze, qe, Ye, Ke, Xe, Ze, Qe, $e, Je] = (0, Oe.useContactValues)(e.contact.id, [x.getId, te.getFormattedName, te.getFormattedUser, te.getFormattedShortName, x.getIsBusiness, x.getIsEnterprise, x.getIsMyContact, te.getCommonGroups, x.getShowBusinessCheckmarkAsPrimary, x.getShowBusinessCheckmarkAsSecondary, x.getVerifiedName, x.getVerifiedLevel, x.getName, x.getNotifyName, x.getLabels, te.getPhoneNumber]), [et, tt, nt, at, lt, rt, ot, it, ut] = (0, Oe.useContactValues)(e.contact.id, [te.getBusinessCatalog, x.getIsMe, x.getStatusMute, te.getDisplayName, te.getShareOwnPn, x.getRequestedPnTimestamp, x.getCanRequestPhoneNumber, x.getIsIAS, x.getIsCAPISupportAccount]), st = (0, Ie.default)((() => new ee.default)), ct = (0, we.useRef)(!1), [dt, ft] = (0, we.useState)(100), pt = (0, we.useMemo)((() => S.ChatCollection.get(Be)), [Be]), mt = (0, ye.useBusinessProfile)(Be, ["isBizBot1p", "isBizBot3p", "stale", "isProfileLinked", "coverPhoto"]), gt = (0, m.isBizBot3pEnabled)() && !0 === (null == mt ? void 0 : mt.isBizBot3p), ht = (0, m.isBizBot1pEnabled)() && !0 === (null == mt ? void 0 : mt.isBizBot1p), Et = tt;
                (0, we.useEffect)((() => {
                    mt && !mt.stale && et && k.CatalogCollection.findCarouselCatalog(Be).catch((0, o.filteredCatch)(c.ServerStatusCodeError, (() => {
                        __LOG__(3)
                        `Failed to fetch product catalog in contact drawer from server`
                    }))), (0, pe.getFanOutListJob)([Be, (0, Ce.assertGetMe)()]).then((e => {
                        (0, le.ensureE2ESessions)(e)
                    }));
                    const {
                        session: t
                    } = (0, ce.getProductCatalogContext)(je);
                    if (t.isAccidental()) Q.DrawerManager.setDrawerContext("right", (0, ce.buildProductCatalogContext)(new de.ProductCatalogSession, (0, U.getMaybeBizPlatformForLogging)(Be.toString()), _e.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    else if (He && (0, p.canSeeBizProfileV3)()) {
                        const t = Be === (0, Ce.getMaybeMeUser)(),
                            {
                                profileEntryPoint: n
                            } = e;
                        !t && n && (0, y.logProfileImpression)((0, ce.getProductCatalogSessionId)(je), n, !!(null == mt ? void 0 : mt.isProfileLinked), !!(null == mt ? void 0 : mt.coverPhoto))
                    }
                    Le && mt && (0, re.qplEndProfileView)(i.QuickLogActionType.SUCCESS)
                }), []), (0, we.useEffect)((() => {
                    if ((0, p.btmThreadsLoggingEnabled)()) {
                        var e;
                        const t = null === (e = (0, Ce.getMaybeMeUser)()) || void 0 === e ? void 0 : e.equals(Be),
                            {
                                session: n
                            } = (0, ce.getProductCatalogContext)(je);
                        n.isAccidental() || t || !(null == pt ? void 0 : pt.id) || (0, N.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, u.unixTime)(),
                            chatId: pt.id
                        }])
                    }
                }), []), (0, Te.default)((() => {
                    const {
                        session: e
                    } = (0, ce.getProductCatalogContext)(je);
                    e.isAccidental() || He && (0, p.canSeeBizProfileV3)() && (0, y.logProfileExit)((0, ce.getProductCatalogSessionId)(je), dt, null == mt ? void 0 : mt.isProfileLinked, !!(null == mt ? void 0 : mt.coverPhoto))
                }));
                const vt = () => {
                        a()
                    },
                    bt = () => {
                        M ? M() : null == Re || Re.requestDismiss()
                    },
                    yt = () => {
                        se && se()
                    },
                    Ct = e => {
                        if (!ct.current && !ke.default.isPSA(Be)) return void be.ToastManager.open(we.default.createElement(ve.Toast, {
                            msg: Se.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }));
                        const t = e.target;
                        oe.ModalManager.openMedia(we.default.createElement(ue.default, {
                            contact: n,
                            profilePicThumb: n.getProfilePicThumb(),
                            animateBorderRadius: !0,
                            getZoomNode: e => {
                                e(t)
                            }
                        }), {
                            transition: "profile-viewer",
                            uim: Re
                        })
                    },
                    Mt = () => {
                        ct.current = !0
                    },
                    _t = e => {
                        (0, Me.qplStartProductView)("ContactInfo"), fe(e)
                    },
                    kt = e => {
                        const t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                        t > dt && ft(t)
                    },
                    St = Ve ? null : we.default.createElement(R.default, {
                        contact: n,
                        onClose: bt,
                        flatListController: st.current
                    });
                let wt = null;
                e.onMediaGallery && pt && (wt = we.default.createElement(I.default, {
                    chat: pt,
                    onMediaGallery: e.onMediaGallery
                }));
                let Pt = null,
                    Ot = null;
                if (n && He && mt && et) {
                    const e = we.default.createElement(De, {
                        contact: n,
                        catalogContext: (0, ce.getProductCatalogContext)(je),
                        onProductDetail: _t,
                        onProductCatalog: Ae
                    });
                    (0, p.canSeeBizProfileV3)() ? Ot = e: Pt = e
                }
                const It = pt && pt.mute.canMute() ? we.default.createElement(ie.default, {
                        chat: pt,
                        mute: pt.mute,
                        settings: me.default
                    }) : null,
                    Tt = ut && (0, s.default)() ? we.default.createElement(G.default, null) : null;
                let Nt, At;
                if (e.onStarred && (Nt = we.default.createElement(W.default, {
                        onStarred: e.onStarred
                    })), pt && (pt.hasKeptMsgs() || (0, w.isEphemeralSettingOn)(pt))) {
                    const t = we.default.createElement(Ee.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, Se.fbt._("Kept Messages", null, {
                            hk: "w8m3u"
                        })),
                        n = we.default.createElement(ne.KeepInChatIcon, {
                            color: he.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    At = we.default.createElement(O.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: xe.lastSectionRow
                    }, we.default.createElement(P.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onKept,
                        title: t
                    }))
                }
                const xt = pt && (0, w.shouldShowEphemeralSetting)(pt) ? we.default.createElement(J.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: pt,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let Dt = null;
                ke.default.isPSA(Be) ? Dt = we.default.createElement(V.default, null) : Be.isBot() || gt || (Dt = we.default.createElement(j.default, {
                    contact: (0, ge.unproxy)(n),
                    onVerificationClick: vt
                }));
                const Lt = Be.isLid() && null == Je,
                    Rt = Be.isLid(),
                    jt = pt && Rt ? we.default.createElement(T.PhoneNumberVisibilityIndicator1On1, {
                        chat: pt
                    }) : null,
                    Bt = ht ? we.default.createElement(L.ContactInfoBizBot1pSection, null) : null,
                    Ft = we.default.createElement(O.ChatInfoDrawerSection, null, It, Tt, xt, Bt, Dt, jt),
                    Wt = !He,
                    Gt = Wt || it || ut || Be.isBot() || gt ? null : we.default.createElement(h.default, {
                        contact: (0, ge.unproxy)(n)
                    });
                let Ht = null;
                Be.isBot() ? Ht = we.default.createElement(g.default, {
                    contact: (0, ge.unproxy)(n)
                }) : Wt && (Ht = we.default.createElement(D.default, {
                    contact: (0, ge.unproxy)(n)
                }));
                let Vt = null;
                gt && mt && (Vt = we.default.createElement(d.default, {
                    businessProfile: (0, ge.unproxy)(mt)
                }));
                let Ut = null;
                (0, m.isBizBot3pEnabled)() && mt && (Ut = we.default.createElement(f.default, {
                    businessProfile: (0, ge.unproxy)(mt)
                }));
                const zt = (0, p.canSeeBizProfileV3)() && He && mt ? we.default.createElement(_.default, {
                    contact: n,
                    onProfilePicLoad: Mt,
                    onProfilePicClick: Ct,
                    onOpenStatus: () => {
                        (0, y.logStatusClick)((0, ce.getProductCatalogSessionId)(je), null == mt ? void 0 : mt.isProfileLinked, !!(null == mt ? void 0 : mt.coverPhoto))
                    },
                    businessProfile: (0, ge.unproxy)(mt),
                    onProductCatalog: Ae,
                    isPhoneNumberHidden: Lt
                }) : we.default.createElement(H.default, {
                    contact: n,
                    onDetailImageLoad: Mt,
                    onDetailImageClick: Ct,
                    isMessageYourselfChat: Et,
                    isPhoneNumberHidden: Lt
                });
                let qt, Yt, Kt, Xt = null;
                var Zt;
                He && mt && ((0, p.canSeeBizProfileV3)() && mt ? (Xt = Be.isBot() ? null : we.default.createElement(b.default, {
                    businessProfile: (0, ge.unproxy)(mt),
                    showDescription: !gt
                }), qt = it || ut ? null : we.default.createElement(E.default, {
                    contact: n
                }), (null !== (Zt = null == $e ? void 0 : $e.length) && void 0 !== Zt ? Zt : 0) > 0 && (Yt = we.default.createElement($.default, {
                    theme: "padding"
                }, we.default.createElement(ae.default, {
                    labels: $e,
                    theme: "standalone"
                }))), Kt = kt) : mt && (Xt = we.default.createElement(C.BusinessProfile, {
                    contact: n,
                    businessProfile: (0, ge.unproxy)(mt)
                })));
                const Qt = {
                    title: Se.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: Z.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    focusBackOrCancel: !0
                };
                let $t, Jt = {};
                return Jt = se ? (0, r.default)({
                    onBack: yt
                }, Qt) : (0, r.default)({
                    onCancel: bt
                }, Qt), mt && !0 === mt.isProfileLinked && (0, p.bizLinkedAccountsEnabled)() && (0, p.canViewBizLinkedAccounts)() && ($t = we.default.createElement(F.default, {
                    businessProfile: (0, ge.unproxy)(mt),
                    rowTheme: "linked-account-consumer"
                })), we.default.createElement(q.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: {
                        surface: "contact-info-drawer"
                    }
                }, we.default.createElement(Z.DrawerHeader, (0, l.default)({}, Jt, {
                    testid: "contact-info-header"
                })), we.default.createElement(Y.default, {
                    flatListControllers: [st.current],
                    onScroll: Kt
                }, we.default.createElement("section", {
                    className: (0, Pe.default)(xe.body)
                }, zt, qt, pt ? we.default.createElement(v.default, {
                    chat: pt
                }) : null, Vt, Ut, Yt, Ot, Xt, $t, Pt, Ht, wt, Nt, At, Ft, Gt, undefined, !Et && St, !Et && we.default.createElement(B.default, {
                    contact: n
                }), we.default.createElement(O.ChatInfoDrawerButtonsSection, null, pt ? we.default.createElement(K.DrawerButtonSimple, {
                    testid: "li-delete-chat",
                    icon: we.default.createElement(z.DeleteIcon, null),
                    color: "danger",
                    onClick: () => {
                        const e = S.ChatCollection.assertGet(Be);
                        A.Cmd.deleteOrExitChatFromEntryPoint(e, 12)
                    },
                    theme: "chat-info"
                }, Se.fbt._("Delete chat", null, {
                    hk: "3Vq9G4"
                })) : null))))
            }
            var Re = (0, we.forwardRef)(Le);
            t.default = Re
        },
        700829: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onVerificationClick: t
                } = e, [n, a] = (0, g.useContactValues)(e.contact.id, [r.getId, r.getPrivacyMode]), h = function(e, t) {
                    if ((0, l.default)(t.user)) return {
                        text: p.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        }),
                        title: p.fbt._("Security", null, {
                            hk: "3j3j0a"
                        }),
                        onClick: () => {
                            (0, s.default)((0, d.SupportChatSecurityModalText)(), (0, i.getSupportChatSafetyFaqUrl)(), (0, d.SupportChatLearnMoreLinkText)())
                        }
                    };
                    switch (e) {
                        case c.ReducedPrivacyMode.E2EE:
                            return null;
                        case c.ReducedPrivacyMode.BSP:
                            return {
                                text: p.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                    hk: "VbOOZ"
                                }),
                                title: p.fbt._("Security", null, {
                                    hk: "3j3j0a"
                                }),
                                onClick: () => {
                                    (0, s.default)((0, u.formatBspModalText)(), (0, i.getE2EEnterpriseFaqUrl)())
                                }
                            };
                        case c.ReducedPrivacyMode.FB:
                            {
                                let e;
                                return e = t.isIAS() ? p.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                    hk: "49GQ04"
                                }) : p.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                    hk: "3wvGOC"
                                }),
                                {
                                    text: e,
                                    title: p.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }),
                                    onClick: () => {
                                        (0, s.default)((0, u.formatFbModalText)(t.isIAS()), (0, i.getE2EEnterpriseFaqUrl)())
                                    }
                                }
                            }
                    }
                }((0, c.getReducedPrivacyMode)(a), n);
                if (h) return m.default.createElement(o.default, {
                    title: h.title,
                    text: h.text,
                    onClick: h.onClick
                });
                const E = f.default.isVoiceCallEnabled() || f.default.isVideoCallEnabled() ? p.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : p.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return m.default.createElement(o.default, {
                    onClick: t,
                    text: E
                })
            };
            var l = a(n(143589)),
                r = n(660666),
                o = a(n(409558)),
                i = n(258105),
                u = n(729763),
                s = a(n(606037)),
                c = n(35109),
                d = n(666836),
                f = a(n(571256)),
                p = n(548360),
                m = a(n(667294)),
                g = n(379811)
        },
        109007: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    contact: t
                } = e, [n, a, O, I, T, N, A] = (0, P.useContactValues)(e.contact.id, [d.getId, m.getDisplayName, d.getIsBusiness, m.getIsContactBlocked, d.getIsIAS, d.getIsMyContact, d.getIsCAPISupportAccount]), x = w.default.createElement(h.Name, {
                    contact: e.contact,
                    skipCheckMark: !0
                });
                let D = null;
                n.isBot() || (D = I ? w.default.createElement(f.DrawerButtonSimple, {
                    testid: "li-unblock",
                    color: "success",
                    icon: w.default.createElement(y.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: () => (0, o.handleUnblock)(e.contact, i.BlockEntryPoint.Profile),
                    theme: "chat-info"
                }, S.fbt._("Unblock {contact_name}", [S.fbt._param("contact_name", x)], {
                    hk: "1fZZEx"
                })) : w.default.createElement(f.DrawerButtonSimple, {
                    testid: "li-block",
                    color: "danger",
                    icon: w.default.createElement(y.SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: () => {
                        const a = () => {
                            const t = u.ChatCollection.get(n);
                            if (null == t ? void 0 : t.isPSA) {
                                const e = t.msgs.last();
                                (0, _.logChatPSARemove)(e, 1, 1)
                            }(0, r.blockContact)({
                                contact: e.contact,
                                blockEntryPoint: i.BlockEntryPoint.Profile
                            }), g.ModalManager.close()
                        };
                        let o = w.default.createElement(c.ConfirmPopup, {
                            onOK: a,
                            okText: (0, p.default)("Block"),
                            onCancel: () => g.ModalManager.close(),
                            title: S.fbt._("Block {contact_name}?", [S.fbt._param("contact_name", x)], {
                                hk: "26yDKy"
                            })
                        }, S.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                            hk: "3ioCkx"
                        }));
                        k.default.isPSA(n) ? o = w.default.createElement(E.default, {
                            onBlock: a,
                            onCancel: () => g.ModalManager.close()
                        }) : O && (o = w.default.createElement(l.default, {
                            contact: t,
                            blockEntryPoint: i.BlockEntryPoint.Profile,
                            withReport: !1
                        })), g.ModalManager.open(o)
                    },
                    theme: "chat-info"
                }, S.fbt._("Block {contact_name}", [S.fbt._param("contact_name", x)], {
                    hk: "laDqJ"
                })));
                let L = T || A ? S.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : S.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                O || (L = S.fbt._("Report {contact_name}", [S.fbt._param("contact_name", x)], {
                    hk: "3Dqyjo"
                }));
                const R = k.default.isPSA(n) || n.isBot() ? null : w.default.createElement(f.DrawerButtonSimple, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: w.default.createElement(M.ThumbsDownIcon, null),
                    onClick: () => {
                        g.ModalManager.open(w.default.createElement(v.default, {
                            isMessage: !1,
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: () => {
                                const t = u.ChatCollection.get(e.contact.id);
                                t && (0, b.sendReport)({
                                    chat: t,
                                    spamFlow: C.SpamFlow.AccountInfoReport
                                }), g.ModalManager.close()
                            },
                            onReportBlockClear: () => {
                                const t = u.ChatCollection.get(e.contact.id);
                                t && (0, b.sendSpamBlockClear)(t, C.SpamFlow.AccountInfoReport), g.ModalManager.close()
                            },
                            onCancel: () => g.ModalManager.close()
                        }))
                    },
                    theme: "chat-info"
                }, L);
                return w.default.createElement(s.ChatInfoDrawerButtonsSection, null, D, R)
            };
            var l = a(n(208423)),
                r = n(547979),
                o = n(923092),
                i = n(400436),
                u = n(351053),
                s = n(464659),
                c = n(103440),
                d = n(660666),
                f = n(36045),
                p = a(n(395767)),
                m = n(714574),
                g = n(114850),
                h = n(21645),
                E = a(n(179197)),
                v = a(n(338695)),
                b = n(383296),
                y = n(290562),
                C = n(453603),
                M = n(647890),
                _ = n(369084),
                k = a(n(124928)),
                S = n(548360),
                w = a(n(667294)),
                P = n(379811)
        },
        305122: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    onStarred: t
                } = e;
                const n = c.default.createElement(u.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, s.fbt._("Starred messages", null, {
                        hk: "4wVbNG"
                    })),
                    a = c.default.createElement(o.StarIcon, {
                        color: i.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return c.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages"
                }, c.default.createElement(l.default, {
                    testid: "block-starred-messages",
                    side: "chevron",
                    icon: a,
                    onClick: t,
                    title: n
                }))
            };
            var l = a(n(306007)),
                r = n(464659),
                o = n(407024),
                i = n(220584),
                u = n(180519),
                s = n(548360),
                c = a(n(667294))
        },
        836513: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return f.default.createElement(u.FlexRow, {
                    xstyle: g.container
                }, f.default.createElement(u.FlexColumn, {
                    xstyle: g.item
                }, p), f.default.createElement(u.FlexColumn, {
                    xstyle: [g.text, g.item]
                }, f.default.createElement(c.TextSpan, {
                    testid: "contact-info-pnh-info"
                }, d.fbt._("This person's phone number is not shared in this chat. {=m2}", [d.fbt._implicitParam("=m2", f.default.createElement(l.default, {
                    testid: "contact-info-pnh-learn-more",
                    onClick: m
                }, d.fbt._("Learn more", null, {
                    hk: "t6HJf"
                })))], {
                    hk: "3CEKuh"
                }))))
            };
            var l = a(n(196554)),
                r = n(841605),
                o = n(753233),
                i = n(258105),
                u = n(690495),
                s = n(220584),
                c = n(180519),
                d = n(548360),
                f = a(n(667294));
            a(n(156720));
            const p = f.default.createElement(r.DialpadIcon, {
                    directional: !0,
                    color: s.SvgColorProp.SECONDARY
                }),
                m = () => {
                    const e = (0, i.getPhoneNumberHidingFaqUrl)();
                    (0, o.openExternalLink)(e)
                },
                g = {
                    container: {
                        alignItems: "gndfcl4n",
                        backgroundColor: "f6ipylw5",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        display: "p357zi0d",
                        marginTop: "fgtikrv0",
                        marginEnd: "k1jo73ug",
                        marginBottom: "iyjcf3gk",
                        marginStart: "isfiuinm",
                        width: "c0boj6n4",
                        height: "q1n4p668",
                        maxWidth: "l2o74p5l",
                        paddingStart: "nu34rnf1",
                        paddingEnd: "ft2m32mm",
                        lineHeight: "erpdyial"
                    },
                    text: {
                        color: "pm5hny62",
                        marginTop: "m3ct2rho",
                        marginEnd: "k1jo73ug",
                        marginBottom: "ec1z5skj",
                        marginStart: "isfiuinm",
                        wordBreak: "cw3vfol9",
                        overflowWrap: "fd365im1"
                    },
                    item: {
                        marginStart: "p3lsiedt",
                        marginEnd: "q471nw87",
                        paddingTop: "qomlamqu",
                        paddingEnd: "lnjlmjd6",
                        paddingBottom: "bxcbqipq",
                        paddingStart: "mc6o24uu"
                    }
                }
        },
        533159: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return d.default.createElement(r.default, {
                    onClick: () => o.ModalManager.open(d.default.createElement(i.default, null)),
                    icon: d.default.createElement(l.AiSignalIcon, {
                        color: u.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    title: d.default.createElement(s.WDSTextTitle, null, c.fbt._("Meta AI", null, {
                        hk: "1xXGQM"
                    })),
                    secondaryTitle: d.default.createElement(s.WDSTextMuted, null, c.fbt._("WhatsApp Support uses Meta AI to generate some messages in this chat.", null, {
                        hk: "ApQaP"
                    }))
                })
            };
            var l = n(321545),
                r = a(n(306007)),
                o = n(114850),
                i = a(n(735848)),
                u = n(220584),
                s = n(180519),
                c = n(548360),
                d = a(n(667294))
        },
        704714: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let t, {
                    contact: n,
                    onDetailImageLoad: a,
                    onDetailImageClick: l,
                    isMessageYourselfChat: r,
                    isPhoneNumberHidden: o
                } = e;
                const i = D.fbt._("Official WhatsApp Account", null, {
                        hk: "2cEUzF"
                    }),
                    u = null != n.phoneNumber ? f.ContactCollection.get(n.phoneNumber) : null;
                if (A.default.isPSA(n.id)) t = i;
                else if ((0, p.getIsMyContact)(n)) t = (0, x.widToFormattedUser)(n.id);
                else if (n.id.isLid() && null != u && (0, p.getIsMyContact)(u)) t = (0, x.widToFormattedUser)(n.phoneNumber);
                else {
                    const e = (0, p.getNotifyName)(n);
                    null != e && (t = `~${e}`)
                }
                return L.default.createElement(v.default, {
                    theme: "padding-large"
                }, L.default.createElement("div", {
                    className: (0, R.default)(j.avatar)
                }, L.default.createElement(h.DetailImage, {
                    id: n.id,
                    size: h.DetailImageSize.Large,
                    loader: !0,
                    onLoad: a,
                    onClick: l,
                    quality: h.DetailImageQuality.High
                })), L.default.createElement(y.FlexColumn, {
                    align: "center"
                }, L.default.createElement(P.TextHeader, {
                    level: "2",
                    size: "24",
                    xstyle: j.contactName
                }, L.default.createElement(_.Name, {
                    testid: "contact-info-subtitle",
                    contact: n,
                    showMessageYourselfName: r,
                    selectable: !0,
                    breakWord: !0,
                    checkmarkLarge: !0
                })), null != t && L.default.createElement("div", {
                    className: (0, R.default)(j.secondaryWrapper)
                }, L.default.createElement(g.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, L.default.createElement(P.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, t)))), o && L.default.createElement(m.default, null), !r && L.default.createElement(B, {
                    contact: n,
                    displayRequestPnButton: o
                }), L.default.createElement(C.default, {
                    labels: n.labels
                }))
            };
            var l = n(287461),
                r = n(351053),
                o = n(404378),
                i = a(n(983098)),
                u = a(n(9729)),
                s = n(757567),
                c = n(780549),
                d = n(877171),
                f = n(177938),
                p = n(660666),
                m = a(n(836513)),
                g = n(306703),
                h = n(23641),
                E = n(861038),
                v = a(n(969358)),
                b = n(581354),
                y = n(690495),
                C = a(n(344460)),
                M = n(114850),
                _ = n(21645),
                k = n(417016),
                S = a(n(755140)),
                w = n(163139),
                P = n(180519),
                O = n(676345),
                I = n(626261),
                T = a(n(961745)),
                N = n(126246),
                A = a(n(124928)),
                x = n(931019),
                D = n(548360),
                L = a(n(667294)),
                R = a(n(156720));
            const j = {
                avatar: {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "pz0xruzv"
                },
                secondaryWrapper: {
                    lineHeight: "a4ywakfo",
                    marginTop: "qt60bha0"
                },
                contactName: {
                    textAlign: "qfejxiq4"
                }
            };

            function B(e) {
                let {
                    contact: t,
                    displayRequestPnButton: n
                } = e;
                const a = (0, u.default)((0, w.unproxy)(t)),
                    f = () => {
                        (0, b.findChat)(t.id, "chatInfoTopCard").then((e => {
                            c.Cmd.openChatFromUnread(e).then((t => {
                                t && d.ComposeBoxActions.focus(e)
                            }))
                        }))
                    },
                    m = !(!a.isVideoCallEnabled && !a.isVoiceCallEnabled || A.default.isPSA(t.id)) && L.default.createElement(L.default.Fragment, null, L.default.createElement(i.default, {
                        Icon: I.VoiceCallFilledIcon,
                        iconWidth: 19,
                        label: D.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        testid: "contact-action voice-call-button",
                        xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                        disabled: !a.canStartVoiceCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, k.shouldDisplayPhoneNumberHidingModal)(t))(0, k.displayPhoneNumberHidingModal)(t, !1);
                            else if (null != e) {
                                var n;
                                null === (n = T.default.Voip) || void 0 === n || n.callStart(e, !1)
                            }
                        }
                    }), L.default.createElement(i.default, {
                        Icon: s.ChatInfoVideoIcon,
                        label: D.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        testid: "contact-action video-call-button",
                        xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                        disabled: !a.canStartVideoCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, k.shouldDisplayPhoneNumberHidingModal)(t))(0, k.displayPhoneNumberHidingModal)(t, !0);
                            else if (null != e) {
                                var n;
                                null === (n = T.default.Voip) || void 0 === n || n.callStart(e, !0)
                            }
                        }
                    })),
                    g = D.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    h = D.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    v = (0, p.getCanRequestPhoneNumber)(t) ? g : h,
                    C = n && L.default.createElement(i.default, {
                        Icon: E.DialpadSmallIcon,
                        iconWidth: 19,
                        label: v,
                        xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                        disabled: !(0, p.getCanRequestPhoneNumber)(t),
                        onClick: () => {
                            M.ModalManager.open(L.default.createElement(S.default, {
                                entryPoint: N.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-consumer"
                    });
                let _ = null;
                if ((0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                    const e = r.ChatCollection.getActive();
                    _ = !(null == e ? void 0 : e.id.equals(t.id)) && L.default.createElement(i.default, {
                        Icon: o.ChatIcon,
                        iconWidth: 19,
                        label: D.fbt._("Message", null, {
                            hk: "4gkjcu"
                        }),
                        testid: "contact-action chat-button",
                        xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                        disabled: !1,
                        onClick: f
                    })
                }
                return L.default.createElement(y.FlexRow, {
                    justify: "center",
                    xstyle: [O.uiMargin.top8, O.uiMargin.bottom4]
                }, C, _, m)
            }
        },
        928008: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = {
                    text: u.fbt._("This is an official account of WhatsApp", null, {
                        hk: "2Av1mT"
                    }),
                    title: u.fbt._("Security", null, {
                        hk: "2jDPpv"
                    }),
                    onClick: () => {
                        (0, i.default)((0, o.formatWaChatSecurityModalText)(), (0, r.getWAChatFaqUrl)())
                    }
                };
                return s.default.createElement(l.default, {
                    title: e.title,
                    text: e.text,
                    onClick: e.onClick
                })
            };
            var l = a(n(409558)),
                r = n(258105),
                o = n(729763),
                i = a(n(606037)),
                u = n(548360),
                s = a(n(667294))
        },
        983345: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = e.contact.getStatus(),
                    [n, a] = (0, E.useContactValues)(e.contact.id, [u.getId, c.getPhoneNumber]),
                    {
                        status: y
                    } = (0, v.useModelValues)(t, ["status"]),
                    C = (0, v.useOptionalModelValues)(e.contact, ["textStatusString", "textStatusEmoji", "textStatusLastUpdateTime", "textStatusExpiryTs", "textStatusEphemeralDuration"]);
                let M, _, k;
                (0, f.receiveTextStatusEnabled)() ? (_ = (0, p.shouldDisplayTextStatus)(null == C ? void 0 : C.textStatusString, null == C ? void 0 : C.textStatusEmoji, null == C ? void 0 : C.textStatusEphemeralDuration, null == C ? void 0 : C.textStatusLastUpdateTime, null == C ? void 0 : C.textStatusExpiryTs), ((null == C ? void 0 : C.textStatusLastUpdateTime) === p.TEXT_STATUS_NOT_FETCHED || _) && (M = null == (null == C ? void 0 : C.textStatusLastUpdateTime) ? null : h.default.createElement(l.default, {
                    multiline: !0
                }, h.default.createElement(d.TextSpan, {
                    theme: "title"
                }, h.default.createElement(i.default, {
                    contactId: e.contact.id
                }))))) : M = "" === y ? null : h.default.createElement(l.default, {
                    multiline: !0
                }, h.default.createElement(d.TextSpan, {
                    theme: "title"
                }, h.default.createElement(o.default, {
                    id: n
                })));
                n.isLid() ? null != a && (k = a) : k = n;
                const S = k ? h.default.createElement(l.default, {
                    separator: !0
                }, h.default.createElement(s.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, h.default.createElement(d.TextSpan, {
                    theme: "title"
                }, (0, m.widToFormattedUser)(k)))) : null;
                let w = g.fbt._("About and phone number", null, {
                    hk: "3UEL3W"
                });
                (0, f.receiveTextStatusEnabled)() && (w = !0 === _ ? g.fbt._("", null, {
                    hk: "FeqcA"
                }) : g.fbt._("", null, {
                    hk: "1PSgm0"
                }));
                return h.default.createElement(r.ChatInfoDrawerSection, {
                    xstyle: b.container,
                    titleTestId: "section-about-and-phone-number",
                    title: w
                }, M, S)
            };
            var l = a(n(355858)),
                r = n(464659),
                o = a(n(203528)),
                i = a(n(717304)),
                u = n(660666),
                s = n(306703),
                c = n(714574),
                d = n(180519),
                f = n(491805),
                p = n(596328),
                m = n(931019),
                g = n(548360),
                h = a(n(667294)),
                E = (a(n(156720)), n(379811)),
                v = n(655241);
            const b = {
                container: {
                    paddingBottom: "przvwfww"
                }
            }
        },
        463954: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    contact: t
                } = e, n = m.default.createElement(h, {
                    contact: t,
                    onClick: function() {
                        var e;
                        (0, r.isBotEnabled)() && (0, i.getId)(t).isBot() ? d.ModalManager.open(m.default.createElement(o.default, {
                            fromInvoke: !1
                        })) : (0, r.isBizBot3pEnabled)() && (null === (e = t.businessProfile) || void 0 === e ? void 0 : e.isBizBot3p) ? d.ModalManager.open(m.default.createElement(l.default, {
                            contact: t
                        })) : d.ModalManager.open(m.default.createElement(f.default, {
                            contact: t
                        }))
                    }
                });
                return m.default.createElement(s.default, {
                    xstyle: g.businessAccount
                }, n)
            };
            var l = a(n(210688)),
                r = n(354458),
                o = a(n(341894)),
                i = n(660666),
                u = a(n(831269)),
                s = a(n(969358)),
                c = n(975279),
                d = n(114850),
                f = a(n(517729)),
                p = n(548360),
                m = a(n(667294));
            a(n(156720));
            const g = {
                businessAccount: {
                    borderTop: "mug5vpb7",
                    fontSize: "f8jlpxt4"
                },
                businessTitle: {
                    lineHeight: "hzeshm6i"
                },
                bannerSvgContainer: {
                    marginTop: "b9l0eqez",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka"
                },
                bannerSvg: {
                    color: "jq3rn4u7",
                    width: "dh5rsm73"
                }
            };

            function h(e) {
                let {
                    onClick: t,
                    contact: n
                } = e;
                return m.default.createElement(u.default, {
                    testid: "business-title",
                    xstyle: g.businessTitle,
                    onClick: t,
                    side: m.default.createElement(c.InfoIcon, {
                        xstyle: g.bannerSvgContainer,
                        iconXstyle: g.bannerSvg,
                        displayInline: !0
                    })
                }, function(e) {
                    var t;
                    return (0, r.isBotEnabled)() && (0, i.getId)(e).isBot() ? p.fbt._("Messages are generated by AI from Meta.", null, {
                        hk: "WdHq5"
                    }) : (0, r.isBizBot3pEnabled)() && (null === (t = e.businessProfile) || void 0 === t ? void 0 : t.isBizBot3p) ? p.fbt._("About this chat", null, {
                        hk: "4w2wKJ"
                    }) : p.fbt._("This is a business account.", null, {
                        hk: "2x8QUJ"
                    })
                }(n))
            }
        },
        520228: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n;
                const {
                    contact: a,
                    onProductCatalog: G
                } = e, V = (0, W.useContext)(M.DrawerContext), U = (0, T.getProductCatalogSessionId)(V), z = (0, g.default)((0, D.unproxy)(e.contact));

                function q() {
                    return (q = (0, l.default)((function*() {
                        const e = yield(0, S.findChat)(a.id, "businessActions");
                        (yield v.Cmd.openChatFromUnread(e)) && (_.DrawerManager.closeDrawerRight(), (0, i.btmThreadsLoggingEnabled)() && b.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                            handleMultiple() {
                                (0, E.handleActivitiesForChatThreadLogging)([{
                                    activityType: "profileReplies",
                                    ts: (0, r.unixTime)(),
                                    chatId: e.id
                                }])
                            }
                        }))
                    }))).apply(this, arguments)
                }
                let Y;
                const K = f.ChatCollection.getActive();
                if (!(null == K ? void 0 : K.id.equals(a.id))) {
                    var X, Z;
                    (0, u.logMessageClick)(U, null === (X = a.businessProfile) || void 0 === X ? void 0 : X.isProfileLinked, !!(null === (Z = a.businessProfile) || void 0 === Z ? void 0 : Z.coverPhoto)), Y = W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: (0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? p.ChatIcon : h.ChatMsgIcon,
                        label: (0, k.default)("Message"),
                        onClick: () => {
                            ! function() {
                                q.apply(this, arguments)
                            }()
                        },
                        testid: "business-action chat"
                    })
                }
                let Q, $, J;
                z.isVoiceCallEnabled && (Q = W.default.createElement(m.default, {
                    xstyle: L.uiMargin.horiz12,
                    Icon: R.VoiceCallFilledIcon,
                    label: F.fbt._("Audio", null, {
                        hk: "rWU8D"
                    }),
                    disabled: !z.canStartVoiceCall,
                    onClick: () => {
                        var e, t;
                        (0, u.logVoiceCallClick)(U, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto));
                        const n = a.id.isLid() ? a.phoneNumber : a.id;
                        if ((0, I.shouldDisplayPhoneNumberHidingModal)(a))(0, I.displayPhoneNumberHidingModal)(a, !1);
                        else if (null != n) {
                            var l;
                            null === (l = j.default.Voip) || void 0 === l || l.callStart(n, !1)
                        }
                    },
                    testid: "business-action voice-call"
                }));
                (null === (t = a.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === s.COMMERCE_EXPERIENCE_TYPES.CATALOG && ($ = W.default.createElement(m.default, {
                    xstyle: L.uiMargin.horiz12,
                    Icon: d.CatalogFilledIcon,
                    label: F.fbt._("Catalog", null, {
                        hk: "3QDkTE"
                    }),
                    onClick: () => {
                        var e, t;
                        (0, u.logCatalogClick)(U, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), G((0, T.getProductCatalogContext)(V), "ContactInfo")
                    },
                    testid: "business-action catalog"
                }));
                if ((0, c.hasShop)(a.businessProfile)) {
                    (0, i.bannedShopsEnabled)() && (0, c.isShopBanned)(a.businessProfile) || (J = W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: x.ShopFilledIcon,
                        label: F.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var e, t;
                            (0, u.logShopsClick)(U, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), (0, c.goToShop)(a.businessProfile)
                        },
                        testid: "business-action shop"
                    }))
                }
                const ee = !(0, y.getIsIAS)(a) && !(0, y.getId)(a).isBot() && !(0, y.getIsCAPISupportAccount)(a) && W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: P.ForwardFilledIcon,
                        label: F.fbt._("Share", null, {
                            hk: "4F3c6E"
                        }).toString(),
                        onClick: function() {
                            var e, t;
                            (0, u.logForwardClick)(U, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), O.ModalManager.open(W.default.createElement(A.SendContactsModalLoadable, {
                                contacts: [(0, D.unproxy)(a)],
                                onContactsSent: e => {
                                    v.Cmd.openChatFromUnread(e).then((() => {}))
                                }
                            }))
                        },
                        testid: "business-action forward"
                    }),
                    te = F.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    ne = F.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    ae = (0, y.getCanRequestPhoneNumber)(a) ? te : ne,
                    le = e.displayRequestPnButton && W.default.createElement(m.default, {
                        Icon: C.DialpadSmallIcon,
                        xstyle: L.uiMargin.horiz12,
                        iconWidth: 19,
                        label: ae,
                        disabled: !(0, y.getCanRequestPhoneNumber)(a),
                        onClick: () => {
                            O.ModalManager.open(W.default.createElement(N.default, {
                                entryPoint: B.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-business"
                    });
                return W.default.createElement(w.FlexRow, {
                    xstyle: H.actionsRow,
                    justify: "center"
                }, le, Y, Q, $, J, ee)
            };
            var l = a(n(348926)),
                r = n(632157),
                o = n(287461),
                i = n(72696),
                u = n(815651),
                s = n(817649),
                c = n(542358),
                d = n(211238),
                f = n(351053),
                p = n(404378),
                m = a(n(983098)),
                g = a(n(9729)),
                h = n(155734),
                E = n(698867),
                v = n(780549),
                b = n(877171),
                y = n(660666),
                C = n(861038),
                M = n(568550),
                _ = n(900316),
                k = a(n(395767)),
                S = n(581354),
                w = n(690495),
                P = n(660476),
                O = n(114850),
                I = n(417016),
                T = n(932523),
                N = a(n(755140)),
                A = n(340576),
                x = n(337951),
                D = n(163139),
                L = n(676345),
                R = n(626261),
                j = a(n(961745)),
                B = n(126246),
                F = n(548360),
                W = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = G(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));
            a(n(156720));

            function G(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (G = function(e) {
                    return e ? n : t
                })(e)
            }
            const H = {
                actionsRow: {
                    marginTop: "c46o30wg",
                    marginEnd: "bsg2wrd4",
                    marginBottom: "brac1wpa",
                    marginStart: "f459d30t",
                    "@media (min-width: 1300px)": {
                        marginStart: "hfp8519b",
                        marginEnd: "acdu7ris"
                    }
                }
            }
        },
        450715: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    businessHours: t,
                    isProfileLinked: n,
                    hasCoverPhoto: a
                } = e, o = (0, s.getProductCatalogSessionId)((0, m.useContext)(i.DrawerContext)), u = (0, r.getBusinessOpenState)(t), [d, g] = (0, m.useState)(!0);
                if (null == t) return null;
                const h = (0, c.getBusinessHours)(t).map((e => {
                    const {
                        day: t,
                        hours: n,
                        first: a
                    } = e;
                    let l = t,
                        o = n,
                        i = !1;
                    if (a) switch (u.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = p.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = p.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = p.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !a && d ? null : m.default.createElement(v, {
                        day: l,
                        dayIsOpen: i,
                        key: t,
                        hours: o,
                        first: a,
                        collapsed: d
                    })
                }));
                return m.default.createElement(f.default, {
                    xstyle: E.businessHours,
                    onClick: () => {
                        (0, l.logHoursClick)(o, n, !!a), g(!d)
                    },
                    testid: "business-hours-expand"
                }, h)
            };
            var l = n(815651),
                r = n(542358),
                o = n(62388),
                i = n(568550),
                u = n(305521),
                s = n(932523),
                c = n(341463),
                d = n(676345),
                f = a(n(625903)),
                p = n(548360),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(156720));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
            const E = {
                businessHours: {
                    display: "f804f6gw",
                    width: "ln8gz9je",
                    textAlign: "ljrqcn24"
                },
                businessHoursChevron: {
                    display: "lgkeaz1o",
                    color: "cs9t9or5",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursHours: {
                    display: "lgkeaz1o",
                    width: "ln8gz9je",
                    lineHeight: "r5qsrrlp",
                    textAlign: "e65innqk",
                    whiteSpace: "bbv8nyr4",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursRow: {
                    display: "plrz2mwq",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6"
                },
                businessHoursDay: {
                    display: "lgkeaz1o",
                    whiteSpace: "le5p0ye3",
                    verticalAlign: "fewfhwl7"
                },
                firstRow: {
                    fontSize: "enbbiyaj",
                    color: "k2bacm8l"
                },
                flipSvg: {
                    transform: "b5u0g8pm",
                    transformOrigin: "sx61ek5s"
                },
                dayIsOpen: {
                    fontWeight: "hnx8ox4h",
                    color: "j5au4wul"
                }
            };

            function v(e) {
                return e.first ? m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursRow, e.first && E.firstRow)
                }, m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursDay, d.uiPadding.end15, e.dayIsOpen && E.dayIsOpen)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: e.day
                })), m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursHours, d.uiPadding.end5)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: e.hours
                })), m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursChevron, d.uiPadding.top4, d.uiPadding.start4),
                    role: "button"
                }, m.default.createElement(o.ChevronDownAltIcon, {
                    className: (0, g.default)(!e.collapsed && E.flipSvg),
                    displayInline: !0
                }))) : m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursRow)
                }, m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursDay, d.uiPadding.end15, d.uiPadding.top8)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: e.day
                })), m.default.createElement("div", {
                    className: (0, g.default)(E.businessHoursHours, d.uiPadding.end5, d.uiPadding.top8)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: e.hours
                })))
            }
        },
        906015: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    businessProfile: t,
                    showDescription: n = !0
                } = e, {
                    description: a,
                    address: y,
                    latitude: M,
                    longitude: _,
                    website: k,
                    email: S,
                    businessHours: w,
                    isProfileLinked: P,
                    coverPhoto: O
                } = (0, b.useModelValues)(t, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]), I = (0, E.useContext)(u.DrawerContext), T = (0, p.getProductCatalogSessionId)(I);
                let N = a;
                t.id.isCAPISupportAccount() && (N = (0, m.SupportChatDescription)().toString());
                const A = [];
                n && null != N && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section)
                }, E.default.createElement(c.ExpandableText, {
                    text: N,
                    textLimit: i.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                }, (e => {
                    let {
                        textLimit: t
                    } = e;
                    return E.default.createElement(s.EmojiText, {
                        className: (0, v.default)(C.description),
                        selectable: !0,
                        direction: "auto",
                        text: N,
                        textLimit: t,
                        ellipsify: !0,
                        multiline: !0,
                        inferLinesDirection: !0
                    })
                }))));
                null != w && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section)
                }, E.default.createElement(l.default, {
                    businessHours: w,
                    isProfileLinked: P,
                    hasCoverPhoto: !!O
                })));
                null != y && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section)
                }, E.default.createElement(s.EmojiText, {
                    selectable: !0,
                    direction: "auto",
                    text: y
                })));
                null != M && null != _ && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section, C.map, g.uiMargin.bottom8, C.mapContainer)
                }, E.default.createElement(f.default, {
                    lat: M,
                    lng: _,
                    name: y || "",
                    width: 590,
                    height: 132,
                    onClick: () => (0, r.logLocationClick)(T, P, !!O),
                    testid: "business-info-map"
                })));
                null != S && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section)
                }, E.default.createElement(d.ExternalLink, {
                    xstyle: C.sectionLink,
                    href: `mailto:${S}`,
                    onClick: () => (0, r.logEmailClick)(T, P, !!O),
                    testid: "business-info-email"
                }, S)));
                null != k && k.length > 0 && A.push(E.default.createElement("div", {
                    className: (0, v.default)(C.section)
                }, k.map((e => E.default.createElement("div", {
                    key: e
                }, E.default.createElement(d.ExternalLink, {
                    xstyle: C.sectionLink,
                    href: h.default.toMaliciousSiteRedirect(e),
                    onClick: () => (0, r.logWebsiteClick)(T, P, !!O),
                    testid: "business-info-website"
                }, e))))));
                if (0 === A.length) return null;
                return E.default.createElement(o.ChatInfoDrawerSection, {
                    xstyle: g.uiPadding.vert16
                }, A.map(((e, t) => E.default.createElement("div", {
                    key: t,
                    className: (0, v.default)(0 !== t && g.uiMargin.top24)
                }, e))))
            };
            var l = a(n(450715)),
                r = n(815651),
                o = n(464659),
                i = a(n(846870)),
                u = n(568550),
                s = n(305521),
                c = n(999649),
                d = n(753233),
                f = a(n(459510)),
                p = n(932523),
                m = n(666836),
                g = n(676345),
                h = a(n(79291)),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                v = a(n(156720)),
                b = n(655241);

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (y = function(e) {
                    return e ? n : t
                })(e)
            }
            const C = {
                description: {
                    lineHeight: "pvbam5uh"
                },
                section: {
                    fontSize: "enbbiyaj",
                    lineHeight: "erpdyial",
                    color: "tviruh8d"
                },
                sectionLink: {
                    color: "bsaq4yhm"
                },
                mapContainer: {
                    height: "qkegxuty"
                },
                map: {
                    position: "g0rxnol2",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                }
            }
        },
        766491: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    contact: t,
                    businessProfile: n
                } = e, a = (0, r.isBizBot3pEnabled)() && n.isBizBot3p;
                let b, y, C;
                const M = () => {
                    (0, c.isBlueEducationEnabled)() && ((0, i.logClickProfileBadge)(t), d.ModalManager.open(h.default.createElement(o.default, null)))
                };
                null != n.customUrl && (C = h.default.createElement("div", {
                    className: (0, E.default)(v.subtitle)
                }, h.default.createElement(s.EmojiText, {
                    text: n.customUrl,
                    direction: "auto",
                    titlify: !0,
                    breakWord: !0,
                    inlineblock: !0
                })));
                const _ = (0, u.getShowBusinessCheckmarkAsPrimary)(t),
                    k = (0, u.getShowBusinessCheckmarkAsSecondary)(t);
                (0, u.getIsMe)(t) ? (b = h.default.createElement(f.Name, {
                    contact: t,
                    showMessageYourselfName: !0,
                    useVerifiedName: !0,
                    breakWord: !0,
                    selectable: !0
                }), t.name !== t.verifiedName && (y = h.default.createElement(f.Name, {
                    contact: t,
                    selectable: !0
                }))) : (b = h.default.createElement(f.Name, {
                    contact: t,
                    showBusinessCheckmark: _,
                    onClick: _ ? M : null,
                    makeCheckmarkClickable: _,
                    checkmarkLarge: !0,
                    breakWord: !0,
                    selectable: !0
                }), (0, u.getIsIAS)(t) ? y = h.default.createElement("div", {
                    className: (0, E.default)(v.subtitle)
                }, h.default.createElement(s.EmojiText, {
                    text: g.fbt._("Official WhatsApp Account", null, {
                        hk: "4oZMU1"
                    }),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                })) : (0, u.getId)(t).isBot() || a ? y = h.default.createElement("div", {
                    className: (0, E.default)(v.botSubtitle)
                }, g.fbt._("AI", null, {
                    hk: "2Mphpa"
                }), h.default.createElement(l.AiSignalIcon, {
                    width: 15,
                    height: 15,
                    xstyle: [m.uiMargin.top2, m.uiMargin.start2, v.botIcon]
                })) : (0, u.getIsCAPISupportAccount)(t) ? y = h.default.createElement("div", {
                    className: (0, E.default)(v.subtitle)
                }, h.default.createElement(s.EmojiText, {
                    text: (0, p.SupportChatSubtitle)(),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                })) : t.name && t.name !== t.verifiedName && (y = h.default.createElement(f.Name, {
                    contact: t,
                    showBusinessCheckmark: k,
                    onClick: k ? M : null,
                    makeCheckmarkClickable: k,
                    useVerifiedName: !0,
                    breakWord: !0,
                    selectable: !0
                })));
                return h.default.createElement("div", {
                    className: (0, E.default)(v.container)
                }, h.default.createElement("div", {
                    className: (0, E.default)(v.title)
                }, b), y, C)
            };
            var l = n(321545),
                r = n(354458),
                o = a(n(684625)),
                i = n(243224),
                u = n(660666),
                s = n(305521),
                c = n(97858),
                d = n(114850),
                f = n(21645),
                p = n(666836),
                m = n(676345),
                g = n(548360),
                h = a(n(667294)),
                E = a(n(156720));
            const v = {
                container: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "ngycyvoj",
                    marginStart: "svoq16ka"
                },
                subtitle: {
                    color: "p6nhtbpp",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                botSubtitle: {
                    color: "i8b0kslj",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                botIcon: {
                    color: "i8b0kslj"
                },
                title: {
                    fontSize: "iqrewfee",
                    fontWeight: "sy6s5v3r",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka"
                }
            }
        },
        449397: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessOpenHours = function(e) {
                const {
                    hours: t
                } = e, n = function(e) {
                    switch (e.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            return i.fbt._("{open} 24 hours", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                hk: "1aA6f9"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            return i.fbt._("{open} by appointment only", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                hk: "z8CGT"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            if (e.openUntil && e.additionalOpen && e.additionalClose) return i.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), i.fbt._param("time", p(e.openUntil)), i.fbt._param("additionalOpenTime", p(e.additionalOpen)), i.fbt._param("additionalCloseTime", p(e.additionalClose))], {
                                hk: "2dJgLQ"
                            });
                            if (e.openUntil) return i.fbt._("{open} until {time}", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), i.fbt._param("time", p(e.openUntil))], {
                                hk: "3Dd8an"
                            });
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED:
                            return e.opensAt ? i.fbt._("{closed}, opens at {time}", [i.fbt._param("closed", `<span class="${(0,s.default)(c)}">${i.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`), i.fbt._param("time", p(e.opensAt))], {
                                hk: "LvVmY"
                            }) : `<span class="${(0,s.default)(c)}">${i.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            return `<span class="${(0,s.default)(c)}">${i.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
                    }
                    return null
                }((0, r.getBusinessOpenState)(t));
                if (null == n) return null;
                const a = l.default.sanitize(n.toString());
                return u.default.createElement("div", {
                    className: (0, s.default)(f),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            };
            var l = a(n(724843)),
                r = n(542358),
                o = a(n(932325)),
                i = n(548360),
                u = a(n(667294)),
                s = a(n(156720));
            const c = {
                    color: "mvxzr2tb"
                },
                d = {
                    color: "j5au4wul"
                },
                f = {
                    color: "sbs3osm6",
                    fontSize: "f8jlpxt4",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "g105fvfm",
                    marginStart: "svoq16ka"
                };

            function p(e) {
                return null == e ? "" : e.toLocaleTimeString(o.default.getLocale(), {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        745309: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessProfile = function(e) {
                const {
                    contact: t
                } = e, [n, a, l, u] = (0, x.useContactValues)(e.contact.id, [g.getId, g.getVerifiedLevel, g.getName, g.getVerifiedName]), c = (0, D.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, A.useEffect)((() => {
                    new I.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: T.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                const f = A.default.createElement(R, {
                    contact: t
                });
                let p, h, C, _, k, S;
                const w = c;
                if (w.stale) p = A.default.createElement("div", {
                    className: s.default.contactBusinessInfoSpinner
                }, A.default.createElement(O.Spinner, {
                    size: 20,
                    stroke: 5
                }));
                else {
                    var N;
                    h = (null === (N = w.categories) || void 0 === N ? void 0 : N.length) ? A.default.createElement(W, {
                        icon: A.default.createElement(r.BusinessCategoryIcon, null)
                    }, A.default.createElement(v.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: w.categories.map((e => e.localized_display_name)).join(M.default.t(74))
                    })) : null, C = w.description ? A.default.createElement(W, {
                        icon: A.default.createElement(o.BusinessDescriptionIcon, null)
                    }, A.default.createElement(b.ExpandableText, {
                        text: w.description,
                        textLimit: m.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }, (e => {
                        let {
                            textLimit: t
                        } = e;
                        return A.default.createElement(v.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            breakWord: !0,
                            text: w.description,
                            textLimit: t
                        })
                    }))) : null, w.website && Array.isArray(w.website) && w.website.length && (_ = w.website.map(((e, t) => {
                        const n = (0, P.getWebsiteLink)(e),
                            a = A.default.createElement(v.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: e
                            }),
                            l = A.default.createElement(y.ExternalLink, {
                                className: s.default.link,
                                href: n
                            }, a);
                        return A.default.createElement(W, {
                            icon: A.default.createElement(d.BusinessWebsiteIcon, null),
                            key: t
                        }, l)
                    }))), w.businessHours && (k = A.default.createElement(j, {
                        businessHours: w.businessHours
                    }));
                    const e = w.email;
                    if (e) {
                        const t = A.default.createElement(v.EmojiText, {
                                selectable: !0,
                                direction: "auto",
                                text: e
                            }),
                            n = A.default.createElement(y.ExternalLink, {
                                className: s.default.link,
                                href: `mailto:${e}`
                            }, t);
                        S = A.default.createElement(W, {
                            icon: A.default.createElement(i.BusinessEmailIcon, null),
                            dir: "auto"
                        }, n)
                    }
                }
                const L = void 0 !== w.latitude && void 0 !== w.longitude || w.structuredAddress;
                let B;
                (p || L || h || C || null != k || S || _) && (B = A.default.createElement(E.default, {
                    theme: "padding"
                }, A.default.createElement("div", {
                    className: s.default.contactBusinessInfo
                }, p, A.default.createElement(F, {
                    contactName: l,
                    latitude: w.latitude,
                    longitude: w.longitude,
                    structuredAddress: w.structuredAddress
                }), h, C, k, S, _)));
                return A.default.createElement(A.default.Fragment, null, A.default.createElement(E.default, null, f), B)
            };
            var l = n(335843),
                r = n(942509),
                o = n(672244),
                i = n(556862),
                u = n(979504),
                s = a(n(161160)),
                c = n(817649),
                d = n(54509),
                f = n(62388),
                p = n(396574),
                m = a(n(846870)),
                g = n(660666),
                h = a(n(831269)),
                E = a(n(969358)),
                v = n(305521),
                b = n(999649),
                y = n(753233),
                C = n(975279),
                M = a(n(932325)),
                _ = a(n(459510)),
                k = n(300987),
                S = n(114850),
                w = a(n(517729)),
                P = n(341463),
                O = n(956113),
                I = n(875302),
                T = n(111540),
                N = n(548360),
                A = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = L(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                x = n(379811),
                D = n(655241);

            function L(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (L = function(e) {
                    return e ? n : t
                })(e)
            }

            function R(e) {
                let {
                    contact: t
                } = e;
                const n = t.verifiedLevel === c.VERIFIED_LEVEL.HIGH ? N.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : N.fbt._("Business account", null, {
                    hk: "2lzdAg"
                });
                return A.default.createElement(h.default, {
                    testid: "business-title",
                    onClick: S.ModalManager.open(A.default.createElement(w.default, {
                        contact: t
                    })),
                    side: A.default.createElement(C.InfoIcon, {
                        className: s.default.infoIcon,
                        displayInline: !0
                    })
                }, n)
            }

            function j(e) {
                let {
                    businessHours: t
                } = e;
                const [n, a] = (0, A.useState)(!0), l = (0, P.getBusinessHours)(t).map((e => {
                    const {
                        day: t,
                        hours: a,
                        first: l
                    } = e;
                    return !l && n ? null : A.default.createElement(B, {
                        day: t,
                        key: t,
                        hours: a,
                        first: l,
                        collapsed: n
                    })
                }));
                return A.default.createElement(W, {
                    icon: A.default.createElement(u.BusinessHoursIcon, null),
                    onClick: () => a(!n)
                }, l)
            }
            const B = e => {
                const t = e.first ? A.default.createElement("div", {
                    className: s.default.businessHoursChevron,
                    role: "button"
                }, A.default.createElement(f.ChevronDownAltIcon, {
                    className: e.collapsed ? "" : s.default.flipSvg,
                    displayInline: !0
                })) : null;
                return A.default.createElement("div", {
                    className: s.default.businessHoursRow
                }, A.default.createElement("div", {
                    className: s.default.businessHoursDay
                }, A.default.createElement(v.EmojiText, {
                    direction: "auto",
                    text: e.day
                })), A.default.createElement("div", {
                    className: s.default.businessHoursHours
                }, A.default.createElement(v.EmojiText, {
                    direction: "auto",
                    text: e.hours
                })), t)
            };
            const F = e => {
                    let {
                        contactName: t,
                        latitude: n,
                        longitude: a,
                        structuredAddress: r
                    } = e;
                    const o = r ? function(e) {
                        const {
                            streetAddress: t,
                            localizedCityName: n,
                            zipCode: a
                        } = e;
                        return t && n && a ? N.fbt._("{streetAddress}, {city} {zipCode}", [N.fbt._param("streetAddress", t), N.fbt._param("city", n), N.fbt._param("zipCode", a)], {
                            hk: "1McVXv"
                        }).toString() : t && n ? N.fbt._("{streetAddress}, {city}", [N.fbt._param("streetAddress", t), N.fbt._param("city", n)], {
                            hk: "1zyKhk"
                        }).toString() : t
                    }(r) : null;
                    let i, u;
                    if (null != n && null != a && (i = A.default.createElement("div", {
                            style: {
                                height: 150
                            },
                            className: s.default.businessMap
                        }, A.default.createElement(_.default, {
                            lat: n,
                            lng: a,
                            name: o || t,
                            width: 565,
                            height: 150
                        }))), o) {
                        let e;
                        e = null != n && null != a ? (0, k.getMapUrl)(n, a, o) : (0, k.getSearchUrl)(o), u = A.default.createElement("div", {
                            className: s.default.address
                        }, A.default.createElement(y.ExternalLink, {
                            href: e
                        }, A.default.createElement(v.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            text: o
                        })))
                    }
                    return u || i ? A.default.createElement(W, {
                        icon: A.default.createElement(l.BusinessAddressIcon, null)
                    }, u, i) : null
                },
                W = e => A.default.createElement("div", {
                    className: (0, p.classnamesConvertMeToStylexPlease)(s.default.dataRow, e.className),
                    onClick: e.onClick
                }, A.default.createElement("div", {
                    className: s.default.dataRowIcon
                }, e.icon), A.default.createElement("div", {
                    className: s.default.dataRowText
                }, e.children))
        },
        718796: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    contact: t,
                    businessProfile: n,
                    onOpenStatus: a,
                    onProductCatalog: E,
                    onProfilePicLoad: v,
                    onProfilePicClick: b,
                    isPhoneNumberHidden: y
                } = e;
                const {
                    businessHours: C,
                    categories: M
                } = (0, m.useModelValues)(n, ["businessHours", "categories"]), _ = f.default.createElement(r.default, {
                    contact: t,
                    businessProfile: n
                });
                let k;
                (0, u.getIsIAS)(t) || (0, u.getIsCAPISupportAccount)(t) || (0, u.getId)(t).isBot() || n.isBizBot3p || null == M || !(M.length > 0) || (k = f.default.createElement("div", {
                    className: (0, p.default)(h)
                }, M.map((e => e.localized_display_name)).join(d.default.t(73))));
                const S = C ? f.default.createElement(o.BusinessOpenHours, {
                        hours: C
                    }) : null,
                    w = t.businessProfile ? f.default.createElement(i.default, {
                        contact: t,
                        businessProfile: t.businessProfile,
                        onClick: b,
                        onOpenStatus: a,
                        onLoad: v
                    }) : null;
                return f.default.createElement(c.default, {
                    theme: "padding-no-margin"
                }, w, f.default.createElement("div", {
                    className: (0, p.default)(g)
                }, _, y && f.default.createElement(s.default, null), k, S, f.default.createElement(l.default, {
                    contact: t,
                    onProductCatalog: E,
                    displayRequestPnButton: y
                })))
            };
            var l = a(n(520228)),
                r = a(n(766491)),
                o = n(449397),
                i = a(n(411019)),
                u = n(660666),
                s = a(n(836513)),
                c = a(n(969358)),
                d = a(n(932325)),
                f = a(n(667294)),
                p = a(n(156720)),
                m = n(655241);
            const g = {
                    textAlign: "qfejxiq4"
                },
                h = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "brac1wpa",
                    marginStart: "svoq16ka",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6",
                    lineHeight: "jgi8eev7"
                }
        },
        855026: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExitedGroupMemberSection = function(e) {
                let {
                    group: t
                } = e;
                if (!(0, i.groupsPrivacyTipsEnabled)()) return null;
                return c.default.createElement(l.default, null, c.default.createElement(o.FlexColumn, {
                    padding: 16,
                    align: "center"
                }, c.default.createElement(u.WDSTextTitle, null, s.fbt._("You're no longer a participant in this group", null, {
                    hk: "1O1CWh"
                })), c.default.createElement(r.ExitedGroupQPSurface, {
                    group: t
                })))
            };
            var l = a(n(969358)),
                r = n(355793),
                o = n(690495),
                i = n(753284),
                u = n(851488),
                s = n(548360),
                c = a(n(667294))
        },
        466488: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    onClick: t,
                    parentGroupMetadata: n,
                    parentGroupChat: a
                } = e;
                const {
                    subgroupCount: v
                } = (0, h.default)(n), {
                    name: b
                } = (0, E.useModelValues)(a.contact, ["name"]), y = (0, r.isIntegritySuspendedCommunity)(a);
                (0, g.useEffect)((() => {
                    (0, d.queryAndUpdateSubgroupsMetadata)(n.id, n.joinedSubgroups)
                }), []);
                const C = m.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return g.default.createElement(u.default, {
                    theme: "no-padding"
                }, g.default.createElement(l.default, {
                    testid: "group-info-community-section",
                    image: g.default.createElement(i.DetailImage, {
                        id: n.id,
                        shape: i.DetailImageShape.Squircle,
                        size: 60
                    }),
                    primary: g.default.createElement(s.EmojiText, {
                        text: b,
                        ellipsify: !0
                    }),
                    onClick: t,
                    theme: "community-home",
                    secondary: g.default.createElement(p.TextSpan, {
                        size: "16",
                        color: "secondary"
                    }, C, y ? null : g.default.createElement(g.default.Fragment, null, c.default.isRTL() ? " - " : " · ", m.fbt._({
                        "*": "{count} Groups",
                        _1: "1 Group"
                    }, [m.fbt._plural(v, "count")], {
                        hk: "38FdVG"
                    }))),
                    detail: g.default.createElement(o.ChevronRightAltIcon, {
                        color: f.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    focusable: !0
                }))
            };
            var l = a(n(170206)),
                r = n(394164),
                o = n(755782),
                i = n(23641),
                u = a(n(969358)),
                s = n(305521),
                c = a(n(932325)),
                d = n(510900),
                f = n(220584),
                p = n(180519),
                m = n(548360),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                h = a(n(847116)),
                E = n(655241);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        483828: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t,
                    groupMetadata: n
                } = e;
                const {
                    id: a,
                    parentGroup: x,
                    isUnnamed: D
                } = (0, T.useModelValues)(n, ["id", "parentGroup", "isUnnamed"]), L = (0, I.default)(n.participants, "change:isAdmin", (() => n.participants.iAmAdmin())), R = (0, I.default)(n.participants, ["bulk_add", "bulk_remove", "reset"], (() => n.participants.length)), j = (0, i.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point"), B = (0, N.default)();
                if (!(0, d.communitiesEnabled)() || !L || null != x || R < j || n.groupType === E.GroupType.LINKED_ANNOUNCEMENT_GROUP || !(0, d.communitiesCreationEnabled)()) return null;
                const F = () => {
                        m.DrawerManager.openDrawerLeft(O.default.createElement(C.NewCommunityFlowLoadable, {
                            existingGroups: [a]
                        }), {
                            focusType: v.FocusType.TABBABLE
                        }), c.UiCommunityCreationAction.startSession(w.COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), c.UiCommunityCreationAction.enter(S.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO)
                    },
                    W = function() {
                        var e = (0, l.default)((function*(e) {
                            yield(0, o.default)((0, M.setGroupSubject)(t, e), B).catch((0, r.catchAbort)((() => {}))).catch((() => {
                                __LOG__(3)
                                `name_group_modal:onSetSubject failed`
                            })), b.ModalManager.close(), F()
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    G = () => {
                        b.ModalManager.open(O.default.createElement(p.ConfirmPopup, {
                            onOK: () => b.ModalManager.close(),
                            okText: (0, h.default)("OK")
                        }, P.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })))
                    };
                return O.default.createElement(g.default, {
                    theme: "no-padding"
                }, O.default.createElement(u.default, {
                    testid: "group-info-create-community-section",
                    image: O.default.createElement(f.CommunitySquircleIcon, {
                        iconXstyle: A.communitySquircle,
                        width: 40,
                        height: 40
                    }),
                    primary: O.default.createElement(k.TextSpan, {
                        size: "16"
                    }, P.fbt._("Start a community", null, {
                        hk: "2hSyE2"
                    })),
                    onClick: () => {
                        if (D) {
                            var e, n;
                            const a = P.fbt._("This group was created without a name. Give it a name to create a community.", null, {
                                hk: "2BkS8"
                            });
                            b.ModalManager.open(O.default.createElement(y.default, {
                                chat: t,
                                subtext: a,
                                onCancel: () => b.ModalManager.close(),
                                onOK: W,
                                editable: null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.canSetSubject(),
                                editRestrictionInfo: (null === (n = t.groupMetadata) || void 0 === n ? void 0 : n.restrict) ? G : void 0
                            }))
                        } else F()
                    },
                    theme: "community-create",
                    secondary: O.default.createElement(k.TextSpan, {
                        size: "14",
                        color: "secondary"
                    }, P.fbt._("Bring members together in topic-based groups", null, {
                        hk: "4mplI5"
                    })),
                    detail: O.default.createElement(s.ChevronRightAltIcon, {
                        color: _.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    focusable: !0
                }))
            };
            var l = a(n(348926)),
                r = n(898817),
                o = a(n(229922)),
                i = n(287461),
                u = a(n(170206)),
                s = n(755782),
                c = n(440067),
                d = n(174834),
                f = n(146281),
                p = n(103440),
                m = n(900316),
                g = a(n(969358)),
                h = a(n(395767)),
                E = n(862159),
                v = n(299950),
                b = n(114850),
                y = a(n(550506)),
                C = n(219548),
                M = n(470824),
                _ = n(220584),
                k = n(180519),
                S = n(135516),
                w = n(909588),
                P = n(548360),
                O = a(n(667294)),
                I = (a(n(156720)), a(n(524578))),
                T = n(655241),
                N = a(n(895851));
            const A = {
                communitySquircle: {
                    color: "fsk8o631"
                }
            }
        },
        20864: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    chat: t
                } = e, n = (0, c.useOptionalModelValues)(t.groupMetadata, ["groupType"]);
                let a;
                a = (0, r.communitiesEnabled)() && (null == n ? void 0 : n.groupType) === o.GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.default.createElement("div", {
                    className: (0, s.default)(d)
                }, i.fbt._("", null, {
                    hk: "4kc4Kr"
                })) : i.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return u.default.createElement(l.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: i.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: a
                })
            };
            var l = a(n(707655)),
                r = n(174834),
                o = n(862159),
                i = n(548360),
                u = a(n(667294)),
                s = a(n(156720)),
                c = n(655241);
            const d = {
                color: "tviruh8d",
                fontSize: "enbbiyaj"
            }
        },
        941943: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(287461),
                r = n(738501),
                o = n(374660),
                i = a(n(306007)),
                u = n(464659),
                s = a(n(740681)),
                c = n(998123),
                d = n(174834),
                f = n(359198),
                p = n(692310),
                m = n(660666),
                g = a(n(908081)),
                h = a(n(324093)),
                E = n(626194),
                v = a(n(969358)),
                b = a(n(209064)),
                y = a(n(409558)),
                C = n(71957),
                M = n(855026),
                _ = a(n(570834)),
                k = n(714574),
                S = a(n(466488)),
                w = a(n(483828)),
                P = a(n(20864)),
                O = a(n(299723)),
                I = n(767140),
                T = n(951688),
                N = a(n(453090)),
                A = n(503028),
                x = a(n(483447)),
                D = n(862159),
                L = n(769153),
                R = n(97858),
                j = n(114850),
                B = a(n(832897)),
                F = n(111367),
                W = n(474474),
                G = n(150103),
                H = a(n(634152)),
                V = n(407024),
                U = n(163139),
                z = n(428991),
                q = n(983271),
                Y = n(220584),
                K = n(180519),
                X = n(382117),
                Z = n(676345),
                Q = a(n(571256)),
                $ = n(571444),
                J = n(521394),
                ee = n(965927),
                te = n(744976),
                ne = n(869513),
                ae = n(818674),
                le = n(344575),
                re = n(548360),
                oe = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = ge(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                ie = a(n(156720)),
                ue = n(379811),
                se = a(n(401715)),
                ce = a(n(969651)),
                de = a(n(637660)),
                fe = n(808446),
                pe = n(655241),
                me = a(n(321201));

            function ge(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (ge = function(e) {
                    return e ? n : t
                })(e)
            }
            const he = {
                body: {
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                announcementGroupDisclaimer: {
                    textAlign: "ljrqcn24",
                    paddingTop: "n1yiu2zv",
                    paddingBottom: "jd93c9cp",
                    paddingEnd: "bcymb0na",
                    paddingStart: "e8k79tju",
                    lineHeight: "jgi8eev7",
                    wordBreak: "cw3vfol9"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function Ee(e, t) {
                var n, a, ge;
                const {
                    onVerification: Ee,
                    onClose: ve
                } = e, be = (0, me.default)(), ye = (0, ce.default)(), Ce = (0, se.default)(), Me = (0, pe.useModelValues)(e.chat, ["mute", "id", "pendingAction", "groupMetadata"]), _e = (0, pe.useModelValues)(e.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag", "defaultSubgroup"]), [ke, Se, we] = (0, ue.useContactValues)(e.contact.id, [m.getName, m.getId, k.getPendingAction]), Pe = _e.groupType === D.GroupType.LINKED_ANNOUNCEMENT_GROUP, Oe = (0, de.default)((() => new X.UiActionWamEvent({
                    uiActionType: Pe ? te.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : te.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                    uiActionPreloaded: !0,
                    isLid: _e.isIncognitoCag
                }))), Ie = (0, de.default)((() => new _.default)), Te = (0, de.default)((() => new _.default)), Ne = (0, oe.useRef)(null);
                (0, fe.useListener)(_e.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], ye), (0, fe.useListener)(_e.pendingParticipants, ["add", "remove", "reset"], ye);
                const Ae = () => {
                        var e;
                        const t = null === (e = _e.getParentGroupChat()) || void 0 === e ? void 0 : e.formattedTitle;
                        (0, p.groupOpenAddParticipantFlow)(_e, Me, t)
                    },
                    xe = () => {
                        j.ModalManager.open(oe.default.createElement(b.default, {
                            chat: Me,
                            chatId: Me.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    };
                let De;
                if ((0, oe.useEffect)((() => {
                        if ((0, o.isIntegritySuspendedDefaultSubgroup)(Me) ? (0, z.openTerminatedCommunityModal)() : (0, o.isTerminatedGroupOrNotMember)(Me) ? (0, o.isSupportGroup)(Me) || ((0, R.isGroupSuspendV2Enabled)() ? (0, q.openSuspendedGroupModalV2)(Me) : (0, q.openTerminatedGroupOrNotMemberModal)()) : (0, o.isSuspendedGroup)(Me) && ((0, R.isGroupSuspendV2Enabled)() ? (0, q.openSuspendedGroupModalV2)(Me) : (0, q.openSuspendedGroupModal)(!0 === (0, o.shouldIncludeEntityIdInAppealRequest)() ? _e.id.user.toString() : null)), _e.groupType !== D.GroupType.DEFAULT) {
                            new f.CommunityGroupJourneyEvent({
                                action: $.CHAT_FILTER_ACTION_TYPES.VIEW,
                                surface: ee.SURFACE_TYPE.GROUP_INFO,
                                chat: Me
                            }).commit()
                        }
                    }), []), (0, oe.useEffect)((() => {
                        _e.participants.ensureSorted();
                        _e.pendingParticipants.ensureSorted()
                    })), (0, oe.useEffect)((() => {
                        const e = Oe.current;
                        if (e) {
                            const t = _e.cachedDeviceSizeBucket;
                            null != t && (e.sizeBucket = t), Object.assign(e, (0, ne.getGroupCountMetricsFromGroupMetadata)((0, U.unproxy)(_e))), e.markUiActionT(), e.commit(), Oe.current = void 0
                        }(0, ae.logUiActionShadowPrivateStatsTestEvents)()
                    }), []), _e.canSetGroupProperty()) {
                    const t = oe.default.createElement(K.TextSpan, {
                            theme: "title"
                        }, re.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        })),
                        n = oe.default.createElement(G.SettingsIcon, {
                            color: Y.SvgColorProp.SECONDARY,
                            height: 17
                        });
                    De = oe.default.createElement(i.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: n,
                        onClick: e.onAdminSetting,
                        title: t,
                        spaced: !0
                    })
                }
                let Le = null;
                !(0, o.isSuspendedGroup)(Me) && e.onMediaGallery && (Le = oe.default.createElement(s.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, U.unproxy)(Me)
                }));
                const Re = Me && (0, r.shouldShowEphemeralSetting)(Me) ? oe.default.createElement(C.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: Me,
                    groupMetadata: _e,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let je = null;
                if ((0, d.communitiesEnabled)() && Me && _e.parentGroup && _e.participants.iAmMember()) {
                    const t = _e.getParentGroupChat();
                    (null == t ? void 0 : t.groupMetadata) && (je = oe.default.createElement(S.default, {
                        onClick: () => {
                            var t;
                            null === (t = e.onCommunityClick) || void 0 === t || t.call(e)
                        },
                        parentGroupMetadata: t.groupMetadata,
                        parentGroupChat: t
                    }))
                }
                let Be = null;
                Be = oe.default.createElement(y.default, {
                    highlightSurface: J.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: () => (0, F.showEncryptionInfoPopup)(Me),
                    text: Q.default.isGroupCallEnabled() ? re.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : re.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    }),
                    spaced: !0
                }), (0, o.isSupportGroup)(Me) && (Be = oe.default.createElement(x.default, {
                    onClick: xe,
                    spaced: !0
                }));
                const Fe = Me.mute.canMute() ? oe.default.createElement(B.default, {
                    chat: Me,
                    mute: Me.mute,
                    settings: H.default
                }) : null;
                let We, Ge = null;
                if (!(0, o.isSuspendedGroup)(Me) && e.onStarred) {
                    const t = oe.default.createElement(K.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, re.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })),
                        n = oe.default.createElement(V.StarIcon, {
                            color: Y.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Ge = oe.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        xstyle: Z.uiPadding.horiz0
                    }, oe.default.createElement(i.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onStarred,
                        title: t,
                        spaced: !0
                    }))
                }
                if (Me.hasKeptMsgs() || (0, r.isEphemeralSettingOn)(Me)) {
                    const t = oe.default.createElement(K.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, re.fbt._("Kept Messages", null, {
                            hk: "41CBIy"
                        })),
                        n = _e.restrict ? oe.default.createElement(K.TextDiv, {
                            theme: "muted"
                        }, re.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                            hk: "2Uhjiy"
                        })) : null,
                        a = oe.default.createElement(L.KeepInChatIcon, {
                            color: Y.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    We = oe.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                    }, oe.default.createElement(i.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: a,
                        onClick: e.onKept,
                        title: t,
                        secondaryTitle: n,
                        spaced: !0
                    }))
                }
                const He = (0, W.isReactionsEnabledInCAG)(Me) ? oe.default.createElement(c.PhoneNumberVisibilityIndicatorCag, {
                        chat: Me
                    }) : null,
                    Ve = (0, l.getABPropConfigValue)("report_to_admin_kill_switch") && _e.reportToAdminMode && _e.canSetGroupProperty() ? oe.default.createElement(i.default, {
                        testid: "block-rta-messages",
                        side: "chevron",
                        icon: oe.default.createElement(le.WarningIcon, {
                            color: Y.SvgColorProp.SECONDARY,
                            height: 16
                        }),
                        onClick: e.onSentForAdminReview,
                        title: oe.default.createElement(K.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, re.fbt._("Sent for admin review", null, {
                            hk: "2gzsHo"
                        })),
                        spaced: !0
                    }) : null;
                let Ue = null;
                (Fe || Be || Re) && (Ue = oe.default.createElement(u.ChatInfoDrawerSection, {
                    xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                }, Fe, Re, Ve, Be, De, He));
                const ze = oe.default.createElement(O.default, {
                        chat: (0, U.unproxy)(Me)
                    }),
                    qe = {
                        surface: "group-info-drawer",
                        extras: {
                            groupSize: _e.participants.length,
                            typeOfGroup: (0, D.groupTypeToWamEnum)((0, D.getGroupTypeFromGroupMetadata)((0, U.unproxy)(_e)))
                        }
                    },
                    Ye = Boolean(null === (n = Me.groupMetadata) || void 0 === n ? void 0 : n.isIncognitoCag) && !(null === (a = Me.groupMetadata) || void 0 === a || null === (ge = a.participants) || void 0 === ge ? void 0 : ge.iAmAdmin()) ? oe.default.createElement(v.default, {
                        theme: "transparent",
                        shadow: !1
                    }, oe.default.createElement(K.TextParagraph, {
                        xstyle: he.announcementGroupDisclaimer,
                        color: "secondary"
                    }, re.fbt._("Only admins can see all participants in this group", null, {
                        hk: "39jP44"
                    }))) : null;
                return oe.default.createElement("div", {
                    role: "complementary",
                    ref: Ce,
                    tabIndex: "-1",
                    "aria-label": re.fbt._("Group Info", null, {
                        hk: "3P80cG"
                    })
                }, oe.default.createElement(g.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: qe
                }, oe.default.createElement(E.DrawerHeader, {
                    title: re.fbt._("Group info", null, {
                        hk: "2SfTUZ"
                    }),
                    type: E.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        ve ? ve() : null == be || be.requestDismiss()
                    },
                    testid: "group-info-header"
                }), oe.default.createElement(h.default, null, oe.default.createElement("section", {
                    className: (0, ie.default)(he.body)
                }, oe.default.createElement(N.default, {
                    chat: (0, U.unproxy)(Me),
                    onAdminSetting: e.onAdminSetting,
                    onAddParticipant: Ae,
                    onClickParticipantsCount: () => {
                        var e;
                        null === (e = Ne.current) || void 0 === e || e.scrollIntoView()
                    }
                }), je, oe.default.createElement(P.default, {
                    chat: (0, U.unproxy)(Me),
                    showFullDescription: e.showFullGroupDescription
                }), Le, Ge, We, Ue, undefined, oe.default.createElement(w.default, {
                    chat: Me,
                    groupMetadata: _e
                }), !_e.participants.iAmMember() && oe.default.createElement(M.ExitedGroupMemberSection, {
                    group: Me
                }), oe.default.createElement(I.GroupInfoParticipantsSection, {
                    ref: Ne,
                    chat: (0, U.unproxy)(Me),
                    scrollToParticipantList: e.scrollToParticipantList,
                    flatListController: Ie.current,
                    onAddParticipant: Ae,
                    onOpenParticipantSearch: e => {
                        j.ModalManager.open(oe.default.createElement(A.GroupParticipantsFlow, {
                            chat: (0, U.unproxy)(Me),
                            onVerification: Ee,
                            initialStep: e
                        }), {
                            transition: "modal-flow"
                        })
                    },
                    onGroupInviteLink: e.onGroupInviteLink,
                    onPendingParticipants: e.onPendingParticipants,
                    onVerification: e.onVerification
                }), Ye, oe.default.createElement(T.GroupInfoPendingParticipantsSection, {
                    chat: (0, U.unproxy)(Me),
                    flatListController: Te.current
                }), ze))))
            }
            var ve = (0, oe.forwardRef)(Ee);
            t.default = ve
        },
        767140: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoParticipantsSection = void 0;
            var l = a(n(670983)),
                r = n(632157),
                o = n(287461),
                i = n(570588),
                u = n(72696),
                s = a(n(170206)),
                c = n(374660),
                d = n(464659),
                f = a(n(831584)),
                p = a(n(314810)),
                m = n(698867),
                g = n(780549),
                h = n(474103),
                E = n(174834),
                v = n(877171),
                b = n(103440),
                y = n(660666),
                C = n(465113),
                M = n(675085),
                _ = n(235630),
                k = n(305521),
                S = n(581354),
                w = n(512938),
                P = n(714574),
                O = n(503028),
                I = n(862159),
                T = n(406506),
                N = n(963950),
                A = n(114850),
                x = n(33014),
                D = n(164406),
                L = n(197988),
                R = n(507877),
                j = n(828720),
                B = a(n(671401)),
                F = a(n(802211)),
                W = n(447514),
                G = a(n(237889)),
                H = n(163139),
                V = n(220584),
                U = n(533426),
                z = n(392632),
                q = a(n(37875)),
                Y = n(459857),
                K = n(788271),
                X = a(n(124928)),
                Z = n(548360),
                Q = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = le(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                $ = (a(n(156720)), a(n(524578))),
                J = a(n(969651)),
                ee = a(n(426872)),
                te = a(n(637660)),
                ne = n(808446),
                ae = n(655241);

            function le(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (le = function(e) {
                    return e ? n : t
                })(e)
            }
            const re = {
                pendingParticipantsIcon: {
                    backgroundColor: "k6px2m13",
                    color: "cwwc04gk"
                }
            };

            function oe(e) {
                let {
                    data: t,
                    participants: n,
                    handleParticipantClick: a,
                    menuEnabled: l,
                    handleParticipantMenu: r,
                    contextMenu: o,
                    active: i,
                    elevatedPushNamesEnabled: u = !1
                } = e;
                const {
                    id: s
                } = t, c = n.get(s);
                if (!c) throw new w.UnknownDataError(t);
                const d = c.contact,
                    f = !!o && X.default.equals(d.id, o.contactId);
                return Q.default.createElement(p.default, {
                    active: i,
                    contact: d,
                    participant: c,
                    key: c.id.toString(),
                    onClick: a,
                    contextEnabled: () => l(d),
                    contextMenu: f,
                    onContext: e => r(e, d),
                    theme: "chat-info",
                    showNotifyName: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0,
                    participantCollection: n,
                    elevatedPushNamesEnabled: u
                })
            }
            const ie = (0, Q.forwardRef)(((e, t) => {
                var n;
                const a = (0, ae.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode", "participants"]),
                    {
                        membershipApprovalMode: p,
                        membershipApprovalRequests: w
                    } = a,
                    X = (0, te.default)((() => new G.default([], (e => e.id.toString())))),
                    le = (0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants;
                let ie = le.toArray();
                (0, h.hideCagMaskedParticipants)() && !0 !== a.isLidAddressingMode && (ie = le.filter((e => {
                    let {
                        id: t
                    } = e;
                    return (0, Y.isMeAccount)(t) || !t.isLid()
                })));
                const se = (0, c.getGroupParticipantsCount)(a),
                    ce = (0, J.default)();
                (0, ne.useListener)(le, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", ce);
                const [de, fe] = (0, Q.useState)(!0), pe = (0, Q.useRef)(), [me, ge] = (0, Q.useState)(), he = (0, c.isCommunityAnnouncementGroup)(e.chat);
                (0, Q.useEffect)((() => {
                    e.scrollToParticipantList && pe.current && (0, C.scrollIntoViewIfNeeded)(pe.current, !1)
                }), [e.scrollToParticipantList]), (0, Q.useImperativeHandle)(t, (() => ({
                    scrollIntoView() {
                        var e;
                        null === (e = pe.current) || void 0 === e || e.scrollIntoView()
                    }
                })));
                const [Ee, ve] = (0, ee.default)(a), be = (0, $.default)(w, ["add", "remove", "reset"], (() => w.length)), ye = (0, K.useShowPastParticipants)(e.chat), Ce = (0, Q.useMemo)((() => {
                    let e;
                    const t = [],
                        n = [];
                    ie.forEach((a => {
                        (0, y.getIsMe)(a.contact) ? e = a: a.isAdmin ? t.push(a) : n.push(a)
                    }));
                    let a = [];
                    return e && a.push(e), a = a.concat(t, n), ue(ie) && de && (a = a.slice(0, d.INFO_DRAWER_MAX_ROWS)), X.current.init(a.map((e => e.contact))), a.map((e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    })))
                }), [de, ie]);
                if (a.isSuspendedOrTerminated()) return null;
                const Me = Q.default.createElement(W.SearchIcon, {
                    color: V.SvgColorProp.SECONDARY
                });
                let _e, ke, Se, we;
                if (Ee && !a.support) {
                    const t = Q.default.createElement(F.default, {
                        theme: "compact"
                    }, Q.default.createElement(i.AddUserIcon, {
                        directional: !0
                    }));
                    _e = Q.default.createElement(s.default, {
                        testid: "add-user",
                        image: t,
                        theme: "chat-info",
                        primary: Z.fbt._("Add participant", null, {
                            hk: "48ECfz"
                        }),
                        onClick: e.onAddParticipant,
                        focusable: !0
                    })
                }
                if (le.iAmAdmin() && e.onGroupInviteLink && !a.support) {
                    const t = Q.default.createElement(F.default, {
                        theme: "compact"
                    }, Q.default.createElement(T.LinkIcon, null));
                    ke = Q.default.createElement(s.default, {
                        image: t,
                        theme: "chat-info",
                        primary: Z.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: e.onGroupInviteLink,
                        focusable: !0
                    })
                }
                if (p && be > 0 && (0, o.getABPropConfigValue)("group_join_request_m2") && ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && ve || le.iAmAdmin()) && (Se = Q.default.createElement(s.default, {
                        image: Q.default.createElement(F.default, {
                            xstyle: re.pendingParticipantsIcon,
                            theme: "compact"
                        }, Q.default.createElement(j.PendingParticipantsIcon, null)),
                        theme: "chat-info",
                        primary: (0, o.getABPropConfigValue)("group_join_request_m3") ? Z.fbt._("Pending requests", null, {
                            hk: "1Q1Qwz"
                        }) : Z.fbt._("Pending participants", null, {
                            hk: "3aWcdI"
                        }),
                        primaryDetail: Q.default.createElement(U.Tag, {
                            round: !0
                        }, be),
                        onClick: e.onPendingParticipants,
                        focusable: !0
                    })), ue(ie) && de) {
                    const t = ie.length <= 20,
                        n = ie.length - d.INFO_DRAWER_MAX_ROWS;
                    we = Q.default.createElement(f.default, {
                        numMore: n,
                        onClick: () => {
                            t ? fe(!1) : e.onOpenParticipantSearch(O.ParticipantsFlowStep.Participants)
                        },
                        viewAll: !t
                    })
                } else ye && (we = Q.default.createElement(N.ListButton, {
                    onClick: () => {
                        e.onOpenParticipantSearch(O.ParticipantsFlowStep.PastParticipants)
                    },
                    testid: "row-past-participants"
                }, Z.fbt._("View past participants", null, {
                    hk: "fYGd4"
                })));
                const Pe = e => {
                        const t = le.get(e.id);
                        return !!t && (le.canPromote(t) || le.canDemote(t) || le.canRemove(t) || le.canVerifyIdentity(t))
                    },
                    Oe = (t, n) => {
                        const a = le.assertGet(n.id);
                        if (!Pe(n)) return;
                        const l = [];
                        if (le.canPromote(a)) {
                            const t = () => {
                                const t = Z.fbt._('Make {participant} an admin for "{subject}" group?', [Z.fbt._param("participant", (0, P.getFormattedName)(a.contact)), Z.fbt._param("subject", e.chat.contact.name)], {
                                    hk: "1pedrf"
                                });
                                A.ModalManager.open(Q.default.createElement(b.ConfirmPopup, {
                                    onOK: () => {
                                        return t = !0, a.isAdmin || (a.contact.pendingAction++, (0, x.promoteParticipants)(e.chat, [a]).finally((() => {
                                            a.contact.pendingAction--
                                        }))), void(t && A.ModalManager.close());
                                        var t
                                    },
                                    okText: Z.fbt._("Make group admin", null, {
                                        hk: "3SZmiM"
                                    }),
                                    onCancel: () => A.ModalManager.close(),
                                    cancelText: Z.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, Q.default.createElement(k.EmojiText, {
                                    text: t
                                })))
                            };
                            let n;
                            if (he) {
                                var r;
                                n = Z.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const t = null === (r = e.chat.groupMetadata) || void 0 === r ? void 0 : r.getParentGroupChat();
                                l.push(Q.default.createElement(M.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    key: "promote",
                                    action: () => {
                                        (0, R.openCommunityParticipantPromoteConfirmation)(t, a, le, a.contact)
                                    }
                                }, n))
                            } else n = Z.fbt._("Make group admin", null, {
                                hk: "oCC4C"
                            }), l.push(Q.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                key: "promote",
                                action: t
                            }, n))
                        }
                        if (le.canRemove(a)) {
                            let t;
                            t = !0 === he && (0, E.communityAnnouncementImprovementM3Enabled)() ? Z.fbt._("Remove from community", null, {
                                hk: "WikVd"
                            }) : Z.fbt._("Remove", null, {
                                hk: "2Z8i6g"
                            }), l.push(Q.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                key: "remove",
                                action: () => {
                                    var t;
                                    const l = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.getParentGroupChat();
                                    if (!0 === he && null != l && (0, E.communityAnnouncementImprovementM3Enabled)()) return void A.ModalManager.open(Q.default.createElement(B.default, {
                                        contact: n,
                                        parentGroupChat: l
                                    }));
                                    const r = Z.fbt._('Remove {participant} from "{subject}" group?', [Z.fbt._param("participant", (0, P.getFormattedName)(a.contact)), Z.fbt._param("subject", e.chat.contact.name)], {
                                        hk: "MOPVX"
                                    });
                                    A.ModalManager.open(Q.default.createElement(b.ConfirmPopup, {
                                        onOK: () => {
                                            return t = !0, a.contact.pendingAction++, (0, x.removeParticipants)(e.chat, [a]).finally((() => {
                                                a.contact.pendingAction--
                                            })), void(t && A.ModalManager.close());
                                            var t
                                        },
                                        okText: Z.fbt._("Remove", null, {
                                            hk: "2GRvdl"
                                        }),
                                        onCancel: () => A.ModalManager.close(),
                                        cancelText: Z.fbt._("Cancel", null, {
                                            hk: "H0gNq"
                                        })
                                    }, Q.default.createElement(k.EmojiText, {
                                        text: r
                                    })))
                                }
                            }, t))
                        }
                        if (le.canDemote(a)) {
                            const t = () => {
                                    a.isAdmin && (a.contact.pendingAction++, (0, x.demoteParticipants)(e.chat, [a]).finally((() => {
                                        a.contact.pendingAction--
                                    })))
                                },
                                n = Z.fbt._("Dismiss as admin", null, {
                                    hk: "2YfmwL"
                                });
                            if (he) {
                                var o;
                                const t = null === (o = e.chat.groupMetadata) || void 0 === o ? void 0 : o.getParentGroupChat();
                                l.push(Q.default.createElement(M.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    key: "demote-admin",
                                    action: () => (0, L.openCommunityParticipantDemoteConfirmation)(a, t)
                                }, n))
                            } else l.push(Q.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-demote",
                                key: "demote-admin",
                                action: t
                            }, n))
                        }
                        if (le.canVerifyIdentity(a)) {
                            const t = Z.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            l.push(Q.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                key: "verify-identity",
                                action: () => {
                                    e.onVerification && e.onVerification(a.contact)
                                }
                            }, t))
                        }
                        ge({
                            contactId: n.id,
                            menu: l,
                            anchor: t.anchor,
                            event: t.event
                        })
                    },
                    Ie = (t, n) => {
                        const a = (0, c.getOneToOneContactFromGroupContact)(n.id);
                        (0, S.findChat)(a, "groupInfoParticipants").then((t => {
                            (0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? g.Cmd.chatInfoDrawer(t, {
                                showFullGroupDescription: !1,
                                scrollToParticipantList: !1,
                                sourceGroupChatOrNewsletter: (0, H.unproxy)(e.chat)
                            }): g.Cmd.openChatFromUnread(t).then((e => {
                                e && ((0, u.btmThreadsLoggingEnabled)() && v.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                    handleMultiple() {
                                        (0, m.handleActivitiesForChatThreadLogging)([{
                                            activityType: "groupMembershipReplies",
                                            ts: (0, r.unixTime)(),
                                            chatId: t.id
                                        }])
                                    }
                                }), v.ComposeBoxActions.focus(t))
                            }))
                        }))
                    },
                    Te = (0, _.elevatedPushNamesM2Enabled)(e.chat),
                    Ne = (null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.groupType) === I.GroupType.LINKED_ANNOUNCEMENT_GROUP ? se : le.length,
                    Ae = Z.fbt._({
                        "*": "Participants list: {group-participants} participants",
                        _1: "Participants list: 1 participant"
                    }, [Z.fbt._plural(Ne, "group-participants")], {
                        hk: "3CCjNY"
                    }),
                    xe = le.length ? Q.default.createElement(d.ChatInfoDrawerListSection, {
                        ref: pe,
                        titleTestId: "section-participants",
                        testid: "group-info-participants-section",
                        title: Z.fbt._({
                            "*": "{number} participants",
                            _1: "1 participant"
                        }, [Z.fbt._plural(Ne, "number")], {
                            hk: "bcYCT"
                        }),
                        titleOnClick: () => {
                            e.onOpenParticipantSearch(O.ParticipantsFlowStep.Participants)
                        },
                        subtitle: Me
                    }, _e, ke, Se, Q.default.createElement(D.NavigableFlatList, {
                        ariaLabel: Ae,
                        flatListController: e.flatListController,
                        listData: Ce,
                        onRenderItem: e => Q.default.createElement(oe, {
                            active: X.current,
                            data: e,
                            participants: le,
                            handleParticipantClick: Ie,
                            menuEnabled: Pe,
                            handleParticipantMenu: Oe,
                            contextMenu: me,
                            elevatedPushNamesEnabled: Te
                        }),
                        selection: X.current,
                        rotateList: !0
                    }), we) : null,
                    De = () => {
                        ge(null)
                    };
                let Le;
                return me && (Le = Q.default.createElement(z.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: De
                }, Q.default.createElement(q.default, {
                    contextMenu: me
                }))), Q.default.createElement(Q.default.Fragment, null, xe, Le)
            }));

            function ue(e) {
                return e.length > d.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = ie, ie.displayName = "GroupInfoParticipantsSection"
        },
        951688: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoPendingParticipantsSection = function(e) {
                var t, n;
                const a = (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata"),
                    u = (0, r.default)(null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.participants, "props.chat.groupMetadata?.participants"),
                    s = (0, r.default)(null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants"),
                    c = s.toArray(),
                    d = (0, k.default)();
                (0, w.useListener)(u, "change:isAdmin change:isSuperAdmin", d), (0, w.useListener)(s, "add remove reset", d);
                const [f, p] = (0, M.useState)(I(s)), m = (0, S.default)((() => new h.default([], (e => e.id.toString())))), [E, v] = (0, M.useState)();
                (0, _.default)((0, l.default)((function*() {
                    yield a.queryGroupsV4PendingInvite(), p(I(a.pendingParticipants))
                })), [a]);
                const P = (0, M.useMemo)((() => {
                    let e = c;
                    return I(c) && f && (e = e.slice(0, o.INFO_DRAWER_MAX_ROWS)), m.current.init(e.map((e => e.contact))), e.map((e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    })))
                }), [f, c]);
                if (a.isSuspendedOrTerminated()) return M.default.createElement(M.default.Fragment, null);
                const T = (e, t, n) => {
                        const a = "click" === t.type ? void 0 : t.target;
                        v({
                            contactId: n.id,
                            menu: e,
                            anchor: a,
                            event: t.anchor ? void 0 : t
                        })
                    },
                    N = C.fbt._({
                        "*": "Invited participants list: {group-participants} participants",
                        _1: "Invited participants list: 1 participant"
                    }, [C.fbt._plural(s.length, "group-participants")], {
                        hk: "3ebe4q"
                    });
                let A, x, D;
                s.length > 0 && (A = M.default.createElement(g.NavigableFlatList, {
                    ariaLabel: N,
                    flatListController: e.flatListController,
                    listData: P,
                    onRenderItem: e => M.default.createElement(O, {
                        active: m.current,
                        data: e,
                        onContextMenu: T,
                        pendingParticipants: s,
                        groupMetadata: a
                    }),
                    selection: m.current,
                    rotateList: !0
                }));
                if (I(s) && f) {
                    const e = s.length - o.INFO_DRAWER_MAX_ROWS;
                    x = M.default.createElement(i.default, {
                        numMore: e,
                        onClick: () => {
                            p(!1)
                        }
                    })
                }
                u.iAmAdmin() && s.length > 0 && (D = M.default.createElement(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-participants",
                    title: C.fbt._("{number} invited", [C.fbt._param("number", s.length)], {
                        hk: "2x0c1D"
                    })
                }, A, x));
                const L = () => {
                    v(null)
                };
                let R;
                E && (R = M.default.createElement(b.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: L
                }, M.default.createElement(y.default, {
                    contextMenu: E
                })));
                return M.default.createElement(M.default.Fragment, null, D, R)
            }, t.PendingParticipantItem = O;
            var l = a(n(348926)),
                r = a(n(670983)),
                o = n(464659),
                i = a(n(831584)),
                u = a(n(314810)),
                s = n(103440),
                c = n(675085),
                d = n(305521),
                f = n(512938),
                p = n(714574),
                m = n(114850),
                g = n(164406),
                h = a(n(237889)),
                E = n(625786),
                v = n(390737),
                b = n(392632),
                y = a(n(37875)),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                _ = a(n(802145)),
                k = a(n(969651)),
                S = a(n(637660)),
                w = n(808446);

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (P = function(e) {
                    return e ? n : t
                })(e)
            }

            function O(e) {
                let {
                    data: t,
                    active: n,
                    pendingParticipants: a,
                    groupMetadata: l,
                    onContextMenu: r
                } = e;
                const {
                    id: o
                } = t, i = a.get(o);
                if (!i) throw new f.UnknownDataError(t);
                return M.default.createElement(u.default, {
                    active: n,
                    contact: i.contact,
                    participant: i,
                    key: i.id.toString(),
                    contextEnabled: () => !1,
                    contextMenu: !0,
                    onContext: e => (e => {
                        const t = [M.default.createElement(c.DropdownItem, {
                            testid: "mi-grp-promote-admin",
                            key: "promote",
                            action: () => {
                                m.ModalManager.open(M.default.createElement(s.ConfirmPopup, {
                                    onOK: () => {
                                        m.ModalManager.close(), l.revokeGroupsV4AddInvite([i.id]).then((() => {
                                            v.ToastManager.open(M.default.createElement(E.Toast, {
                                                msg: C.fbt._("Invite reset", null, {
                                                    hk: "MgErr"
                                                })
                                            }))
                                        }))
                                    },
                                    okText: C.fbt._("Reset link", null, {
                                        hk: "2Zb3R4"
                                    }),
                                    onCancel: () => m.ModalManager.close(),
                                    cancelText: C.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, M.default.createElement(d.EmojiText, {
                                    text: C.fbt._("Reset invite for {participant}? If you reset the invite, {participant} won't be able to use it to join this group.", [C.fbt._param("participant", (0, p.getFormattedName)(i.contact))], {
                                        hk: "y3tyS"
                                    })
                                })))
                            }
                        }, C.fbt._("Revoke invite", null, {
                            hk: "4on28q"
                        }))];
                        r(t, e, i.contact)
                    })(e),
                    theme: "chat-info",
                    showNotifyName: !0,
                    isPendingParticipant: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0
                })
            }

            function I(e) {
                return e.length > o.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
        },
        453090: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, a, l;
                const r = (0, B.useModelValues)(e.chat, ["labels"]),
                    o = (0, B.useOptionalModelValues)(e.chat.groupMetadata, ["size", "creation"]),
                    i = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.groupType,
                    u = null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.participants,
                    s = (0, R.default)();
                (0, j.useListener)(u, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", s);
                const c = null !== (a = null == u ? void 0 : u.length) && void 0 !== a ? a : 0,
                    d = null !== (l = null == o ? void 0 : o.size) && void 0 !== l ? l : 0,
                    f = (null == u ? void 0 : u.iAmAdmin()) ? c : d;
                let g = x.fbt._("Group", null, {
                    hk: "DNiv2"
                });
                i === b.GroupType.LINKED_ANNOUNCEMENT_GROUP && (g = x.fbt._("Announcements", null, {
                    hk: "GNIKa"
                }));
                const E = x.fbt._({
                    "*": "{number} participants",
                    _1: "1 participant"
                }, [x.fbt._plural(i === b.GroupType.LINKED_ANNOUNCEMENT_GROUP ? f : c, "number")], {
                    hk: "bcYCT"
                });
                return D.default.createElement(m.default, {
                    theme: "padding-large"
                }, D.default.createElement(h.FlexColumn, {
                    align: "center"
                }, D.default.createElement(V, {
                    chat: e.chat,
                    xstyle: H.photo,
                    sendGroupProfilePictureLoggingEvent: (t, n, a) => {
                        var l, r, o;
                        const i = null === (l = e.chat) || void 0 === l || null === (r = l.groupMetadata) || void 0 === r ? void 0 : r.creation,
                            s = new Date(1e3 * (null != i ? i : 0)),
                            c = new Intl.DateTimeFormat("en", {
                                year: "numeric"
                            }).format(s),
                            d = new Intl.DateTimeFormat("en", {
                                month: "2-digit"
                            }).format(s),
                            p = new Intl.DateTimeFormat("en", {
                                day: "2-digit"
                            }).format(s),
                            m = null != i ? `${c}-${d}-${p}` : "",
                            g = (0, A.numberToPreciseSizeBucket)(f),
                            h = null !== (o = null == u ? void 0 : u.iAmAdmin()) && void 0 !== o && o;
                        new v.GroupProfilePictureWamEvent({
                            groupCreationDs: m,
                            groupProfileAction: t,
                            preciseGroupSizeBucket: g,
                            isAdmin: h,
                            hasProfilePicture: n,
                            profilePictureType: a
                        }).commit()
                    }
                }), D.default.createElement(z, {
                    chat: e.chat
                }), D.default.createElement("div", {
                    className: (0, L.default)(H.groupSecondary)
                }, D.default.createElement(p.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, D.default.createElement(T.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, g, (null == o ? void 0 : o.isSuspendedOrTerminated()) ? null : D.default.createElement(D.default.Fragment, null, y.default.isRTL() ? " - " : " · ", D.default.createElement(N.default, {
                    onClick: e.onClickParticipantsCount
                }, E))))), D.default.createElement(C.default, {
                    labels: r.labels
                })))
            };
            var l = a(n(348926)),
                r = n(898817),
                o = n(122583),
                i = a(n(670983)),
                u = a(n(229922)),
                s = n(287461),
                c = n(374660),
                d = n(174834),
                f = n(103440),
                p = n(306703),
                m = a(n(969358)),
                g = a(n(395767)),
                h = n(690495),
                E = a(n(559719)),
                v = n(600145),
                b = n(862159),
                y = a(n(932325)),
                C = a(n(344460)),
                M = G(n(288057)),
                _ = n(114850),
                k = n(21645),
                S = n(843337),
                w = n(588792),
                P = n(511696),
                O = n(115948),
                I = n(470824),
                T = n(180519),
                N = a(n(625903)),
                A = n(802027),
                x = n(548360),
                D = G(n(667294)),
                L = a(n(156720)),
                R = a(n(969651)),
                j = n(808446),
                B = n(655241),
                F = a(n(895851));

            function W(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (W = function(e) {
                    return e ? n : t
                })(e)
            }

            function G(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = W(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            const H = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function V(e) {
                const t = (0, B.useModelValues)(e.chat, ["isReadOnly"]),
                    n = (0, B.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]),
                    a = (0, B.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]),
                    l = (0, B.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]),
                    [s, f] = (0, D.useState)(!1),
                    [p, m] = (0, D.useState)(!1),
                    g = (0, F.default)(),
                    h = l.groupType === b.GroupType.LINKED_ANNOUNCEMENT_GROUP;
                let E = w.PhotoPickerType.GROUP;
                (0, d.communitiesEnabled)() && (h ? E = w.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP : l.groupType === b.GroupType.LINKED_GENERAL_GROUP && (0, d.communityGeneralChatUIEnabled)() && (E = w.PhotoPickerType.GENERAL_GROUP));
                const v = t.isReadOnly || !a.canDelete() && !a.canSet() || (0, c.isSupportGroup)(t) || h || l.isSuspendedOrTerminated();
                return D.default.createElement("div", {
                    className: (0, L.default)(e.xstyle)
                }, D.default.createElement(P.PhotoPickerLoadable, {
                    key: String(s),
                    type: E,
                    id: n.id,
                    attachToChat: !0,
                    pending: p,
                    startImage: a.imgFull,
                    readOnly: v,
                    onImageSet: (e, t) => {
                        let n;
                        m(!0), n = e && t ? (0, O.setProfilePic)(a, e, t) : (0, O.deleteProfilePic)(a), (0, u.default)(n, g).catch((0, r.catchAbort)((() => {}))).catch((0, o.filteredCatch)(M.ActionError, (() => {
                            __LOG__(3)
                            `GroupInfoDrawer: failed to set/delete group image`, f(!s)
                        }))).finally((() => {
                            m(!1)
                        }))
                    },
                    sendGroupProfilePictureLoggingEvent: e.sendGroupProfilePictureLoggingEvent
                }))
            }
            const U = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z(e) {
                const t = (0, B.useModelValues)(e.chat.contact, ["name"]),
                    n = (0, B.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]),
                    a = (0, F.default)(),
                    o = function() {
                        var n = (0, l.default)((function*(n) {
                            const l = n;
                            l !== t.name && (yield(0, u.default)((0, I.setGroupSubject)(e.chat, l), a).catch((0, r.catchAbort)((() => {}))).catch((() => {
                                __LOG__(3)
                                `group_info_drawer:onSetSubject failed`
                            })))
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    c = () => {
                        _.ModalManager.open(D.default.createElement(f.ConfirmPopup, {
                            onOK: () => _.ModalManager.close(),
                            okText: (0, g.default)("OK")
                        }, x.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })))
                    };
                return n.support ? D.default.createElement(T.TextHeader, {
                    className: (0, L.default)(U),
                    level: "2",
                    theme: "large"
                }, D.default.createElement(k.GroupName, {
                    chat: e.chat,
                    groupMetadata: n,
                    breakWord: !0,
                    checkmarkLarge: !0
                })) : n.isUnnamed && (0, s.getABPropConfigValue)("ugr_enabled") ? D.default.createElement(E.default, {
                    subject: (0, S.calculateUnnamedGroupParticipantsList)(n).toLocaleString(),
                    onSave: o,
                    editable: n.canSetSubject(),
                    editRestrictionInfo: n.restrict ? c : void 0
                }) : D.default.createElement(E.default, {
                    subject: t.name || e.chat.formattedTitle,
                    onSave: o,
                    editable: n.canSetSubject(),
                    editRestrictionInfo: n.restrict ? c : void 0
                })
            }
        },
        795767: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(670983)),
                r = n(374660),
                o = n(780549),
                i = n(474103),
                u = n(174834),
                s = n(153316),
                c = a(n(402085)),
                d = n(675085),
                f = n(235630),
                p = n(305521),
                m = n(581354),
                g = n(714574),
                h = n(862159),
                E = n(114850),
                v = n(33014),
                b = n(197988),
                y = n(507877),
                C = n(392632),
                M = a(n(37875)),
                _ = n(676345),
                k = n(459857),
                S = n(788271),
                w = n(851488),
                P = n(548360),
                O = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                I = a(n(156720)),
                T = a(n(969651)),
                N = n(808446);

            function A(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (A = function(e) {
                    return e ? n : t
                })(e)
            }
            const x = {
                dropdownText: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                },
                generalChatContainer: {
                    backgroundColor: "ihvf49ua"
                }
            };

            function D(e, t) {
                var n, a;
                const {
                    chat: o,
                    onVerification: m,
                    onPastParticipants: A
                } = e, [D, R] = function(e, t) {
                    const [n, a] = (0, O.useState)(null), o = (t, n) => {
                        t.isAdmin || (t.contact.pendingAction++, (0, v.promoteParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        }))), n && E.ModalManager.close()
                    }, i = (t, n) => {
                        t.contact.pendingAction++, (0, v.removeParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        })), n && E.ModalManager.close()
                    }, u = t => {
                        t.isAdmin && (t.contact.pendingAction++, (0, v.demoteParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        })))
                    }, s = () => {
                        a(null)
                    };
                    let c;
                    n && (c = O.default.createElement(C.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: !0,
                        popable: !0,
                        dismissOnWindowResize: !0,
                        requestDismiss: s
                    }, O.default.createElement(M.default, {
                        contextMenu: n
                    })));
                    return [c, (n, s) => {
                        const c = (0, l.default)(e.groupMetadata, "chat.groupMetadata").participants,
                            f = c.assertGet(s.id.toString()),
                            m = [],
                            h = (0, r.isCommunityAnnouncementGroup)(e);
                        if (c.canPromote(f)) {
                            let t;
                            if (h) {
                                var v;
                                t = P.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const n = null === (v = e.groupMetadata) || void 0 === v ? void 0 : v.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    key: "promote",
                                    action: () => {
                                        (0, y.openCommunityParticipantPromoteConfirmation)(n, f, c, f.contact)
                                    }
                                }, t))
                            } else t = P.fbt._("Make group admin", null, {
                                hk: "3SZmiM"
                            }), m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                key: "promote",
                                action: () => o(f, !1)
                            }, t))
                        }
                        if (c.canRemove(f)) {
                            const e = P.fbt._("Remove", null, {
                                hk: "2Z8i6g"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                key: "remove",
                                action: () => i(f, !1)
                            }, e))
                        }
                        if (c.canDemote(f)) {
                            const t = () => u(f),
                                n = P.fbt._("Dismiss as admin", null, {
                                    hk: "243sNl"
                                });
                            if (h) {
                                var C;
                                const t = null === (C = e.groupMetadata) || void 0 === C ? void 0 : C.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    key: "demote-admin",
                                    action: () => (0, b.openCommunityParticipantDemoteConfirmation)(f, t)
                                }, n))
                            } else m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-demote",
                                key: "demote-admin",
                                action: t
                            }, n))
                        }
                        if (c.canVerifyIdentity(f)) {
                            const e = P.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                key: "verify-identity",
                                action: () => {
                                    E.ModalManager.close(), null == t || t(f.contact)
                                }
                            }, e))
                        }
                        const M = (0, k.isMeAccount)(f.contact.id) ? P.fbt._("Message yourself", null, {
                            hk: "LDbjA"
                        }) : P.fbt._("Message {author}", [P.fbt._param("author", (0, g.getFormattedShortName)(f.contact))], {
                            hk: "1kM7Cg"
                        });
                        m.push(O.default.createElement(d.DropdownItem, {
                            key: "message author",
                            ariaLabel: M,
                            action: L.bind(null, f.contact.id),
                            addSpacing: !0
                        }, O.default.createElement(p.EmojiText, {
                            text: M,
                            xstyle: x.dropdownText
                        })));
                        const _ = "click" === n.type ? void 0 : n.target;
                        a({
                            contactId: s.id,
                            menu: m,
                            anchor: _,
                            event: n.anchor ? void 0 : n
                        })
                    }]
                }(o, m), j = (0, T.default)(), B = null === (n = o.groupMetadata) || void 0 === n ? void 0 : n.participants;
                (0, N.useListener)(B, ["bulk_add", "bulk_remove", "reset"], j);
                const F = (0, S.useShowPastParticipants)(o),
                    W = (0, i.hideCagMaskedParticipants)(),
                    G = null == B ? void 0 : B.map((e => e.contact));
                let H;
                F && (H = {
                    text: P.fbt._("View past participants", null, {
                        hk: "fYGd4"
                    }),
                    onClick: A
                });
                let V = null;
                if ((null === (a = o.groupMetadata) || void 0 === a ? void 0 : a.groupType) === h.GroupType.LINKED_GENERAL_GROUP && (0, u.communityGeneralChatUIEnabled)()) {
                    var U;
                    const e = !!(null === (U = o.groupMetadata) || void 0 === U ? void 0 : U.generalChatAutoAddDisabled);
                    V = O.default.createElement("div", {
                        className: (0, I.default)([x.generalChatContainer, _.uiPadding.vert12, _.uiPadding.horiz30])
                    }, O.default.createElement(w.WDSTextMuted, null, (0, s.getGeneralChatParticipantListText)(e)))
                }
                return O.default.createElement(O.default.Fragment, null, O.default.createElement(c.default, {
                    ref: t,
                    title: P.fbt._("Search Participants", null, {
                        hk: "M6lxB"
                    }),
                    filter: e => {
                        var t;
                        const n = null == B ? void 0 : B.get(e.id.toString());
                        return null != n && (!W || !1 !== (null === (t = o.groupMetadata) || void 0 === t ? void 0 : t.isLidAddressingMode) || ((0, k.isMeAccount)(n.id) || !n.id.isLid()))
                    },
                    onCancel: () => {
                        E.ModalManager.close()
                    },
                    openContextOnClick: !0,
                    contextEnabled: () => !1,
                    contextMenu: e => !(0, k.isMeAccount)(e),
                    onContext: R,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: (0, f.elevatedPushNamesM2Enabled)(o),
                    listenForAdminChange: !0,
                    participantCollection: (0, l.default)(B, "participants"),
                    contacts: G,
                    button: H,
                    showStatusRingAroundProfilePhoto: !0,
                    firstRows: [V]
                }), D)
            }
            const L = e => {
                const t = (0, r.getOneToOneContactFromGroupContact)(e);
                (0, m.findChat)(t, "groupParticipantSearch").then((e => {
                    E.ModalManager.close(), o.Cmd.openChatFromUnread(e)
                }))
            };
            var R = (0, O.forwardRef)(D);
            t.default = R
        },
        503028: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupParticipantsFlow = function(e) {
                const {
                    chat: t,
                    onVerification: n,
                    initialStep: a
                } = e, [s, c] = (0, i.useFlow)(a);
                if (!c.step) return null;
                let d;
                switch (c.step) {
                    case u.Participants:
                        d = o.default.createElement(l.default, {
                            chat: t,
                            onVerification: n,
                            onPastParticipants: () => c.push(u.PastParticipants)
                        });
                        break;
                    case u.PastParticipants:
                        {
                            const e = c.stackSize() > 1,
                                n = () => c.pop();d = e ? o.default.createElement(r.default, {
                                chat: t,
                                onBack: n
                            }) : o.default.createElement(r.default, {
                                chat: t,
                                onClose: n
                            });
                            break
                        }
                }
                return o.default.createElement(s, {
                    flow: c
                }, d)
            }, t.ParticipantsFlowStep = void 0;
            var l = a(n(795767)),
                r = a(n(795367)),
                o = a(n(667294)),
                i = n(839062);
            const u = n(76672).Mirrored(["Participants", "PastParticipants"]);
            t.ParticipantsFlowStep = u
        },
        176809: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    participant: t,
                    elevatedPushNamesEnabled: n = !1
                } = e, {
                    contact: a
                } = t, [h, E, v, b, y, C, M] = (0, g.useContactValues)(a.id, [o.getId, o.getShowBusinessCheckmarkAsPrimary, o.getName, o.getPushname, o.getNotifyName, s.getFormattedName, s.getFormattedPhone]), _ = m.default.createElement(d.Name, {
                    contact: a,
                    showBusinessCheckmark: E,
                    showLabel: !0,
                    titlify: !0,
                    ellipsify: !0,
                    you: !0,
                    showNotifyName: n,
                    elevatedPushNamesEnabled: n
                }), k = r.Clock.pastParticipantOnDateAtTime(t.leaveTs, function(e) {
                    const t = e.id.equals((0, f.getMeUser)());
                    if (e.leaveReason === c.LeaveReason.Left) return t ? p.fbt._("Left", null, {
                        hk: "3R2igg"
                    }) : p.fbt._("Left", null, {
                        hk: "3kbdqU"
                    });
                    return t ? p.fbt._("Removed", null, {
                        hk: "4vPnHl"
                    }) : p.fbt._("Removed", null, {
                        hk: "3LiTU6"
                    })
                }(t)), S = (0, u.pushNameCanBeUsed)(a) && n ? M : null;
                return m.default.createElement(l.default, {
                    image: m.default.createElement(i.DetailImage, {
                        id: h
                    }),
                    primary: _,
                    secondary: k,
                    secondaryDetail: S
                })
            };
            var l = a(n(170206)),
                r = n(63014),
                o = n(660666),
                i = n(23641),
                u = n(235630),
                s = n(714574),
                c = n(687352),
                d = n(21645),
                f = n(459857),
                p = n(548360),
                m = a(n(667294)),
                g = n(379811)
        },
        795367: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(474103),
                r = n(235630),
                o = n(753233),
                i = n(258105),
                u = a(n(395767)),
                s = n(512938),
                c = n(690495),
                d = a(n(176809)),
                f = a(n(932325)),
                p = n(417696),
                m = n(608456),
                g = a(n(772549)),
                h = n(676345),
                E = n(459857),
                v = n(548360),
                b = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                y = (a(n(156720)), a(n(261716))),
                C = a(n(524578));

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }
            const _ = "HEADER",
                k = "ROW",
                S = "DISCLAIMER",
                w = (0, p.ListModalFactory)();

            function P(e, t) {
                var n;
                const {
                    chat: a,
                    onBack: o,
                    onClose: i
                } = e, u = null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.pastParticipants, [s, c] = (0, y.default)(), d = (0, C.default)(u, ["buld_add", "bulk_remove", "reset"], (() => {
                    var e;
                    const t = f.default.accentFold(s),
                        n = (0, m.numberSearch)(t),
                        a = null !== (e = null == u ? void 0 : u.getValidRecords().filter((e => {
                            const a = !t || e.contact.searchMatch(t, n);
                            return (0, l.hideCagMaskedParticipants)() ? ((0, E.isMeAccount)(e.id) || !e.id.isLid()) && a : a
                        }))) && void 0 !== e ? e : [];
                    if (!a.length) return [];
                    const r = [];
                    return r.push({
                        type: _,
                        header: v.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        itemKey: "list_header"
                    }), a.forEach(((e, t) => r.push({
                        type: k,
                        participant: e,
                        itemKey: `${e.id.toString()}_${t}`
                    }))), r.push({
                        type: S
                    }), r
                }), [s]);
                return b.default.createElement(w, {
                    ref: t,
                    title: v.fbt._("Search past participants", null, {
                        hk: "1d6pYh"
                    }),
                    data: d,
                    renderItem: e => b.default.createElement(O, {
                        data: e,
                        elevatedPushNamesEnabled: (0, r.elevatedPushNamesM2Enabled)(a)
                    }),
                    emptyState: b.default.createElement(N, null),
                    onSearch: c,
                    searchPlaceholder: v.fbt._("Search contacts", null, {
                        hk: "3gUOKZ"
                    }),
                    onBack: o,
                    onCancel: i
                })
            }

            function O(e) {
                var t;
                let {
                    data: n,
                    elevatedPushNamesEnabled: a
                } = e;
                switch (n.type) {
                    case _:
                        return b.default.createElement(g.default, {
                            header: null !== (t = n.header) && void 0 !== t ? t : "",
                            uppercase: !1
                        });
                    case k:
                        return b.default.createElement(d.default, {
                            participant: n.participant,
                            elevatedPushNamesEnabled: a
                        });
                    case S:
                        return b.default.createElement(T, null);
                    default:
                        throw new s.UnknownDataError(n)
                }
            }
            const I = {
                row: {
                    height: "graaj7av",
                    backgroundColor: "ihvf49ua"
                },
                disclaimer: {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62"
                },
                empty: {
                    fontSize: "enbbiyaj",
                    color: "eruf1vka"
                }
            };

            function T() {
                return b.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.disclaimer, h.uiPadding.horiz15],
                    align: "center",
                    justify: "center"
                }, b.default.createElement("span", null, v.fbt._("People who left or were removed in the last 60 days. {=m2}", [v.fbt._implicitParam("=m2", b.default.createElement(o.ExternalLink, {
                    href: (0, i.getHowToExitAndDeleteGroupsFaq)()
                }, v.fbt._("Learn More", null, {
                    hk: "44tT41"
                })))], {
                    hk: "gdXOy"
                })))
            }

            function N() {
                return b.default.createElement(b.default.Fragment, null, b.default.createElement(g.default, {
                    header: v.fbt._("Past participants", null, {
                        hk: "2k91Dw"
                    }),
                    uppercase: !1
                }), b.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.empty],
                    align: "center",
                    justify: "center"
                }, b.default.createElement("span", null, (0, u.default)("No results found"))), b.default.createElement(T, null))
            }
            var A = (0, b.forwardRef)(P);
            t.default = A
        },
        483447: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onClick: t,
                    spaced: n
                } = e, a = s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, u.fbt._("Security", null, {
                    hk: "2BYJDI"
                })), c = s.default.createElement(i.TextDiv, {
                    theme: "muted"
                }, u.fbt._("Click to learn how messages and calls are secured.", null, {
                    hk: "1UxhjE"
                })), d = s.default.createElement(r.LockIcon, {
                    color: o.SvgColorProp.SECONDARY,
                    height: 20
                });
                return s.default.createElement(l.default, {
                    icon: d,
                    onClick: t,
                    title: a,
                    secondaryTitle: c,
                    spaced: n
                })
            };
            var l = a(n(306007)),
                r = n(821063),
                o = n(220584),
                i = n(180519),
                u = n(548360),
                s = a(n(667294))
        },
        788271: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useShowPastParticipants = function(e) {
                const t = (0, o.useOptionalModelValues)(e.groupMetadata, ["participants", "pastParticipants", "groupType"]),
                    n = null == t ? void 0 : t.pastParticipants;
                if (!(0, r.default)(n, ["bulk_add", "bulk_remove", "reset"], (() => Boolean(null == n ? void 0 : n.getValidRecords().length)))) return !1;
                if ((null == t ? void 0 : t.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) return Boolean(null == t ? void 0 : t.participants.iAmAdmin());
                return !0
            };
            var l = n(862159),
                r = a(n(524578)),
                o = n(655241)
        },
        883537: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, c.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return s.default.createElement(o.default, {
                    mediaData: t,
                    placeholderRenderer: p
                }, (t => s.default.createElement(f, {
                    url: t,
                    msg: e.msg
                })))
            };
            var l = n(396574),
                r = a(n(936027)),
                o = a(n(674465)),
                i = n(782173),
                u = n(548360),
                s = a(n(667294)),
                c = n(655241);
            const d = e => {
                e.stopPropagation()
            };

            function f(e) {
                let {
                    url: t,
                    msg: n
                } = e;
                return s.default.createElement(i.AudioTag, {
                    url: t,
                    className: r.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: !0,
                    msg: n,
                    controls: !0,
                    testId: "media-audio"
                }, u.fbt._("Your browser doesn't support audio playback.", null, {
                    hk: "hvWWG"
                }))
            }

            function p() {
                return s.default.createElement("div", {
                    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.imageAudio, r.default.mediaViewerPlaceholder),
                    onClick: d
                })
            }
        },
        548290: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const {
                    msg: n,
                    onHightlightCloseEnd: a,
                    msgIndexInAlbum: l,
                    onViewOnceInfoClick: r,
                    onClose: i
                } = e, s = (0, be.useRef)(null), [c, d, f, p, m, h, E, b, M, k, S, P, O, I, A, x] = (0, _e.useMsgValues)(e.msg.id, [W.getId, W.getStar, W.getIsGroupMsg, W.getType, W.getIsGif, W.getIsViewOnce, W.getSender, w.getSenderObj, W.getT, W.getIsSentByMe, W.getIsStickerMsg, W.getBroadcastId, w.getIsUnsentMedia, W.getIsKept, W.getMessageSecret, W.getIsCarouselCard]), L = (0, V.useWAWebLocalizedViewCount)(n.id), j = (0, w.getChat)(n), B = (0, Me.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]), [G, H] = (0, be.useState)(null), [z, q] = (0, be.useState)(null), Y = (0, be.useRef)(null), K = () => {
                    H(null)
                }, Q = () => {
                    q(null)
                }, $ = (0, ke.default)((e => {
                    (0, Z.canReactToMessage)(e) && q({
                        dirY: v.DirY.BOTTOM,
                        dirX: v.DirX.CENTER,
                        type: v.MenuType.ReactionPicker,
                        menu: be.default.createElement(X.ReactionsPanel, {
                            msgId: e.id.toString(),
                            onSelection: t => {
                                (0, ae.sendReactionToMsg)(e, t).catch((() => {})), Q()
                            }
                        }),
                        flipOnRTL: !0,
                        anchor: Y.current
                    })
                }));
                (0, Ce.useListener)(s.current, "animationend", (() => {
                    a()
                }));
                let J = n.displayName({
                    showShortName: !0,
                    withPushName: !0
                });
                f && (J += " @ " + j.title());
                const ee = be.default.createElement(Ee.XViewerIcon, {
                    className: e.isHighlightClose ? T.default.highlightClose : null,
                    containerRef: s
                });
                let te;
                G ? te = be.default.createElement(ce.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: K
                }, be.default.createElement(de.default, {
                    contextMenu: G
                })) : z && (te = be.default.createElement(ce.UIE, {
                    displayName: "MsgReactionPicker",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: Q
                }, be.default.createElement(de.default, {
                    contextMenu: z
                })));
                const ne = (0, U.isNewsletterViewCountEnabled)(null == j || null === (t = j.newsletterMetadata) || void 0 === t ? void 0 : t.membershipType) && null != L ? be.default.createElement(_.FlexRow, {
                    className: T.default.viewCount
                }, u.Clock.relativeDateAndTimeStr(M), be.default.createElement(R.MetaBullet, null), be.default.createElement("span", null, L)) : be.default.createElement(be.default.Fragment, null, u.Clock.relativeDateAndTimeStr(M));
                return be.default.createElement("div", {
                    className: T.default.mediaPanelHeader
                }, be.default.createElement("div", {
                    className: T.default.info
                }, be.default.createElement(o.default, {
                    idle: !0,
                    image: be.default.createElement(g.DetailImage, {
                        id: E,
                        size: 40
                    }),
                    primary: be.default.createElement(y.EmojiText, {
                        ellipsify: !0,
                        text: J
                    }),
                    secondary: ne,
                    theme: "media"
                })), be.default.createElement("div", {
                    className: T.default.mediaPanelTools
                }, be.default.createElement(D.MenuBar, {
                    key: "media-panel-header",
                    theme: "strong"
                }, be.default.createElement(Ve, {
                    isMediaDownloadable: () => !h && (!!(0, F.canDownloadMsg)(n) && (!!B.renderableUrl || B.mediaStage === N.MEDIA_DATA_STAGE.RESOLVED)),
                    msg: n,
                    msgIndexInAlbum: l,
                    onClose: i,
                    onViewOnceInfoClick: r,
                    openReactionTray: () => {
                        if (!(0, Z.canReactToMessage)(n)) return;
                        const e = {
                            dirY: v.DirY.BOTTOM,
                            dirX: v.DirX.CENTER,
                            type: v.MenuType.ReactionSendTray,
                            menu: be.default.createElement(re.SendReactionsTrayContainer, {
                                msg: n,
                                selectedCallback: e => {
                                    e !== le.MORE_REACTIONS ? (0, ae.sendReactionToMsg)(n, e).catch((() => {})) : self.setTimeout((() => {
                                        $(n)
                                    }), 150), K()
                                }
                            }),
                            flipOnRTL: !1,
                            anchor: Y.current
                        };
                        H(e)
                    },
                    sendReactionButtonRef: Y
                }), be.default.createElement(D.MenuBarItem, {
                    testid: "btn-close",
                    icon: ee,
                    title: (0, C.default)("Close"),
                    onClick: e.onClose
                }))), te)
            };
            var l = n(8304),
                r = n(765273),
                o = a(n(170206)),
                i = n(713105),
                u = n(63014),
                s = n(780549),
                c = n(385798),
                d = n(877171),
                f = n(103440),
                p = n(184385),
                m = a(n(804418)),
                g = n(23641),
                h = n(784605),
                E = n(900316),
                v = n(664149),
                b = n(675085),
                y = n(305521),
                C = a(n(395767)),
                M = n(821130),
                _ = n(690495),
                k = n(596533),
                S = n(361483),
                w = n(163755),
                P = n(501532),
                O = n(537036),
                I = a(n(932325)),
                T = a(n(423359)),
                N = n(172259),
                A = n(69315),
                x = a(n(266466)),
                D = n(526795),
                L = n(107600),
                R = n(789955),
                j = n(97858),
                B = n(114850),
                F = n(939716),
                W = n(787742),
                G = n(722119),
                H = n(373070),
                V = n(905797),
                U = n(73225),
                z = n(352740),
                q = n(245474),
                Y = n(533494),
                K = n(764936),
                X = n(400874),
                Z = n(474474),
                Q = n(173090),
                $ = a(n(313014)),
                J = a(n(467201)),
                ee = n(774401),
                te = a(n(774396)),
                ne = n(923743),
                ae = n(594149),
                le = n(948101),
                re = n(708127),
                oe = n(383296),
                ie = n(453603),
                ue = n(200915),
                se = n(163139),
                ce = n(392632),
                de = a(n(37875)),
                fe = n(706775),
                pe = n(135114),
                me = n(172095),
                ge = n(171221),
                he = n(982015),
                Ee = n(776770),
                ve = n(548360),
                be = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = Se(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                ye = a(n(135179)),
                Ce = n(808446),
                Me = n(655241),
                _e = n(871210),
                ke = a(n(17533));

            function Se(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (Se = function(e) {
                    return e ? n : t
                })(e)
            }
            const we = n(76672).Mirrored(["MenuBar", "Dropdown"]);

            function Pe(e) {
                const t = (0, w.getChat)(e);
                t.composeQuotedMsg = e, d.ComposeBoxActions.focus(t)
            }

            function Oe(e) {
                return ve.fbt._("Report {contact_name}", [ve.fbt._param("contact_name", e.displayName())], {
                    hk: "3Dqyjo"
                })
            }

            function Ie(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return be.default.createElement(be.default.Fragment, null, (0, G.canReplyMsg)(n) ? be.default.createElement(Ae, {
                    msg: n,
                    onClose: a
                }) : null, (0, F.canStarMsg)(n) ? be.default.createElement(je, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? be.default.createElement(Re, {
                    msg: n
                }) : null, (0, F.canPinMsg)(n) ? be.default.createElement(Be, {
                    msg: n
                }) : null, (0, Z.canReactToMessage)(n) ? be.default.createElement(Le, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, be.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }), (0, F.canForwardMsg)(n) ? be.default.createElement(Fe, {
                    msg: n
                }) : null, be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !0,
                    msg: n,
                    onClose: a
                }))
            }

            function Te(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return be.default.createElement(be.default.Fragment, null, (0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) ? null : be.default.createElement(Ne, {
                    msg: n,
                    type: we.MenuBar,
                    onClose: a
                }), !(0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) || (0, W.getIsNewsletterMsg)(n) ? null : be.default.createElement(Ae, {
                    msg: n,
                    onClose: a
                }), (0, F.canStarMsg)(n) ? be.default.createElement(je, {
                    msg: n
                }) : null, (0, F.canPinMsg)(n) ? be.default.createElement(Be, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? be.default.createElement(Re, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? be.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }) : null, (0, Z.canReactToMessage)(n) ? be.default.createElement(Le, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, (0, F.canForwardMsg)(n) ? be.default.createElement(Fe, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? null : be.default.createElement(De, {
                    isMediaDownloadable: t,
                    msg: n,
                    type: we.MenuBar
                }), (0, F.canReportMsg)(n) && (0, j.messageLevelReportingEnabled)() ? be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !1,
                    msg: n,
                    onClose: a
                }) : null)
            }

            function Ne(e) {
                let {
                    msg: t,
                    type: n,
                    onClose: a
                } = e;
                const l = e => {
                    e.stopPropagation(), a(), E.DrawerManager.existsDrawerRight((e => {
                        e && 2 === c.Column.column && E.DrawerManager.closeDrawerRight()
                    }));
                    const n = (0, i.getSearchContext)((0, w.getChat)(t), (0, se.unproxy)(t));
                    s.Cmd.openChatAt((0, w.getChat)(t), n).then((e => {
                        e && d.ComposeBoxActions.focus((0, w.getChat)(t))
                    }))
                };
                return n === we.Dropdown ? be.default.createElement(b.DropdownItem, {
                    action: l
                }, ve.fbt._("Go to message", null, {
                    hk: "B1anG"
                })) : be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(r.BubbleIcon, null),
                    title: ve.fbt._("Go to message", null, {
                        hk: "B1anG"
                    }),
                    onClick: l
                })
            }

            function Ae(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(Q.ReplyIcon, null),
                    title: ve.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: () => {
                        n(), (0, l.delayMs)(A.CLOSE_ANIMATION_DURATION).then(Pe.bind(null, (0, se.unproxy)(t)))
                    }
                })
            }

            function xe(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(p.DeleteIcon, null),
                    title: ve.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: () => {
                        B.ModalManager.open(be.default.createElement(m.default, {
                            chat: (0, w.getChat)(t),
                            msgList: [(0, se.unproxy)(t)],
                            onDelete: n
                        })), ee.UiRevokeActionHelper.startSession(), ee.UiRevokeActionHelper.messageSelected()
                    }
                })
            }

            function De(e) {
                let {
                    msg: t,
                    type: n,
                    isMediaDownloadable: a
                } = e;
                const l = e => {
                    e.stopPropagation(), M.FileSaver.initDownload((0, se.unproxy)(t))
                };
                return a() ? n === we.Dropdown ? be.default.createElement(b.DropdownItem, {
                    action: l,
                    disabled: !a()
                }, ve.fbt._("Download", null, {
                    hk: "1g5Jix"
                })) : be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(h.DownloadIcon, null),
                    title: ve.fbt._("Download", null, {
                        hk: "1g5Jix"
                    }),
                    disabled: !a(),
                    onClick: l
                }) : null
            }

            function Le(e) {
                let {
                    msg: t,
                    openReactionTray: n,
                    sendReactionButtonRef: a
                } = e;
                return t.type === H.MSG_TYPE.STICKER ? null : be.default.createElement(D.MenuBarItem, {
                    testid: "reaction-entry-point",
                    icon: be.default.createElement(K.ReactionsMediaIcon, {
                        containerRef: a,
                        width: 20
                    }),
                    title: ve.fbt._("React", null, {
                        hk: "1mI4Nl"
                    }),
                    onClick: () => {
                        n()
                    }
                })
            }
            const Re = e => {
                let t, n, a, {
                    msg: l
                } = e;
                const r = e => {
                        e.stopPropagation(), (0, P.runKeepInChatUX)((0, se.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA)
                    },
                    o = e => {
                        e.stopPropagation(), (0, P.runUndoKeepInChatUX)((0, se.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA)
                    };
                if ((0, W.getIsKept)(l) && l.canShowUnkeepOption()) t = be.default.createElement(fe.UndoKeepInChatMediaIcon, null), n = o, a = ve.fbt._("Unkeep", null, {
                    hk: "1eGZng"
                });
                else {
                    if ((0, W.getIsKept)(l) || !l.canShowKeepOption()) return null;
                    t = be.default.createElement(O.KeepInChatMediaIcon, null), n = r, a = ve.fbt._("Keep", null, {
                        hk: "1a48ae"
                    })
                }
                return be.default.createElement(D.MenuBarItem, {
                    key: t,
                    icon: t,
                    title: a,
                    onClick: n
                })
            };

            function je(e) {
                let t, n, a, {
                    msg: l
                } = e;
                return l.star ? (t = e => {
                    e.stopPropagation(), s.Cmd.sendUnstarMsgs((0, w.getChat)(l), [(0, se.unproxy)(l)])
                }, n = be.default.createElement(me.UnstarBtnIcon, null), a = I.default.t(209)) : (t = e => {
                    e.stopPropagation(), s.Cmd.sendStarMsgs((0, w.getChat)(l), [(0, se.unproxy)(l)])
                }, n = be.default.createElement(ue.StarBtnIcon, null), a = I.default.t(199)), be.default.createElement(D.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                })
            }

            function Be(e) {
                let t, n, a, {
                    msg: l
                } = e;
                return (0, ye.default)(l.id) ? (t = e => {
                    e.stopPropagation(), (0, ne.sendPinInChatMsg)(l, Y.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch((e => {
                        __LOG__(4, void 0, new Error)
                        `Error while unpinning a message: ${e}`
                    }))
                }, n = be.default.createElement(pe.UnpinnedIcon, null), a = ve.fbt._("Unpin", null, {
                    hk: "3oWx14"
                })) : (t = e => {
                    e.stopPropagation(), B.ModalManager.open(be.default.createElement(z.PinMessageModal, {
                        msg: l
                    }))
                }, n = be.default.createElement(q.Pinned3Icon, null), a = ve.fbt._("Pin", null, {
                    hk: "23jUX3"
                })), be.default.createElement(D.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                })
            }

            function Fe(e) {
                let {
                    msg: t
                } = e;
                return be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(k.ForwardIcon, null),
                    title: ve.fbt._("Forward", null, {
                        hk: "2T1QOm"
                    }),
                    onClick: e => {
                        e.stopPropagation(), (0, w.getIsUnsentMedia)(t) ? B.ModalManager.open(be.default.createElement(f.ConfirmPopup, {
                            title: ve.fbt._("Can't Forward", null, {
                                hk: "3fgR0v"
                            }),
                            onOK: () => B.ModalManager.close(),
                            okText: (0, C.default)("OK")
                        }, I.default.t(80))) : B.ModalManager.open(be.default.createElement(S.ForwardMessageModalLoadable, {
                            msgs: [(0, se.unproxy)(t)],
                            onClose: () => B.ModalManager.close()
                        }), {
                            transition: "modal-flow"
                        })
                    }
                })
            }

            function We(e) {
                let {
                    msg: t
                } = e;
                return be.default.createElement(b.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: () => {
                        (0, $.default)(t)
                    }
                }, ve.fbt._("Reply privately", null, {
                    hk: "1XQeK2"
                }))
            }

            function Ge(e) {
                let {
                    msg: t
                } = e;
                const n = e => {
                    e ? (0, oe.sendMessageReportBlock)(t, ie.SpamFlow.MediaViewer) : (0, oe.sendMessageReport)(t, ie.SpamFlow.MediaViewer), B.ModalManager.close()
                };
                return be.default.createElement(b.DropdownItem, {
                    action: () => {
                        B.ModalManager.open(be.default.createElement(x.default, {
                            isBusiness: t.senderObj.isBusiness,
                            isGroup: (0, w.getChat)(t).isGroup,
                            onReport: n,
                            onCancel: () => B.ModalManager.close(),
                            title: Oe(t)
                        }))
                    }
                }, Oe(t))
            }

            function He(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(b.DropdownItem, {
                    action: () => {
                        n(), (0, l.delayMs)(A.CLOSE_ANIMATION_DURATION + 250).then(s.Cmd.msgInfoDrawer.bind(s.Cmd, (0, se.unproxy)(t)))
                    }
                }, ve.fbt._("Message info", null, {
                    hk: "2h2aKZ"
                }))
            }

            function Ve(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    msgIndexInAlbum: a,
                    onClose: l,
                    onViewOnceInfoClick: r,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                } = e;
                return n.isViewOnce ? be.default.createElement(ze, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    onViewOnceInfoClick: r
                }) : a >= 0 ? be.default.createElement(Ie, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                }) : be.default.createElement(Te, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                })
            }

            function Ue(e) {
                let {
                    isMediaDownloadable: t,
                    isAlbumMedia: n,
                    msg: a,
                    onClose: l
                } = e;
                const r = [],
                    o = (0, w.getChat)(a);
                ((0, G.canPrivateReply)(a) || (0, G.canPrivateReplyInRestrictedGrp)(a)) && r.push(be.default.createElement(We, {
                    key: "private_reply",
                    msg: a
                })), n && ((0, W.getIsSentByMe)(a) && r.push(be.default.createElement(He, {
                    key: "dropdownMsgInfo",
                    msg: a,
                    onClose: l
                })), r.push(be.default.createElement(Ne, {
                    key: "dropdownGoToMsg",
                    msg: a,
                    type: we.Dropdown,
                    onClose: l
                }), be.default.createElement(De, {
                    key: "dropdownDownload",
                    isMediaDownloadable: t,
                    msg: a,
                    type: we.Dropdown
                })));
                const i = !o.isNewsletter && (a.isViewOnce || (0, F.canReportMsg)(a) && (0, j.messageLevelReportingEnabled)());
                return o.isNewsletter && (0, F.canReportMsg)(a) && (0, U.isNewsletterReportingEnabled)() ? r.push(be.default.createElement(J.default, {
                    key: "reportSpam",
                    msg: a
                })) : i && r.push(be.default.createElement(Ge, {
                    key: "reportSpam",
                    msg: a
                })), (0, F.canReportToAdmin)(a) && r.push(be.default.createElement(te.default, {
                    key: "report_to_admin",
                    msg: a
                })), be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(L.MenuIcon, null),
                    title: ve.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, be.default.createElement(v.Dropdown, {
                    type: v.MenuType.DropdownMenu,
                    flipOnRTL: !0,
                    dirX: v.DirX.LEFT
                }, r))
            }

            function ze(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    onViewOnceInfoClick: l
                } = e;
                return be.default.createElement(be.default.Fragment, null, be.default.createElement(D.MenuBarItem, {
                    icon: be.default.createElement(ge.ViewOnceIcon, {
                        className: T.default.voIcon
                    }),
                    title: ve.fbt._("View once info", null, {
                        hk: "47XkZ4"
                    }),
                    onClick: l
                }), be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !1,
                    msg: n,
                    onClose: a
                }))
            }
        },
        777361: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(371125)),
                r = n(690495),
                o = a(n(488922)),
                i = a(n(674465)),
                u = a(n(996513)),
                s = a(n(708126)),
                c = n(438543),
                d = a(n(529727)),
                f = n(164832),
                p = n(885313),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(156720)),
                h = a(n(38085)),
                E = n(655241);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }
            const b = {
                    container: {
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    stickerContainer: {
                        maxWidth: "mx6rw3sv",
                        maxHeight: "trnfqnf9",
                        marginBottom: "r2u2pyhj",
                        zIndex: "thghmljt"
                    }
                },
                y = (e, t) => {
                    const {
                        msg: n
                    } = e, a = (0, E.useModelValues)(e.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]), v = (0, m.useRef)(null), y = (0, h.default)(t, v), C = e => {
                        var t;
                        null === (t = v.current) || void 0 === t || t.onClick(e)
                    }, M = a.isFirstParty ? m.default.createElement(l.default, {
                        stickerPackId: a.stickerPackId,
                        onStickerPackView: e.onStickerPackView,
                        stickerPackViewDelay: e.stickerPackViewDelay,
                        sticker: new f.StickerModel({
                            id: a.filehash,
                            mimetype: a.mimetype,
                            width: a.fullWidth,
                            height: a.fullHeight,
                            filehash: a.filehash,
                            encFilehash: a.encFilehash,
                            directPath: a.directPath,
                            mediaKey: a.mediaKey,
                            mediaKeyTimestamp: a.mediaKeyTimestamp
                        })
                    }) : m.default.createElement(c.StickerDetailsStickerPackInfo, {
                        name: a.stickerPackName,
                        publisher: a.stickerPackPublisher,
                        theme: c.Theme.MediaViewer,
                        sticker: new f.StickerModel({
                            id: a.filehash,
                            mimetype: a.mimetype,
                            width: a.fullWidth,
                            height: a.fullHeight,
                            filehash: a.filehash,
                            encFilehash: a.encFilehash,
                            directPath: a.directPath,
                            mediaKey: a.mediaKey,
                            mediaKeyTimestamp: a.mediaKeyTimestamp
                        })
                    });
                    return m.default.createElement(r.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: b.container
                    }, m.default.createElement("div", {
                        className: (0, g.default)(b.container, b.stickerContainer)
                    }, m.default.createElement(s.default, {
                        ref: y,
                        width: a.fullWidth,
                        height: a.fullHeight,
                        onZoomIn: e.onImgZoomIn,
                        msg: n
                    }, m.default.createElement(i.default, {
                        mediaData: a,
                        placeholderRenderer: () => m.default.createElement(d.default, {
                            size: 376
                        }),
                        downloadMedia: () => null == n ? void 0 : n.downloadMedia({
                            downloadEvenIfExpensive: !1,
                            rmrReason: p.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                            isUserInitiated: !1
                        })
                    }, (t => m.default.createElement(o.default, {
                        className: (0, g.default)(u.default.content),
                        onClick: C,
                        src: t,
                        onLoad: e.onLoad
                    }))))), M)
                };
            var C = (0, m.forwardRef)(y);
            t.default = C
        },
        177046: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(190643)),
                r = n(980518),
                o = a(n(66985)),
                i = a(n(49677)),
                u = n(845582),
                s = n(172259),
                c = a(n(996513)),
                d = n(787742),
                f = a(n(821384)),
                p = n(728),
                m = n(31900),
                g = n(277037),
                h = n(541345),
                E = n(474474),
                v = a(n(439114)),
                b = n(885313),
                y = n(548360),
                C = n(113189),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                _ = a(n(156720)),
                k = n(655241);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }

            function w(e, t) {
                var n;
                const {
                    autoPlay: a,
                    msg: S,
                    onLoad: w,
                    onClose: P,
                    onLoadedData: I,
                    startTime: T = 0
                } = e, N = (0, k.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]), [A, x] = (0, M.useState)(!1), [D, L] = (0, M.useState)(!0), R = (0, M.useRef)(), j = (0, M.useMemo)((() => (N.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || N.streamable && N.isStreamable()) && (0, C.isNonZeroNumber)(N.fullWidth) && (0, C.isNonZeroNumber)(N.fullHeight) ? function(e) {
                    if (e.isGif) {
                        const t = 330;
                        return e.fullWidth >= t ? {
                            width: e.fullWidth,
                            height: e.fullHeight
                        } : {
                            width: t,
                            height: e.fullHeight * t / e.fullWidth
                        }
                    }
                    if (e.fullWidth >= m.MIN_WIDTH) return {
                        width: e.fullWidth,
                        height: e.fullHeight
                    };
                    return {
                        width: m.MIN_WIDTH,
                        height: e.fullHeight
                    }
                }(N) : {
                    width: 0,
                    height: 0
                }), [N]);
                (0, M.useEffect)((() => {
                    if (!N.isStreamable()) return S.downloadMedia({
                        downloadEvenIfExpensive: !0,
                        rmrReason: b.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                        isUserInitiated: !0
                    }), () => {
                        S.mediaObject && S.cancelDownload()
                    }
                }), []);
                const B = e => {
                    x(e)
                };
                (0, M.useImperativeHandle)(t, (() => ({
                    getContainerElement: () => R.current,
                    closingMedia() {
                        L(!1)
                    }
                })));
                const F = N.isGif;
                let W = N.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || N.streamable && N.isStreamable();
                W = W || S.isForcingRMR();
                let G = null;
                const H = (0, u.getDisplayType)(S),
                    V = r.AddOnBubbleType.MEDIA_VIEWER;
                if (S && (0, E.shouldShowReactionBubble)(S, V) && (G = M.default.createElement(l.default, {
                        isOutgoingMsg: (0, d.getIsSentByMe)(S),
                        displayType: H,
                        bubbleType: V
                    }, M.default.createElement(h.ReactionBubbleContainer, {
                        msgIds: [S.id.toString()],
                        isOutgoingMsg: (0, d.getIsSentByMe)(S),
                        displayType: H,
                        reactionBubbleType: V,
                        reactionBubbleVisible: D
                    }))), W) {
                    const e = y.fbt._("Your browser doesn't support video playback.", null, {
                        hk: "2nHZKq"
                    });
                    let t, n;
                    return !A && (null == S ? void 0 : S.interactiveAnnotations) && S.interactiveAnnotations.length > 0 && (t = M.default.createElement(o.default, {
                        annotations: S.interactiveAnnotations
                    })), n = F ? M.default.createElement("div", {
                        className: (0, _.default)(c.default.content),
                        ref: R
                    }, M.default.createElement(v.default, {
                        src: N.renderableUrl,
                        onClick: O,
                        autoPlay: !0,
                        loop: !0,
                        onLoadedData: I
                    }, e), t) : M.default.createElement("div", {
                        ref: R,
                        className: (0, _.default)(c.default.content),
                        onClick: O
                    }, M.default.createElement(g.WrappedMsgVideoPlayer, {
                        msg: S,
                        mediaData: N,
                        startTime: T,
                        onClose: P,
                        onError: () => {},
                        onFullscreenToggle: B,
                        autoPlay: a,
                        type: p.PLAYER_TYPE.MEDIA_VIEWER,
                        overlays: t,
                        noPip: S.isViewOnce,
                        onLoadedData: I
                    })), M.default.createElement(f.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: j,
                        onObjectLoad: w
                    }, n, G)
                }
                return M.default.createElement(f.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: N.fullWidth,
                        height: N.fullHeight
                    }
                }, M.default.createElement(i.default, {
                    altText: null !== (n = S.caption) && void 0 !== n ? n : "",
                    mediaData: N
                }), G)
            }
            var P = (0, M.forwardRef)(w);

            function O(e) {
                e.stopPropagation()
            }
            t.default = P
        },
        933147: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    msg: t,
                    onImageLoad: n,
                    isAnimatingIn: a,
                    onImgZoomIn: r,
                    onExitAnimation: I,
                    onBack: V
                } = e, [U, q, K, X, Z, Q, $, J, ee] = (0, F.useMsgValues)(e.msg.id, [S.getId, S.getStar, c.getIsUnsentMedia, S.getIsViewOnce, S.getIsStickerMsg, S.getCaption, S.getInteractiveAnnotations, S.getType, S.getMessageSecret]), te = (0, c.getChat)(t), ne = (0, B.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]), ae = (0, G.default)(a), le = (0, j.useRef)(null), re = (0, j.useRef)(null), oe = (0, j.useRef)(null), ie = (0, j.useRef)(null), ue = (0, j.useRef)(), se = (0, j.useRef)(!1), ce = (0, j.useRef)(!1), de = (0, j.useRef)(!1), [fe, pe] = (0, W.default)(O.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER), me = X && fe, [ge] = (0, j.useState)((() => ne.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(U) : null)), [he, Ee] = (0, j.useState)(!1), [ve, be] = (0, j.useState)(!1), [ye, Ce] = (0, j.useState)(!e.isAnimatingIn), [Me, _e] = (0, j.useState)(!1), [ke, Se] = (0, j.useState)(!1), we = () => {
                    const e = j.default.createElement(L.default, {
                        isPhoto: ne.type === g.default.TYPE.IMAGE,
                        onOkClick: () => {
                            pe(), k.ModalManager.close()
                        }
                    });
                    k.ModalManager.open(e)
                }, Pe = (0, H.default)(((e, t) => {
                    if (ve) return;
                    const n = le.current;
                    if (!n) return;
                    const a = n.getInsideContainer();
                    if (!(a && a instanceof HTMLElement)) return;
                    const l = n.getOutsideContainer();
                    if (!(l && l instanceof HTMLElement)) return;
                    const {
                        translateX: r,
                        translateY: o
                    } = n.getTranslatePosition(l, e, t);
                    (0, D.default)(a, "stop"), (0, D.default)(a, {
                        translateX: r,
                        translateY: o,
                        scale: C.ZOOM_IN_FACTOR
                    }, {
                        duration: 0
                    })
                }));
                (0, j.useEffect)((() => (__LOG__(2)
                    `MediaViewerModal: Opened`, me && we(), u.default.focus(ie.current), () => {
                        __LOG__(2)
                        `MediaViewerModal: Closed`, Pe.cancel()
                    })), []);
                const Oe = () => {
                        X && (0, p.canMarkPlayed)(t) && (0, p.markPlayed)(t)
                    },
                    Ie = e => {
                        Oe(), n && n();
                        const t = ge,
                            l = e.target;
                        t && l && a && l instanceof HTMLElement && (de.current || (de.current = !0, ((e, t) => {
                            var n;
                            const a = t.getBoundingClientRect(),
                                l = e.getBoundingClientRect();
                            let r = l.top - a.top,
                                o = l.left - a.left;
                            const i = e.clientWidth / t.clientWidth;
                            r -= (t.clientHeight - e.clientHeight) / 2, o -= (t.clientWidth - e.clientWidth) / 2, (0, D.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, r],
                                scale: [1, i]
                            }, {
                                duration: C.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            });
                            const u = null === (n = oe.current) || void 0 === n ? void 0 : n.getElement();
                            u && (0, D.default)(u, {
                                opacity: [1, 0]
                            }, {
                                duration: C.ANIMATION_DURATION
                            })
                        })(t, l)))
                    },
                    Te = () => {
                        var t;
                        if (se.current) return;
                        se.current = !0, (0, l.isFunction)(I) && I();
                        const n = e.getZoomNode && e.getZoomNode(U);
                        if (!n) return V();
                        let a;
                        var r;
                        if ([g.default.TYPE.IMAGE, g.default.TYPE.STICKER].includes(ne.type) && le.current) a = le.current.getInsideContainer(), null === (r = le.current) || void 0 === r || r.closingMediaZoomable();
                        else if (ne.isGif && re.current) {
                            var o;
                            a = re.current.getContainerElement(), null === (o = re.current) || void 0 === o || o.closingMedia()
                        }
                        if (!a) return V();
                        const i = a,
                            u = a.getBoundingClientRect(),
                            s = n.getBoundingClientRect();
                        let c = s.top - u.top,
                            d = s.left - u.left;
                        const f = n.clientWidth / i.clientWidth;
                        c -= (i.clientHeight - n.clientHeight) / 2, d -= (i.clientWidth - n.clientWidth) / 2, (0, D.default)(a, {
                            translateX: [d, 0],
                            translateY: [c, 0],
                            scale: [f, 1]
                        }, {
                            duration: C.CLOSE_ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        }).then((() => {
                            V()
                        }));
                        const p = null === (t = oe.current) || void 0 === t ? void 0 : t.getElement();
                        p && (0, D.default)(p, {
                            opacity: [0, 1]
                        }, {
                            duration: C.CLOSE_ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        })
                    },
                    Ne = e => {
                        const t = le.current;
                        e && t && (ce.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0), Ee(e), r(e)
                    },
                    Ae = e => {
                        var t;
                        const n = null === (t = le.current) || void 0 === t ? void 0 : t.getInsideContainer(),
                            l = Boolean(null == n ? void 0 : n.contains(document.activeElement));
                        if (a || !l) return;
                        Pe.cancel();
                        const r = le.current;
                        null != r && r.onKeyboardZoom(e)
                    },
                    xe = () => {
                        Se(!0)
                    },
                    De = () => {
                        be(!0)
                    },
                    Le = () => {
                        be(!1)
                    },
                    Re = e => {
                        e.stopPropagation(), _e(!Me)
                    };
                let je, Be;
                switch ((0, j.useEffect)((() => {
                    a || ye || !ae || Ce(!0)
                }), [a, ye, ae]), (0, N.useTsNavigation)({
                    surface: "media-viewer"
                }), ne.type) {
                    case g.default.TYPE.IMAGE:
                        je = j.default.createElement(h.default, {
                            key: U.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Ie,
                            onImgZoomIn: Ne,
                            onAnnotationTooltipDisplay: De,
                            onAnnotationTooltipDismiss: Le,
                            preventDownload: X,
                            ref: le
                        });
                        break;
                    case g.default.TYPE.STICKER:
                        je = j.default.createElement(b.default, {
                            key: U.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Ie,
                            onImgZoomIn: Ne,
                            onStickerPackView: Te,
                            stickerPackViewDelay: C.CLOSE_ANIMATION_DURATION,
                            ref: le
                        });
                        break;
                    case g.default.TYPE.VIDEO:
                        je = j.default.createElement(M.default, {
                            key: U.toString(),
                            autoPlay: !me,
                            msg: t,
                            mediaData: ne,
                            onLoadedData: ne.isGif ? Ie : Oe,
                            startTime: e.startTime,
                            onClose: Te,
                            ref: re
                        });
                        break;
                    case g.default.TYPE.AUDIO:
                        je = j.default.createElement(m.default, {
                            mediaData: ne,
                            key: U.toString(),
                            msg: t
                        });
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)
                        `type: ${ne.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                const Fe = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (Q || Fe) {
                    let n;
                    Fe && (n = R.fbt._("{number} of {totalNumber}", [R.fbt._param("number", e.msgIndexInAlbum + 1), R.fbt._param("totalNumber", e.albumSize)], {
                        hk: "1hO6rM"
                    }));
                    const a = s.Conversation({
                            mentions: t.mentionMap(),
                            groupMentions: t.groupMentionMap(),
                            phoneNumbers: (0, P.getPhoneNumbersFromMsg)(t),
                            links: (0, w.getLinksFromMsg)(t),
                            trusted: !0,
                            fromMe: U.fromMe,
                            fromChatWid: U.remote
                        }),
                        l = ne.type === g.default.TYPE.IMAGE && !X,
                        r = !ye && (ne.isGif || l);
                    Be = j.default.createElement(j.default.Fragment, null, j.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [_.default.captionWrapperExpandable]: !0 === ue.current,
                            [_.default.captionWrapper]: !0
                        }),
                        onClick: ue.current ? Re : void 0,
                        title: ue.current ? R.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        }) : void 0,
                        "aria-hidden": Me || void 0
                    }, j.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [_.default.captionHidden]: r,
                            [_.default.expanded]: Me,
                            [_.default.mediaCaption]: !0
                        }),
                        formatters: a,
                        ref: e => {
                            oe.current = e
                        },
                        text: Q || n
                    }), ue.current && j.default.createElement(x.default, {
                        xstyle: [z.captionReadMoreBtn, Me && z.captionReadMoreBtnExpanded, he && z.captionReadMoreBtnZoomed],
                        onClick: Re
                    }, j.default.createElement(T.TextSpan, null, R.fbt._("Read more", null, {
                        hk: "2DvSvh"
                    })))), Me && j.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)(_.default.captionWrapper, _.default.captionWrapperExpandable, _.default.captionExpanded),
                        onClick: Re
                    }, j.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)(_.default.mediaCaption, _.default.mediaCaptionExpanded),
                        formatters: a,
                        text: Q
                    })))
                }
                const We = (0, o.classnamesConvertMeToStylexPlease)({
                        [_.default.mediaWithCaption]: !!Be,
                        [_.default.media]: !0
                    }),
                    Ge = (0, o.classnamesConvertMeToStylexPlease)({
                        [_.default.noThumbnails]: X || Z,
                        [_.default.mediaViewerAnimate]: e.isAnimatingIn,
                        [_.default.cursorZoomOut]: he,
                        overlay: !0,
                        [_.default.mediaViewer]: !0
                    }),
                    He = he && ce.current ? e => {
                        Pe(e.pageX, e.pageY)
                    } : null,
                    Ve = he ? e => {
                        Pe.cancel();
                        const t = le.current;
                        t && he && t.onClick(e)
                    } : null;
                let Ue = he ? null : Te;
                null != Ue && X && (Ue = xe);
                return j.default.createElement(A.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Te
                }, j.default.createElement(f.HotKeys, {
                    handlers: {
                        space: Ae,
                        enter: Ae
                    },
                    ref: ie
                }, j.default.createElement("div", {
                    className: Ge,
                    "data-animate-media-viewer": !0,
                    onClick: Ve,
                    onMouseMove: He
                }, j.default.createElement(E.default, {
                    isHighlightClose: ke,
                    msg: t,
                    mediaData: ne,
                    onClose: Te,
                    onHightlightCloseEnd: () => {
                        Se(!1)
                    },
                    onViewOnceInfoClick: () => {
                        we()
                    },
                    msgIndexInAlbum: e.msgIndexInAlbum
                }), j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)({
                        [_.default.sticker]: Z,
                        [_.default.mediaContent]: !0
                    }),
                    onClick: Ue
                }, j.default.createElement(Y, {
                    hasNavigationButtons: !X && !Z,
                    onNext: e.onNext,
                    onPrev: e.onPrev,
                    imgZoomed: he
                }, j.default.createElement("div", {
                    className: We
                }, j.default.createElement(v.default, {
                    msg: t,
                    mediaData: ne
                }), je, j.default.createElement(d.default.Provider, {
                    value: te.groupMetadata
                }, Be)))))))
            };
            var l = n(724976),
                r = n(305989),
                o = n(396574),
                i = n(305521),
                u = a(n(335540)),
                s = U(n(675886)),
                c = n(163755),
                d = a(n(462824)),
                f = n(81644),
                p = n(711735),
                m = a(n(883537)),
                g = a(n(116253)),
                h = a(n(142958)),
                E = a(n(548290)),
                v = a(n(36886)),
                b = a(n(777361)),
                y = n(172259),
                C = n(69315),
                M = a(n(177046)),
                _ = a(n(192639)),
                k = n(114850),
                S = n(787742),
                w = n(44118),
                P = n(527530),
                O = n(95589),
                I = n(435595),
                T = n(180519),
                N = n(717089),
                A = n(392632),
                x = a(n(625903)),
                D = a(n(330619)),
                L = a(n(25683)),
                R = n(548360),
                j = U(n(667294)),
                B = (a(n(156720)), n(655241)),
                F = n(871210),
                W = a(n(157558)),
                G = a(n(49710)),
                H = a(n(286481));

            function V(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (V = function(e) {
                    return e ? n : t
                })(e)
            }

            function U(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = V(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            const z = {
                captionReadMoreBtn: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    bottom: "jxacihee",
                    paddingTop: "ppypbuwx",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "idmi9oma",
                    borderTopStartRadius: "ho9ovbg7",
                    borderTopEndRadius: "tcg15ap9",
                    borderBottomEndRadius: "c5wy1lv0",
                    borderBottomStartRadius: "bqysl6j9",
                    boxShadow: "a95fzlb5"
                },
                captionReadMoreBtnExpanded: {
                    visibility: "kojwoqec"
                },
                captionReadMoreBtnZoomed: {
                    visibility: "kqpkm0zi",
                    opacity: "lxctpz5v"
                }
            };

            function q(e) {
                null == e || e.stopPropagation()
            }

            function Y(e) {
                var t, n, a, l;
                return j.default.createElement(j.default.Fragment, null, e.hasNavigationButtons && j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(_.default.btnMediaPrev)
                }, j.default.createElement("div", {
                    onClick: e.onPrev ? null : q
                }, j.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Prev,
                    onClick: null !== (t = e.onPrev) && void 0 !== t ? t : void 0,
                    onKeyDown: null !== (n = e.onPrev) && void 0 !== n ? n : void 0,
                    disabled: !e.onPrev || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))), e.children, e.hasNavigationButtons && j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(_.default.btnMediaNext)
                }, j.default.createElement("div", {
                    onClick: e.onPrev ? null : q
                }, j.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Next,
                    onClick: null !== (a = e.onNext) && void 0 !== a ? a : void 0,
                    onKeyDown: null !== (l = e.onNext) && void 0 !== l ? l : void 0,
                    disabled: !e.onNext || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))))
            }
        },
        467201: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    msg: t
                } = e, n = (0, r.getChat)(t);
                return c.default.createElement(l.DropdownItem, {
                    action: () => {
                        o.ModalManager.open(c.default.createElement(i.default, {
                            chat: n,
                            msg: t,
                            spamFlow: u.SpamFlow.MediaViewer
                        }))
                    }
                }, s.fbt._("Report", null, {
                    hk: "GPSDP"
                }))
            };
            var l = n(675085),
                r = n(163755),
                o = n(114850),
                i = a(n(207511)),
                u = n(453603),
                s = n(548360),
                c = a(n(667294))
        },
        774396: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    msg: t
                } = e;
                return d.default.createElement(l.DropdownItem, {
                    action: () => {
                        (0, i.logRTAReportingEvent)({
                            reportToAdminInteraction: s.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                            groupId: (0, r.getChat)(t).id.user
                        }), o.ModalManager.open(d.default.createElement(u.default, {
                            msg: t
                        }))
                    }
                }, c.fbt._("Send for admin review", null, {
                    hk: "4ouSa6"
                }))
            };
            var l = n(675085),
                r = n(163755),
                o = n(114850),
                i = n(554800),
                u = a(n(286391)),
                s = n(328340),
                c = n(548360),
                d = a(n(667294))
        },
        266648: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    mediaMsgs: t,
                    onScroll: n,
                    activeMsg: a
                } = e, r = (0, d.useRef)({}), o = (0, d.useRef)(null), i = (0, d.useRef)(null), u = (0, f.default)(a.id), m = () => {
                    var e;
                    null === (e = o.current) || void 0 === e || e.focusOnActive()
                };
                (0, d.useEffect)((() => {
                    var e;
                    (null === (e = i.current) || void 0 === e ? void 0 : e.contains(document.activeElement)) && !a.id.equals(u) && m()
                }), [a, u]);
                const g = () => {
                        const e = new Map;
                        return t.forEach((t => {
                            const n = t.id.toString();
                            e.set(n, (e => {
                                const t = r.current[e];
                                if (!t) return !1;
                                const n = t.getBoundingClientRect(),
                                    a = (n.left + n.right) / 2;
                                return !(a > -1 * window.innerWidth && a < 2 * window.innerWidth)
                            })(n))
                        })), e
                    },
                    [E, v] = (0, d.useState)(g),
                    b = (0, p.default)((() => {
                        const e = g();
                        (0, l.default)(E, e) || v(e)
                    }), 100);
                return d.default.createElement("div", {
                    className: s.default.thumbsContainer,
                    ref: e.setRefThumbsContainer
                }, d.default.createElement("div", {
                    ref: i,
                    className: s.default.scrollContainer,
                    dir: "ltr"
                }, d.default.createElement("div", {
                    role: "list",
                    "aria-label": c.fbt._("Media List", null, {
                        hk: "3dsEfq"
                    }),
                    tabIndex: 1,
                    onFocus: () => {
                        m()
                    },
                    onScroll: e => {
                        b(), n(e)
                    },
                    className: s.default.viewerThumbs,
                    ref: e.setRefThumbs
                }, d.default.createElement(h, {
                    ref: o,
                    mediaMsgs: t,
                    highlightedMsgIds: e.highlightedMsgIds,
                    activeMsg: e.activeMsg,
                    onSetActiveThumb: e.onSetActiveThumb,
                    onSelectThumb: e.onSelectThumb,
                    msgIdToPreferPreview: E
                }))))
            };
            var l = a(n(621733)),
                r = a(n(335540)),
                o = n(125922),
                i = n(787742),
                u = n(956113),
                s = a(n(572028)),
                c = n(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                f = a(n(49710)),
                p = a(n(286481));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t) {
                let {
                    mediaMsgs: n,
                    highlightedMsgIds: a,
                    activeMsg: l,
                    onSetActiveThumb: c,
                    onSelectThumb: f,
                    msgIdToPreferPreview: p
                } = e;
                const m = (0, d.useRef)({}),
                    g = () => {
                        const e = l.id.toString(),
                            t = m.current[e];
                        t && r.default.focus(t)
                    };
                (0, d.useImperativeHandle)(t, (() => ({
                    focusOnActive: g
                })));
                const h = a && a.size > 0 && a.has(l.id.toString()),
                    E = [];
                return n.forEach((e => {
                    if (null == e.mediaData) {
                        const t = l;
                        return void __LOG__(3, !0)
                        `MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:e.type,isMedia:(0,i.getIsMedia)(e),startMsgType:t.type,startMsgIsMedia:(0,i.getIsMedia)(t)})}`
                    }
                    const t = h && a && !a.has(e.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                    E.push(d.default.createElement(o.MediaThumb, {
                        theme: t,
                        active: e === l,
                        msg: e,
                        containerRef: t => {
                            ((e, t) => {
                                m.current[t] = e
                            })(t, e.id.toString()), e === l && c(t)
                        },
                        key: `media-${e.id.id}`,
                        onClick: () => {
                            f(e)
                        },
                        preferPreview: !!p.get(e.id.toString()),
                        showTooltip: (0, i.getIsGroupMsg)(e)
                    }))
                })), E.push(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-right"
                }, n.queryMediaAfter ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null)), E.unshift(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-left"
                }, n.queryMediaBefore ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null)), E.push(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-right"
                })), E.unshift(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-left"
                })), d.default.createElement(d.default.Fragment, null, E)
            }
            const h = (0, d.forwardRef)(g);
            h.displayName = "MediaThumbs"
        },
        25683: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onOkClick: t
                } = e;
                return f.default.createElement(l.ConfirmPopup, {
                    onOK: t,
                    cancelText: d.fbt._("Learn more", null, {
                        hk: "1rcCLt"
                    }),
                    onCancel: () => {
                        (0, r.openExternalLink)((0, o.getViewOnceFaqUrl)())
                    }
                }, f.default.createElement(i.FlexColumn, null, f.default.createElement(u.default, {
                    xstyle: p.graphic,
                    align: "center"
                }, f.default.createElement(c.ViewOnceSenderNuxIcon, {
                    width: 195,
                    height: 177
                })), f.default.createElement(s.WDSTextLarge, null, e.isPhoto ? d.fbt._("This photo is set to view once", null, {
                    hk: "2H7aHc"
                }) : d.fbt._("This video is set to view once", null, {
                    hk: "1w8WFf"
                })), f.default.createElement(s.WDSTextMuted, null, e.isPhoto ? d.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                    hk: "1XZPqi"
                }) : d.fbt._("For more privacy, this video will disappear after you close it.", null, {
                    hk: "3YgUHE"
                }))))
            };
            var l = n(103440),
                r = n(753233),
                o = n(258105),
                i = n(690495),
                u = a(n(469733)),
                s = n(180519),
                c = n(555201),
                d = n(548360),
                f = a(n(667294));
            a(n(156720));
            const p = {
                graphic: {
                    marginBottom: "t4zgqcuo"
                }
            }
        },
        765273: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BubbleIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 24;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "bubble"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    enableBackground: "new 0 0 24 24"
                }, u.default.createElement("path", {
                    fill: "currentColor",
                    d: "M19.2,4H4.8C3.8,4,3,4.8,3,5.8V22l3.6-3.6h12.6c1,0,1.8-0.8,1.8-1.8V5.8C21,4.8,20.2,4,19.2,4z M19.2,16.6 H6.6l-1.8,1.8V5.8h14.4V16.6z"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        757567: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatInfoVideoIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 13,
                    g = 21;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "chat-info-video"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 21 13",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                    fill: "#00A884"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        660476: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ForwardFilledIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 16,
                    g = 21;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "forward-filled"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 21 16",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        537036: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KeepInChatMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 24;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "keep-in-chat-media"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "m17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        764936: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReactionsMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 15,
                    g = 15;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "reactions-media"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 15 15",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        217864: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SagaHelpIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 24;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "saga-help"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M10.9501 18C11.3001 18 11.596 17.8792 11.8376 17.6375C12.0793 17.3958 12.2001 17.1 12.2001 16.75C12.2001 16.4 12.0793 16.1042 11.8376 15.8625C11.596 15.6208 11.3001 15.5 10.9501 15.5C10.6001 15.5 10.3043 15.6208 10.0626 15.8625C9.82097 16.1042 9.70014 16.4 9.70014 16.75C9.70014 17.1 9.82097 17.3958 10.0626 17.6375C10.3043 17.8792 10.6001 18 10.9501 18ZM11.1001 7.7C11.5168 7.7 11.8793 7.83333 12.1876 8.1C12.496 8.36667 12.6501 8.7 12.6501 9.1C12.6501 9.46667 12.5376 9.79167 12.3126 10.075C12.0876 10.3583 11.8335 10.625 11.5501 10.875C11.1668 11.2083 10.8293 11.575 10.5376 11.975C10.246 12.375 10.1001 12.825 10.1001 13.325C10.1001 13.5583 10.1876 13.7542 10.3626 13.9125C10.5376 14.0708 10.7418 14.15 10.9751 14.15C11.2251 14.15 11.4376 14.0667 11.6126 13.9C11.7876 13.7333 11.9001 13.525 11.9501 13.275C12.0168 12.925 12.1668 12.6125 12.4001 12.3375C12.6335 12.0625 12.8835 11.8 13.1501 11.55C13.5335 11.1833 13.8626 10.7833 14.1376 10.35C14.4126 9.91667 14.5501 9.43333 14.5501 8.9C14.5501 8.05 14.2043 7.35417 13.5126 6.8125C12.821 6.27083 12.0168 6 11.1001 6C10.4668 6 9.86264 6.13333 9.28764 6.4C8.71264 6.66667 8.27514 7.075 7.97514 7.625C7.85847 7.825 7.82097 8.0375 7.86264 8.2625C7.90431 8.4875 8.01681 8.65833 8.20014 8.775C8.43347 8.90833 8.67514 8.95 8.92514 8.9C9.17514 8.85 9.38347 8.70833 9.55014 8.475C9.73347 8.225 9.96264 8.03333 10.2376 7.9C10.5126 7.76667 10.8001 7.7 11.1001 7.7Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M15 3.93552C13.795 3.33671 12.4368 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.2832 21 18.8675 18.008 19.777 14",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7259 3.85006C18.9265 3.38331 19.5899 3.38331 19.7904 3.85006L20.5568 5.63334C20.6154 5.7697 20.7242 5.87828 20.861 5.93673L22.649 6.70102C23.117 6.90103 23.117 7.56268 22.649 7.76269L20.861 8.52698C20.7242 8.58543 20.6154 8.69401 20.5568 8.83037L19.7749 10.65C19.5767 11.1112 18.9236 11.1183 18.7154 10.6615L17.8755 8.81882C17.8166 8.6895 17.7119 8.58635 17.5816 8.52917L15.8459 7.76749C15.3823 7.56407 15.3854 6.90698 15.851 6.70795L17.6554 5.93673C17.7921 5.87828 17.901 5.7697 17.9596 5.63334L18.7259 3.85006Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        373732: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SagaMessageIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 24;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "saga-message"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M21.9969 12V17.3333C21.9969 18.8061 20.803 20 19.3303 20H5.6636C4.19084 20 2.99693 18.8061 2.99693 17.3333V8.84848L0.941246 5.52617C0.529037 4.85997 1.00821 4 1.79162 4H13.9968C14.5491 4 14.9968 4.44772 14.9968 5C14.9968 5.55228 14.5491 6 13.9968 6H3.58632L4.99693 8.27977V17.3333C4.99693 17.7015 5.2954 18 5.6636 18H19.3303C19.6985 18 19.9969 17.7015 19.9969 17.3333V12.0158L19.9968 12C19.9968 11.4477 20.4445 11 20.9968 11C21.5491 11 21.9969 11.4477 21.9969 12Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7872 4.35006C18.5867 3.88331 17.9233 3.88331 17.7227 4.35006L16.9564 6.13334C16.8978 6.2697 16.7889 6.37828 16.6522 6.43673L14.8478 7.20795C14.3823 7.40698 14.3791 8.06407 14.8427 8.26749L16.5784 9.02917C16.7087 9.08635 16.8134 9.1895 16.8723 9.31882L17.7122 11.1615C17.9204 11.6183 18.5735 11.6112 18.7717 11.15L19.5536 9.33037C19.6122 9.19401 19.721 9.08543 19.8578 9.02698L21.6458 8.26269C22.1138 8.06268 22.1138 7.40103 21.6458 7.20102L19.8578 6.43673C19.721 6.37828 19.6122 6.2697 19.5536 6.13334L18.7872 4.35006Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        706775: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UndoKeepInChatMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 25;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "undo-keep-in-chat-media"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 25 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "m18 3h-10.00003c-1.1 0-1.99.9-1.99 2l-.0005.79529 13.99053 8.04121v-8.8365c0-1.1-.9-2-2-2zm2 14.9115 3.8749 2.2272.9967-1.734-22.97977-13.20787-.996627 1.73399 5.111727 2.93802-.00696 11.13116 7.00003-3 7 3z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        135114: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnpinnedIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 24,
                    g = 24;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "unpinned"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        626261: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VoiceCallFilledIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e, f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ")
                }
                let m = 22,
                    g = 22;
                null == a && null == c || (m = a, g = c);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "voice-call-filled"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 22 22",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"]
        },
        663945: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                msg: "_7Upvn",
                text: "_3Q6VG",
                bubble: "_3cupO",
                author: "LldYr",
                hasSuspiciousLinks: "_1BEFs",
                hasAuthor: "_28v58",
                suspiciousLabel: "_1kBNA"
            }
        },
        161160: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                contactBusinessInfo: "vXoia",
                contactBusinessInfoSpinner: "_3sbaB",
                dataRow: "_2hU95",
                businessHoursRow: "_229jY",
                businessHoursDay: "_2Ue47",
                businessHoursHours: "_150zM",
                businessHoursChevron: "_1Biw6",
                flipSvg: "_2McRc",
                dataRowIcon: "XiT7h",
                dataRowText: "_1jydV",
                businessMap: "_2WOiM",
                address: "_2LXal",
                link: "_3mxhI",
                infoIcon: "_3TfXM"
            }
        },
        936027: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                mediaViewerPlaceholder: "_2qUle",
                imageAudio: "_1leJw",
                mediaViewerAudio: "_17zHt"
            }
        },
        572028: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                thumbsContainer: "_3GUJh",
                scrollContainer: "_27n9o",
                viewerThumbs: "_1P0Vh",
                mediaThumb: "_2nI8K",
                thumbPadding: "_1s0h2"
            }
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components.1476b2c61b070dfd2bea.js.map