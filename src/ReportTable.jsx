export default function ReportTable({ imagesData }) {
    return (
        <div>
            {imagesData.map((imagesObj) =>
                imagesObj.pictures.map((picture) => (
                    <figure>
                        <img
                            src={URL.createObjectURL(picture)}
                            alt="Image"
                            width={350}
                        />
                        <figcaption>{imagesObj.waterMark}</figcaption>
                    </figure>
                )),
            )}
        </div>
    );
}
