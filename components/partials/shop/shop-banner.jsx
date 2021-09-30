import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {
    const { title = "Riode Shop", current = "Categories", adClass = '' } = props;

    return (
        <div className={ "page-header " + adClass } style={ { backgroundImage: `url( ./images/home/page-header.jpg )`, backgroundColor: "#3C63A4" } }>
            {
                title ? <h1 className="page-title">{ title }</h1> : ''
            }
            <ul className="breadcrumb">
                <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter"><i className="fas fa-angle-right"></i></li>
                <li>{ current }</li>
            </ul>
        </div>
    )
}