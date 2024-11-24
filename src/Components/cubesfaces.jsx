import React, { useState } from "react";
import { ImBin } from "react-icons/im";

const CubeFaces = () => {
  const faces = ["Front", "Top", "Right", "Left", "Down", "Back"];
  const defaultColors = [
    "bg-green-500",
    "bg-white",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
  ];
  const faceIds = ["f", "u", "r", "l", "d", "b"];

  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState(
    Array(6)
      .fill(null)
      .map((_, faceIndex) =>
        Array(9)
          .fill(null)
          .map((_, idx) => (idx === 4 ? defaultColors[faceIndex] : null))
      )
  );

  const [colorCounts, setColorCounts] = useState({
    "bg-green-500": 1,
    "bg-white": 1,
    "bg-red-500": 1,
    "bg-orange-500": 1,
    "bg-yellow-500": 1,
    "bg-blue-500": 1,
  });

  const handleColorPick = (color) => {
    setSelectedColor(color);
  };

  const handleSquareClick = (faceIndex, squareIndex) => {
    if (squareIndex === 4) return; // Prevent changing the center box color.

    const currentColor = colors[faceIndex][squareIndex];
    if (currentColor === selectedColor) return; // Avoid redundant updates.

    const newColors = colors.map((face, idx) => {
      if (idx === faceIndex) {
        return face.map((color, sIdx) => {
          if (sIdx === squareIndex) {
            return selectedColor;
          }
          return color;
        });
      }
      return face;
    });

    const newCounts = { ...colorCounts };
    if (currentColor) newCounts[currentColor] -= 1; // Decrement old color count.
    if (selectedColor) newCounts[selectedColor] += 1; // Increment new color count.

    // Validate color count.
    if (selectedColor && newCounts[selectedColor] > 9) {
      alert(
        `Invalid configuration: You cannot use ${selectedColor.replace("bg-", "").replace("-500", "")} more than 8 times.`
      );
      return;
    }

    setColors(newColors);
    setColorCounts(newCounts);
  };

  const clearColors = () => {
    setSelectedColor(null);
  };

  const handleFetchIds = () => {
    const divs = document.querySelectorAll("#smallBoxes > div");
    const ids = Array.from(divs).map((div) => div.id);
    console.log(ids);
    console.log(colorCounts);
  };

  return (
    <div className="h-auto flex font-[Oswald]">
      {/* Color Picker - Sticky to left, with fixed width */}
      <div className="sticky top-0 h-auto p-4 text-white flex flex-col w-1/8">
        <div className="flex flex-col space-y-2">
          {/* Color buttons with border indicating the selected color */}
          {[
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-orange-500",
            "bg-white",
          ].map((color) => (
            <button
              key={color}
              className={`w-12 h-12 ${color} ${
                selectedColor === color ? "border-4 border-white" : ""
              }`}
              onClick={() => handleColorPick(color)}
            />
          ))}

          {/* Clear Button */}
          <button
            className={`mt-4 w-12 h-12 pt-[8px] flex justify-center bg-gray-600 hover:bg-gray-500 ${
              selectedColor === null ? "border-white" : "border-transparent"
            } border-4`}
            onClick={clearColors}
          >
            <ImBin size="25px" />
          </button>
        </div>
      </div>

      {/* Rubik's Cube Faces and Solve Button */}
      <div className="flex-grow flex-col items-center justify-center h-auto">
        <div className="flex-grow p-11 pt-5 pb-2 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {faces.map((face, faceIndex) => (
            <div key={faceIndex} className="flex flex-col items-center">
              {/* The 3x3 grid for Rubik's cube face */}
              <div
                id="smallBoxes"
                className="grid grid-cols-3 gap-1 w-[180px] h-[180px] bg-gray-800"
              >
                {colors[faceIndex].map((color, squareIndex) => (
                  <div
                    key={squareIndex}
                    onClick={() => handleSquareClick(faceIndex, squareIndex)}
                    className={`w-[58px] h-[58px] border rounded-md border-gray-500 cursor-pointer ${
                      color ? color : "bg-gray-600"
                    } ${squareIndex === 4 ? "pointer-events-none" : ""}`} // Disable interaction for center box.
                    id={`${squareIndex}${faceIds[faceIndex]}`}
                  ></div>
                ))}
              </div>
              {/* Label below each square */}
              <div className="text-white mt-2 lg:mb-6">{face}</div>
            </div>
          ))}
        </div>

        {/*Solve Button below the cubes*/}
        <div className="relative flex justify-center items-center mb-8 mt-8 pb-20">
          <button
            className="bg-red-600 text-yellow-100 h-11 w-[100px] rounded-lg"
            onClick={handleFetchIds}
          >
            Solve
          </button>
        </div>
      </div>
    </div>
  );
};

export default CubeFaces;
