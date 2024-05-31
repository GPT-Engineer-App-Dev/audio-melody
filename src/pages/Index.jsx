import { Container, VStack, Text, Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100); // Placeholder duration

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    setCurrentTime((prevTime) => Math.min(prevTime + 10, duration));
  };

  const handleBackward = () => {
    setCurrentTime((prevTime) => Math.max(prevTime - 10, 0));
  };

  const handleSliderChange = (value) => {
    setCurrentTime(value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Music Player</Text>
        <Box>
          <IconButton aria-label="Backward" icon={<FaBackward />} size="lg" onClick={handleBackward} />
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} size="lg" mx={4} onClick={handlePlayPause} />
          <IconButton aria-label="Forward" icon={<FaForward />} size="lg" onClick={handleForward} />
        </Box>
        <Box width="100%">
          <Slider aria-label="slider-ex-1" value={currentTime} min={0} max={duration} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Text>{`${Math.floor(currentTime / 60)}:${String(currentTime % 60).padStart(2, '0')} / ${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, '0')}`}</Text>
      </VStack>
    </Container>
  );
};

export default Index;