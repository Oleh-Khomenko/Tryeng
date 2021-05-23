'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' : 'data-target="#xs-components-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' :
                                            'id="xs-components-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticlesTestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticlesTestFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntryFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FutureSimpleTestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FutureSimpleTestFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PastSimpleTestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PastSimpleTestFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresentSimpleTestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PresentSimpleTestFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestsFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VocabularyTestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VocabularyTestFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' : 'data-target="#xs-injectables-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' :
                                        'id="xs-injectables-links-module-AppModule-8b34bae22d656a2594005b621f2a7386"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesFormRoutingModule.html" data-type="entity-link">ArticlesFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesTestFormModule.html" data-type="entity-link">ArticlesTestFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EntryFormModule.html" data-type="entity-link">EntryFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EntryFormRoutingModule.html" data-type="entity-link">EntryFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FutureSimpleFormRoutingModule.html" data-type="entity-link">FutureSimpleFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FutureSimpleTestFormModule.html" data-type="entity-link">FutureSimpleTestFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainFormModule.html" data-type="entity-link">MainFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainFormRoutingModule.html" data-type="entity-link">MainFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PastSimpleFormRoutingModule.html" data-type="entity-link">PastSimpleFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PastSimpleTestFormModule.html" data-type="entity-link">PastSimpleTestFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PresentSimpleFormRoutingModule.html" data-type="entity-link">PresentSimpleFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PresentSimpleTestFormModule.html" data-type="entity-link">PresentSimpleTestFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterFormModule.html" data-type="entity-link">RegisterFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterFormRoutingModule.html" data-type="entity-link">RegisterFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestsFormModule.html" data-type="entity-link">TestsFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestsFormRoutingModule.html" data-type="entity-link">TestsFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VocabularyFormRoutingModule.html" data-type="entity-link">VocabularyFormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VocabularyTestFormModule.html" data-type="entity-link">VocabularyTestFormModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});