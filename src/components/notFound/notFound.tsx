import React from 'react';

export default function NotFoundPage() {
    return (
        <div>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-MQKFLVW&gtm_auth=&gtm_preview=&gtm_cookies_win=x"
                    height="0"
                    width="0"
                    id="tag-manager"
                    title="Google Tag Manager"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <section className="wrapper">
                <div className="container-404">
                    <div className="scene" data-hover-only="false" id="scene">
                        <div className="two" data-depth="0.60">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <div className="three" data-depth="0.40">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <p className="p404" data-depth="0.50">404</p>
                        <p className="p404" data-depth="0.10">404</p>
                    </div>
                    <div className="text">
                        <article>
                            <p>Sayfa Bulunamadı</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
