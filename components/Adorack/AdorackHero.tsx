import Link from 'next/link';

export default function AdorackHero() {
    return (
        <section className="ad-hero" id="top">
            <div className="wrap" style={{ position: 'relative', paddingTop: 28, paddingBottom: 0 }}>
                <nav className="crumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link> <span aria-hidden="true">/</span>{' '}
                    <Link href="/products">Products</Link> <span aria-hidden="true">/</span> <span>Adorack</span>
                </nav>

                {/* Decorative orbits, network badges, watermark */}
                <div aria-hidden="true" className="orb ring" style={{ width: 760, height: 760, left: '50%', top: 40, marginLeft: -380, borderStyle: 'dashed' }}></div>
                <div aria-hidden="true" className="orb" style={{ width: 1100, height: 1100, left: '50%', top: -120, marginLeft: -550 }}></div>
                <div aria-hidden="true" className="fly float1" style={{ left: '2%', top: 150 }}><span className="pbadge ig">IG</span><span>Reel scheduled<small>Today, 6:30 PM</small></span></div>
                <div aria-hidden="true" className="fly float2" style={{ left: '4%', top: 350 }}><span className="pbadge li">in</span><span>Post approved<small>Brightwave Inc.</small></span></div>
                <div aria-hidden="true" className="fly float3" style={{ right: '2%', top: 140 }}><span className="pbadge fb">f</span><span>Published<small>3 Pages · 2 Groups</small></span></div>
                <div aria-hidden="true" className="fly float1" style={{ right: '4%', top: 350 }}><span className="pbadge tt">♪</span><span>Added to queue<small>Thu, 12:00 PM</small></span></div>
                <div aria-hidden="true" className="fly float2" style={{ left: '1%', top: 560 }}><span className="pbadge yt">▶</span><span>Video in campaign<small>Summer Promo</small></span></div>
                <div aria-hidden="true" className="fly float3" style={{ right: '1%', top: 560 }}><span className="pbadge bs">b</span><span>AI caption ready<small>2 options</small></span></div>

                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22, maxWidth: 900, margin: '40px auto 0' }}>
                    <span className="pill rise"><b>SaaS</b> Social media management platform · built by Accugile</span>
                    <div className="ad-brand rise rise2">
                        <h1 className="ad-name">Ador<i>ack</i></h1>
                    </div>
                    <p className="ad-tag rise rise2">
                        Plan, approve and publish to <span className="serif" style={{ color: 'var(--ac)', fontSize: '1.1em' }}>8 social networks</span> from one workspace.
                    </p>
                    <p className="lead rise rise3" style={{ maxWidth: 720 }}>
                        Adorack brings your composer, content calendar, posting queue, campaigns and team approvals into one dashboard, with an AI assistant that writes captions and hashtags for you. Built for agencies and teams that manage more than one brand.
                    </p>
                    <div className="rise rise4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://app.adorack.com/registration/" target="_blank" rel="noopener noreferrer" className="btn btn-ac" style={{ fontSize: 16, padding: '16px 26px' }}>
                            Start your 30-day free trial
                            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                                <path d="M2 7 H12 M8 3 L12 7 L8 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        {/* <a href="https://app.adorack.com/login/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 16, padding: '16px 26px' }}>
                            Sign in to Adorack
                        </a> */}
                    </div>
                    <div className="trialnote rise rise4" style={{ justifyContent: 'center' }}>
                        <span>No credit card required</span>
                        <span>5 team members</span>
                        <span>3 workspaces</span>
                        <span>5 social accounts</span>
                        <span>50 scheduled posts</span>
                    </div>
                </div>

                {/* Product mockup */}
                <div className="rise rise4" style={{ position: 'relative', margin: '56px auto 0', maxWidth: 1180 }}>
                    <div className="app" role="img" aria-label="Adorack dashboard showing a weekly content calendar and the post composer with the AI assistant">
                        <div className="app-top"><i></i><i></i><i></i><span className="app-url">app.adorack.com/calendar</span></div>
                        <div className="app-body">
                            <aside className="app-side" aria-hidden="true">
                                <div className="ws"><i></i>Brightwave Agency</div>
                                <a>Dashboard</a>
                                <a>Composer</a>
                                <a className="on">Calendar</a>
                                <a>Queue</a>
                                <a>Campaigns</a>
                                <a>Content Library</a>
                                <a>Categories</a>
                                <a>Approvals <em>3</em></a>
                                <a>Workspaces</a>
                                <a>Brexel Docs</a>
                                <a>Team</a>
                            </aside>
                            <div className="app-main" aria-hidden="true">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                                    <div>
                                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18 }}>This week</div>
                                        <div style={{ fontSize: 12, color: '#5B6474' }}>Campaign: Summer Promo · 14 posts scheduled</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 6, fontSize: 11, flexWrap: 'wrap' }}>
                                        <span className="post k1" style={{ flexDirection: 'row', padding: '4px 8px' }}>Updates</span>
                                        <span className="post k2" style={{ flexDirection: 'row', padding: '4px 8px' }}>Product</span>
                                        <span className="post k3" style={{ flexDirection: 'row', padding: '4px 8px' }}>Promo</span>
                                        <span className="post k4" style={{ flexDirection: 'row', padding: '4px 8px' }}>Events</span>
                                    </div>
                                </div>
                                <div className="cal">
                                    <div className="d">Mon</div><div className="d">Tue</div><div className="d">Wed</div><div className="d">Thu</div><div className="d">Fri</div><div className="d">Sat</div><div className="d">Sun</div>
                                    <div className="c"><div className="post k1">New blog: 5 reel ideas<small><i className="li"></i>10:00</small></div><div className="post k3">Summer sale is live<small><i className="ig"></i>18:30</small></div></div>
                                    <div className="c"><div className="post k2">Feature drop: dark mode<small><i className="fb"></i>09:00</small></div></div>
                                    <div className="c today"><div className="post k3 drop">20% off this weekend<small><i className="tt"></i>12:00</small></div><div className="post k1">Behind the scenes<small><i className="th"></i>16:00</small></div></div>
                                    <div className="c"><div className="post k4">Live Q&amp;A at 5 pm<small><i className="yt"></i>11:00</small></div></div>
                                    <div className="c"><div className="post k2">Pin: summer lookbook<small><i className="pi"></i>08:30</small></div><div className="post k1">Team spotlight<small><i className="bs"></i>15:00</small></div></div>
                                    <div className="c"><div className="post k3">Last day of the sale<small><i className="ig"></i>10:00</small></div></div>
                                    <div className="c"></div>
                                </div>
                            </div>
                            <div className="app-comp" aria-hidden="true">
                                <h5>Create post</h5>
                                <div>
                                    <div style={{ fontSize: 10, color: '#5B6474', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>
                                        Accounts · 3 of 8 selected
                                    </div>
                                    <div className="accs">
                                        <span className="pbadge fb sel">f</span>
                                        <span className="pbadge ig sel">IG</span>
                                        <span className="pbadge li sel">in</span>
                                        <span className="pbadge yt off">▶</span>
                                        <span className="pbadge pi off">P</span>
                                        <span className="pbadge th off">@</span>
                                        <span className="pbadge bs off">b</span>
                                        <span className="pbadge tt off">♪</span>
                                    </div>
                                </div>
                                <div className="sel-row">
                                    <div><span>Campaign</span>Summer Promo</div>
                                    <div><span>Category</span>Updates</div>
                                </div>
                                <div className="txt">
                                    <div className="ln">☀️ Summer just got brighter.</div>
                                    <div className="ln ln2">Take 20% off everything this weekend only. Your new favourite look is one tap away.</div>
                                    <div className="ln ln3" style={{ color: 'var(--ac)' }}>#SummerSale #ShopSmall #NewArrivals</div>
                                </div>
                                <span className="aibtn">✦ Generated with Adorack AI</span>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11.5, color: '#475569' }}>
                                    <span style={{ border: '1px solid #E5E8EF', borderRadius: 8, padding: '6px 8px', background: '#FFFFFF' }}>Wed · 12:00 PM</span>
                                    <span>Needs approval</span>
                                </div>
                                <div className="submit">Submit post</div>
                            </div>
                        </div>
                    </div>
                    <div className="floatcard float1 hide-sm" style={{ left: -28, top: 140 }}>
                        <span className="ico" style={{ background: '#0E9F6E' }}>✓</span>
                        <span><strong style={{ display: 'block' }}>Post approved</strong><span style={{ color: '#5B6474', fontSize: 12 }}>by Priya · Admin</span></span>
                    </div>
                    <div className="floatcard float2 hide-sm" style={{ right: -24, bottom: 90 }}>
                        <span className="ico" style={{ background: 'var(--ac)' }}>⏱</span>
                        <span><strong style={{ display: 'block' }}>Added to queue</strong><span style={{ color: '#5B6474', fontSize: 12 }}>Next free slot: Thu 10:00 AM</span></span>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="ad-water">Adorack</div>
            <div style={{ height: 80 }}></div>
        </section>
    );
}

