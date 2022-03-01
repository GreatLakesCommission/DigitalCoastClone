import { h, render } from 'preact';
import FooterView from './views/footer.view';
import HeaderView from './views/header.view';
import EntryView from './views/entry.view';
import SnapshotView from './views/snapshot.view';
import PrintView from './views/print.view';
import SnapshotSelectorComponent from './components/snapshot-selector.component';
// Font Awesome Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faBars, faExclamationCircle, faExchangeAlt, faTh, faMapMarkerAlt, faSearch, faShare, faTimes as fasTimes, faSun, faMoon, faArrowUp, faClipboardCheck, faCircle, faChevronDown, faChevronLeft, faChevronRight, faArrowLeft, faMapMarker, faPrint, faQuestionCircle, faQuestion } from '@fortawesome/pro-solid-svg-icons';
import { faWater, faHandsUsd, faEquals, faPlus } from '@fortawesome/pro-regular-svg-icons';
import { faTimes as falTimes } from '@fortawesome/pro-light-svg-icons';

export class App {
    constructor(selector) {
        this.rootElement = document.querySelector(selector);

        this.setupFontAwesomeLibrary();
    }

    setupFontAwesomeLibrary() {
        library.add(faAdjust, faBars, faExclamationCircle, faTh, faExchangeAlt, faMapMarker, faShare, faMapMarkerAlt, faSearch, fasTimes, faSun, faMoon, faArrowUp, faClipboardCheck, faCircle, faPrint, faChevronDown, faChevronLeft, faChevronRight, faArrowLeft, faWater, faHandsUsd, faEquals, faPlus, falTimes, faQuestionCircle, faQuestion);
    }

    get app() {
        return (
            <main role="main">
                <SnapshotSelectorComponent />
                <HeaderView />
                <app-container class="app-container">
                    <SnapshotView />
                    <EntryView />
                </app-container>
                <PrintView />
                <FooterView />
            </main>
        );
    }

    init() {
        render(this.app, this.rootElement);
    }
}
