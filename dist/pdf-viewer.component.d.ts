import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import 'pdfjs-dist/build/pdf.combined';
import 'pdfjs-dist/web/pdf_viewer';
export declare class PdfViewerComponent extends OnInit {
    private element;
    private static CSS_UNITS;
    private _showAll;
    private _renderText;
    private _renderLink;
    private _stickToPage;
    private _originalSize;
    private _src;
    private _pdf;
    private _page;
    private _zoom;
    private wasInvalidPage;
    private _rotation;
    private isInitialised;
    private lastLoaded;
    private _enhanceTextSelection;
    private _pageBorder;
    private _externalLinkTarget;
    private _pdfViewer;
    private _pdfLinkService;
    afterLoadComplete: Function;
    constructor(element: ElementRef);
    ngOnInit(): void;
    src: any;
    page: any;
    pageChange: EventEmitter<number>;
    renderText: boolean;
    renderLink: any;
    originalSize: boolean;
    showAll: boolean;
    stickToPage: boolean;
    zoom: number;
    rotation: number;
    private update();
    externalLinkTarget: string;
    pageBorder: boolean;
    enhanceTextSelection: boolean;
    setupViewer(): void;
    loadPDF(src?: any): void;
    render(): void;
    updateSize(): void;
    isValidPageNumber(page: number): boolean;
}
