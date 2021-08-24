import Sound from "react-sound";

const Bell = (handleBellLoading, handleBellPlaying, handleBellFinished) => {
  return (
    <div>
      <Sound
        url="https://www.youtube.com/watch?v=TvvTacquttk"
        playStatus={Sound.status.PLAYING}
        playFromPosition={100}
        onLoading={handleBellLoading}
        onPlaying={handleBellPlaying}
        onFinishedPlaying={handleBellFinished}
      />
    </div>
  );
};

export default Bell;
