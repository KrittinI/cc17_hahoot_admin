import defaultImage from "../../../assets/hh-hero.png";

export default function ContentCard({ dataContent }) {
  return (
    <>
      <div className="p-8 rounded-lg flex flex-col gap-16 border shadow-xl">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 ">
            <img
              src={dataContent?.eventPicture || defaultImage}
              className="w-1/2 h-[294px] rounded-md"
            />
            <div className="gap-y-3">
              <div>
                <h1 className="text-font-title-card">Title</h1>
                <div className=" p-2 rounded-lg shadow text-font-body border border-grey">
                  {dataContent?.title}
                </div>
              </div>
              <div>
                <h1 className="text-font-title-card">Detail</h1>
                <div className="p-2 rounded-lg max-h-[50%] overflow-auto shadow text-font-body border border-grey">
                  {dataContent?.detail}
                </div>
              </div>
              <div>
                <h1 className="text-font-title-card">Create Date</h1>
                <div className="p-2 rounded-lg shadow text-font-body border border-grey">
                  {dataContent?.createdAt?.split("T")[0].split("-").reverse().join("/")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
