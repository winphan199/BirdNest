export const TargetIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 485 485"
    >
        <path d="M424.456,227.5C417.206,138.766,346.234,67.794,257.5,60.544V0h-30v60.544C138.766,67.794,67.794,138.766,60.544,227.5H0v30  h60.544c7.251,88.734,78.222,159.706,166.956,166.956V485h30v-60.544c88.734-7.251,159.706-78.222,166.956-166.956H485v-30H424.456z   M394.338,257.5c-7.076,72.18-64.658,129.762-136.838,136.838v-64.186h-30v64.186C155.32,387.262,97.738,329.68,90.662,257.5h64.186  v-30H90.662C97.738,155.32,155.32,97.738,227.5,90.662v64.186h30V90.662c72.18,7.076,129.762,64.658,136.838,136.838h-64.186v30  H394.338z" />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
    </svg>
);

export const SortIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
    </svg>
);

export const ExportIcon = ({ className, width = '3.2rem', height = '3.2rem' }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={width}
        height={height}
        viewBox="0 0 36 36"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
    >
        {/* <title>export-line</title> */}
        <path
            d="M6,13.61h7.61V6H24v8.38h2V6a2,2,0,0,0-2-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z"
            className="clr-i-outline clr-i-outline-path-1"
        />
        <path
            d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z"
            className="clr-i-outline clr-i-outline-path-2"
        />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);
