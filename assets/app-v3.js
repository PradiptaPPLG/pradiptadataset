/* ============================================================
   DATASET ARCHIVE
   app-v3.js
   ============================================================ */


/* ============================================================
   DATASET CONFIGURATION
   ============================================================ */

const datasets = [
    {
        id: "01",

        name: "Dummy Dealer Indonesia",

        description:
            "Dummy dealer mobil Indonesia untuk testing, prototyping, dan database seeding.",

        file:
            "data-dummy-dealer-in-indonesian.php",

        source:
            "car/php/data-dummy-dealer-in-indonesian.php",

        preview:
            "car/preview/data-dummy-dealer-in-indonesian.php.txt",

        format:
            "PHP",

        type:
            "Dummy Data",

        directory:
            "car / php",

        tags: [
            "php",
            "database"
        ]
    },

    {
        id: "02",

        name: "Indonesian Car Dataset",

        description:
            "Dataset kendaraan Indonesia untuk katalog kendaraan, aplikasi otomotif, dan eksperimen data.",

        file:
            "data-indonesian-car-by-pradipta.php",

        source:
            "car/php/data-indonesian-car-by-pradipta.php",

        preview:
            "car/preview/data-indonesian-car-by-pradipta.php.txt",

        format:
            "PHP",

        type:
            "Vehicle",

        directory:
            "car / php",

        tags: [
            "php",
            "vehicle"
        ]
    },

    {
        id: "03",

        name: "Indonesian Number Plate",

        description:
            "Reference dataset nomor polisi kendaraan Indonesia.",

        file:
            "data-indonesian-number-plate-by-pradipta.php",

        source:
            "car/php/data-indonesian-number-plate-by-pradipta.php",

        preview:
            "car/preview/data-indonesian-number-plate-by-pradipta.php.txt",

        format:
            "PHP",

        type:
            "Reference",

        directory:
            "car / php",

        tags: [
            "php",
            "reference",
            "vehicle"
        ]
    },

    {
        id: "04",

        name: "Type Engine Car",

        description:
            "Reference dataset tipe dan konfigurasi mesin kendaraan.",

        file:
            "data-type-engine-car-by-pradipta.php",

        source:
            "car/php/data-type-engine-car-by-pradipta.php",

        preview:
            "car/preview/data-type-engine-car-by-pradipta.php.txt",

        format:
            "PHP",

        type:
            "Reference",

        directory:
            "car / php",

        tags: [
            "php",
            "reference",
            "vehicle"
        ]
    },

    {
        id: "05",

        name: "Dummy Dealer Indonesia",

        description:
            "SQL dataset dealer Indonesia untuk import database.",

        file:
            "data-dummy-dealer-in-indonesian.sql",

        source:
            "car/sql/data-dummy-dealer-in-indonesian.sql",

        preview:
            "car/preview/data-dummy-dealer-in-indonesian.sql.txt",

        format:
            "SQL",

        type:
            "Database",

        directory:
            "car / sql",

        tags: [
            "sql",
            "database"
        ]
    },

    {
        id: "06",

        name: "Indonesian Car Dataset",

        description:
            "SQL dataset kendaraan Indonesia untuk database dan aplikasi otomotif.",

        file:
            "data-indonesian-car-by-pradipta.sql",

        source:
            "car/sql/data-indonesian-car-by-pradipta.sql",

        preview:
            "car/preview/data-indonesian-car-by-pradipta.sql.txt",

        format:
            "SQL",

        type:
            "Database",

        directory:
            "car / sql",

        tags: [
            "sql",
            "database",
            "vehicle"
        ]
    },

    {
        id: "07",

        name: "Indonesian Number Plate",

        description:
            "SQL reference dataset nomor polisi kendaraan Indonesia.",

        file:
            "data-indonesian-number-plate-by-pradipta.sql",

        source:
            "car/sql/data-indonesian-number-plate-by-pradipta.sql",

        preview:
            "car/preview/data-indonesian-number-plate-by-pradipta.sql.txt",

        format:
            "SQL",

        type:
            "Reference",

        directory:
            "car / sql",

        tags: [
            "sql",
            "reference",
            "vehicle"
        ]
    },

    {
        id: "08",

        name: "Type Engine Car",

        description:
            "SQL reference dataset tipe engine kendaraan.",

        file:
            "data-type-engine-car-by-pradipta.sql",

        source:
            "car/sql/data-type-engine-car-by-pradipta.sql",

        preview:
            "car/preview/data-type-engine-car-by-pradipta.sql.txt",

        format:
            "SQL",

        type:
            "Reference",

        directory:
            "car / sql",

        tags: [
            "sql",
            "reference",
            "vehicle"
        ]
    }
];


