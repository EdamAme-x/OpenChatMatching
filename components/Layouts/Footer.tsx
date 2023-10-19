export function Footer() {
  return (
    <>
      <div className="flex font-mono w-full h-auto bg-gray-100 p-2">
        <p className="text-center w-full">&copy; 2023- ame_x / @amex2189</p>
        <a href="https://github.com/EdamAme-x/OpenChatMatching?openExternalBrowser=1">
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="GitHub"
            width={30}
            height={30}
            className="mx-2"
          />
        </a>
        <a href="https://twitter.com/amex2189?openExternalBrowser=1">
          <img
            src="https://www.svgrepo.com/show/513008/twitter-154.svg"
            alt="Twitter"
            width={30}
            height={30}
            className="mx-2"
          />
        </a>
      </div>
    </>
  );
}
