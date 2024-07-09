
export default function Tag({tagName}){
    return (
        <>
        <div className="font-poppings flex content-center">{tagName}
            <button>
                <img src="src\imagens\xIcone.png" className="w-5"/>
            </button>
        </div>
        </>
    );
}