/* ============================================================
   APPLICATION STATE
   ============================================================ */

let activeFilter = "all";

let activeDataset = null;

let activeSource = "";

let toastTimer = null;


/* ============================================================
   DOM ELEMENTS
   ============================================================ */

const datasetList =
    document.getElementById(
        "datasetList"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const filterRow =
    document.getElementById(
        "filterRow"
    );

const libraryCount =
    document.getElementById(
        "libraryCount"
    );


/* Modal */

const previewModal =
    document.getElementById(
        "previewModal"
    );

const modalBackdrop =
    document.getElementById(
        "modalBackdrop"
    );

const closeModalButton =
    document.getElementById(
        "closeModal"
    );


/* Modal information */

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalFile =
    document.getElementById(
        "modalFile"
    );

const metaFormat =
    document.getElementById(
        "metaFormat"
    );

const metaType =
    document.getElementById(
        "metaType"
    );

const metaDirectory =
    document.getElementById(
        "metaDirectory"
    );

const metaSize =
    document.getElementById(
        "metaSize"
    );


/* Viewer */

const viewerCode =
    document.getElementById(
        "viewerCode"
    );

const viewerStatus =
    document.getElementById(
        "viewerStatus"
    );

const viewerLines =
    document.getElementById(
        "viewerLines"
    );


/* Viewer buttons */

const copyButton =
    document.getElementById(
        "copyButton"
    );

const downloadButton =
    document.getElementById(
        "downloadButton"
    );


/* Toast */

const toast =
    document.getElementById(
        "toast"
    );


/* ============================================================
   INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderDatasets();

        setupFilters();

        setupSearch();

        setupModal();

        console.log(
            "Dataset Archive initialized.",
            datasets
        );

    }
);


/* ============================================================
   DATASET LIST
   ============================================================ */

function renderDatasets() {

    if (!datasetList) {
        return;
    }


    const filtered =
        getFilteredDatasets();


    updateLibraryCount(
        filtered.length
    );


    if (filtered.length === 0) {

        datasetList.innerHTML = `

            <div class="empty">

                <strong>
                    No dataset found
                </strong>

                <span>
                    Coba gunakan keyword atau filter lainnya.
                </span>

            </div>

        `;

        return;
    }


    datasetList.innerHTML = `

        <div class="dataset-heading">

            <div>
                NO.
            </div>

            <div>
                DATASET
            </div>

            <div>
                SOURCE
            </div>

            <div>
                TYPE
            </div>

            <div style="text-align:right">
                ACTION
            </div>

        </div>

        ${filtered
            .map(
                dataset =>
                    createDatasetRow(
                        dataset
                    )
            )
            .join("")}

    `;


    bindDatasetActions();

}


/* ============================================================
   CREATE DATASET ROW
   ============================================================ */

function createDatasetRow(
    dataset
) {

    return `

        <article
            class="dataset-item"
        >

            <div class="dataset-number">

                ${escapeHTML(
                    dataset.id
                )}

            </div>


            <div class="dataset-main">

                <div class="dataset-name">

                    ${escapeHTML(
                        dataset.name
                    )}

                </div>


                <div class="dataset-description">

                    ${escapeHTML(
                        dataset.description
                    )}

                </div>

            </div>


            <div
                class="dataset-source"
                title="${escapeHTML(
                    dataset.file
                )}"
            >

                ${escapeHTML(
                    dataset.file
                )}

            </div>


            <div class="dataset-type">

                ${escapeHTML(
                    dataset.type
                )}

            </div>


            <div class="dataset-actions">


                <button
                    type="button"
                    class="action primary"
                    data-preview-id="${escapeHTML(
                        dataset.id
                    )}"
                >

                    Preview

                </button>


                <button
                    type="button"
                    class="action"
                    data-download-id="${escapeHTML(
                        dataset.id
                    )}"
                >

                    Download

                </button>


            </div>

        </article>

    `;

}


/* ============================================================
   FILTER DATA
   ============================================================ */

function getFilteredDatasets() {

    const query =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    return datasets.filter(
        dataset => {

            const matchesFilter =
                activeFilter === "all"
                ||
                dataset.tags.includes(
                    activeFilter
                )
                ||
                dataset.format
                    .toLowerCase()
                    ===
                    activeFilter;


            const searchContent = [

                dataset.name,

                dataset.description,

                dataset.file,

                dataset.source,

                dataset.format,

                dataset.type,

                dataset.directory,

                ...dataset.tags

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                query === ""
                ||
                searchContent.includes(
                    query
                );


            return (
                matchesFilter
                &&
                matchesSearch
            );

        }
    );

}


/* ============================================================
   BIND DATASET BUTTONS
   ============================================================ */

function bindDatasetActions() {

    document
        .querySelectorAll(
            "[data-preview-id]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        openPreview(
                            button.dataset
                                .previewId
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-download-id]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        downloadDataset(
                            button.dataset
                                .downloadId
                        );

                    }
                );

            }
        );

}


