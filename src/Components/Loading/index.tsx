import './index.css';
const Loading = ({ size }: any) => {
    return (
        <div className="loading-container">
            <div className="loading" style={{ height: size, width: size }}></div>
        </div>
    )
};
export default Loading;