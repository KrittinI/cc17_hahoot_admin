export default function ContentCard({ dataContent }) {
  return (
    <>
      <h1 className="text-font-title">Edit Home Page Content</h1>
      <div className="p-8 rounded-tl-3xl flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 ">
            <img
              src={dataContent.image}
              className="w-1/2 h-[256px] rounded-xl"
            />
            <div className="grid gap-y-3">
              <div>
                <h1 className="text-font-title-card">Title</h1>
                <div className=" p-2 rounded-lg shadow text-font-body border border-grey">
                  {dataContent?.title}
                </div>
              </div>
              <div>
                <h1 className="text-font-title-card">Detail</h1>
                <div className="p-2 rounded-lg shadow text-font-body border border-grey">
                  {dataContent?.detail}
                </div>
              </div>
              <div>
                <h1 className="text-font-title-card">Create Date</h1>
                <div className="p-2 rounded-lg shadow text-font-body border border-grey">
                  01 July 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