/* ============================================================
   OPEN PREVIEW
   ============================================================ */

async function openPreview(
    id
) {

    /*
     * Cari dataset berdasarkan ID.
     */

    const dataset =
        datasets.find(
            item =>
                item.id === String(id)
        );


    /*
     * Dataset tidak ditemukan.
     */

    if (!dataset) {

        console.error(
            "Dataset tidak ditemukan:",
            id
        );

        showToast(
            "Dataset not found"
        );

        return;
    }


    /*
     * Simpan dataset aktif.
     */

    activeDataset =
        dataset;

    activeSource =
        "";


    /*
     * Isi informasi modal.
     */

    setText(
        modalTitle,
        dataset.name
    );

    setText(
        modalFile,
        dataset.file
    );

    setText(
        metaFormat,
        dataset.format
    );

    setText(
        metaType,
        dataset.type
    );

    setText(
        metaDirectory,
        dataset.directory
    );

    setText(
        metaSize,
        "Loading..."
    );

    setText(
        viewerStatus,
        "Loading preview..."
    );

    setText(
        viewerLines,
        "—"
    );


    /*
     * Kosongkan viewer.
     */

    if (viewerCode) {

        viewerCode.innerHTML = `
            <span>
                Loading dataset...
            </span>
        `;

    }


    /*
     * Buka modal.
     */

    if (previewModal) {

        previewModal.classList.add(
            "open"
        );

        previewModal.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    document.body.style.overflow =
        "hidden";


    try {

        /*
         * Pastikan preview path tersedia.
         */

        if (!dataset.preview) {

            throw new Error(
                "Preview path belum tersedia."
            );

        }


        /*
         * Resolve URL secara aman.
         */

        const previewURL =
            new URL(
                dataset.preview,
                window.location.href
            );


        console.log(
            "Loading preview:",
            previewURL.href
        );


        /*
         * Ambil file TXT preview.
         */

        const response =
            await fetch(
                previewURL.href,
                {
                    method: "GET",
                    cache: "no-store"
                }
            );


        /*
         * Cek HTTP status.
         */

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status} — ${response.statusText}`
            );

        }


        /*
         * Ambil isi file sebagai text.
         */

        const text =
            await response.text();


        /*
         * Jangan tampilkan halaman HTML
         * kalau server salah routing.
         */

        if (
            looksLikeHTML(
                text
            )
        ) {

            throw new Error(
                "Server returned HTML instead of the preview file."
            );

        }


        /*
         * Simpan source aktif.
         */

        activeSource =
            text;


        /*
         * Render source dengan
         * line number.
         */

        renderSource(
            text
        );


        /*
         * Hitung ukuran.
         */

        const size =
            new Blob(
                [text]
            ).size;


        setText(
            metaSize,
            formatBytes(
                size
            )
        );


        /*
         * Update status.
         */

        setText(
            viewerStatus,
            "Loaded successfully"
        );


        setText(
            viewerLines,
            `${countLines(text)} lines`
        );


    } catch (error) {

        /*
         * Log error ke console.
         */

        console.error(
            "Preview error:",
            error
        );


        activeSource =
            "";


        /*
         * Tampilkan error di viewer.
         */

        if (viewerCode) {

            viewerCode.innerHTML = `

                <span
                    style="color:#ef7667"
                >
                    Unable to load this dataset.
                </span>

                <span
                    style="color:#999"
                >
                    ${escapeHTML(
                        error.message
                    )}
                </span>

                <span></span>

                <span
                    style="color:#777"
                >
                    Preview path:
                </span>

                <span
                    style="color:#eeeeee"
                >
                    ${escapeHTML(
                        dataset.preview
                    )}
                </span>

            `;

        }


        setText(
            viewerStatus,
            "Preview unavailable"
        );

        setText(
            viewerLines,
            "ERROR"
        );

        setText(
            metaSize,
            "—"
        );

    }

}


/* ============================================================
   RENDER SOURCE CODE
   ============================================================ */

function renderSource(
    text
) {

    if (!viewerCode) {
        return;
    }


    const lines =
        text.split(
            /\r?\n/
        );


    viewerCode.innerHTML =
        lines
            .map(
                (line, index) => {

                    const number =
                        index + 1;


                    const content =
                        escapeHTML(
                            line
                        );


                    return `

                        <span
                            class="code-line"
                            data-line="${number}"
                        >${content || " "}</span>

                    `;

                }
            )
            .join("");

}


/* ============================================================
   DOWNLOAD
   ============================================================ */

async function downloadDataset(
    id
) {

    const dataset =
        datasets.find(
            item =>
                item.id === String(id)
        );


    if (!dataset) {

        console.error(
            "Dataset tidak ditemukan:",
            id
        );

        showToast(
            "Dataset not found"
        );

        return;
    }


    try {

        showToast(
            "Preparing download..."
        );


        /*
         * Download mengambil
         * isi file preview TXT.
         */

        const previewURL =
            new URL(
                dataset.preview,
                window.location.href
            );


        const response =
            await fetch(
                previewURL.href,
                {
                    method: "GET",
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const text =
            await response.text();


        /*
         * Pastikan bukan HTML.
         */

        if (
            looksLikeHTML(
                text
            )
        ) {

            throw new Error(
                "Server returned HTML instead of dataset."
            );

        }


        /*
         * Buat file baru.
         */

        const blob =
            new Blob(
                [
                    text
                ],
                {
                    type:
                        dataset.format === "SQL"
                            ? "application/sql;charset=utf-8"
                            : "text/plain;charset=utf-8"
                }
            );


        /*
         * Temporary URL.
         */

        const objectURL =
            URL.createObjectURL(
                blob
            );


        /*
         * Temporary <a>.
         */

        const link =
            document.createElement(
                "a"
            );


        link.href =
            objectURL;


        /*
         * Nama file hasil download
         * tetap .php / .sql.
         */

        link.download =
            dataset.file;


        link.style.display =
            "none";


        document.body.appendChild(
            link
        );


        /*
         * Trigger download.
         */

        link.click();


        /*
         * Cleanup.
         */

        link.remove();


        setTimeout(
            () => {

                URL.revokeObjectURL(
                    objectURL
                );

            },
            1000
        );


        showToast(
            "Download started"
        );


    } catch (error) {

        console.error(
            "Download error:",
            error
        );


        showToast(
            "Download failed"
        );

    }

}


/* ============================================================
   COPY SOURCE
   ============================================================ */

if (copyButton) {

    copyButton.addEventListener(
        "click",
        async () => {

            if (!activeSource) {

                showToast(
                    "Nothing to copy"
                );

                return;
            }


            try {

                await navigator
                    .clipboard
                    .writeText(
                        activeSource
                    );


                const oldText =
                    copyButton.textContent;


                copyButton.textContent =
                    "Copied";


                showToast(
                    "Source copied"
                );


                setTimeout(
                    () => {

                        copyButton.textContent =
                            oldText;

                    },
                    1200
                );


            } catch (error) {

                console.error(
                    "Copy error:",
                    error
                );


                showToast(
                    "Copy failed"
                );

            }

        }
    );

}


/* ============================================================
   MODAL
   ============================================================ */

function setupModal() {

    if (closeModalButton) {

        closeModalButton.addEventListener(
            "click",
            closePreview
        );

    }


    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closePreview
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
                &&
                previewModal
                &&
                previewModal.classList.contains(
                    "open"
                )
            ) {

                closePreview();

            }

        }
    );

}


function closePreview() {

    if (!previewModal) {
        return;
    }


    previewModal.classList.remove(
        "open"
    );


    previewModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    activeDataset =
        null;

    activeSource =
        "";

}


/* ============================================================
   SEARCH
   ============================================================ */

function setupSearch() {

    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        () => {

            renderDatasets();

        }
    );

}


/* ============================================================
   FILTER
   ============================================================ */

function setupFilters() {

    if (!filterRow) {
        return;
    }


    filterRow
        .querySelectorAll(
            ".filter"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        /*
                         * Remove active
                         */

                        filterRow
                            .querySelectorAll(
                                ".filter"
                            )
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        /*
                         * Set active
                         */

                        button.classList.add(
                            "active"
                        );


                        /*
                         * Save filter
                         */

                        activeFilter =
                            button.dataset
                                .filter
                            ||
                            "all";


                        /*
                         * Render ulang
                         */

                        renderDatasets();

                    }
                );

            }
        );

}


/* ============================================================
   LIBRARY COUNT
   ============================================================ */

function updateLibraryCount(
    count
) {

    if (!libraryCount) {
        return;
    }


    libraryCount.textContent =
        `${String(count).padStart(2, "0")} FILES`;

}


/* ============================================================
   TEXT HELPER
   ============================================================ */

function setText(
    element,
    value
) {

    if (!element) {
        return;
    }


    element.textContent =
        value;

}


/* ============================================================
   HTML ESCAPE
   ============================================================ */

function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


/* ============================================================
   COUNT LINES
   ============================================================ */

function countLines(
    text
) {

    if (!text) {
        return 0;
    }


    return text.split(
        /\r?\n/
    ).length;

}


/* ============================================================
   FORMAT BYTES
   ============================================================ */

function formatBytes(
    bytes
) {

    if (
        !Number.isFinite(bytes)
    ) {

        return "—";

    }


    if (bytes < 1024) {

        return `${bytes} B`;

    }


    if (
        bytes <
        1024 * 1024
    ) {

        return `${(
            bytes / 1024
        ).toFixed(1)} KB`;

    }


    return `${(
        bytes / 1024 / 1024
    ).toFixed(2)} MB`;

}


/* ============================================================
   DETECT HTML RESPONSE
   ============================================================ */

function looksLikeHTML(
    text
) {

    const start =
        String(
            text ?? ""
        )
            .trim()
            .slice(
                0,
                500
            )
            .toLowerCase();


    return (
        start.startsWith(
            "<!doctype html"
        )
        ||
        start.startsWith(
            "<html"
        )
        ||
        start.startsWith(
            "<head"
        )
        ||
        start.startsWith(
            "<body"
        )
    );

}


/* ============================================================
   TOAST
   ============================================================ */

function showToast(
    message
) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    if (toastTimer) {

        clearTimeout(
            toastTimer
        );

    }


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );

}