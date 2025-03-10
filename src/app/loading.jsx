//fall back UI when the data is loading
function Spinner({}) {
    return (
      <>
        <div className="flex items-center justify-center mt-44 mb-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0D92F4]"></div>
        </div>
      </>
    );
  }
  
  export default Spinner;