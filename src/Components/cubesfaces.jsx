import React, { useState } from "react";
import { ImBin } from "react-icons/im";

const CubeFaces = () => {
  const faces = ["Front", "Top", "Right", "Left", "Down", "Back"];
  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState(
    Array(6).fill(Array(9).fill(null)) // 6 faces, each with 9 sub-squares
  );

  const handleColorPick = (color) => {
    setSelectedColor(color);
  };

  const handleSquareClick = (faceIndex, squareIndex) => {
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
    setColors(newColors);
  };

  const clearColors = () => {
    setSelectedColor(null);
  };

  return (
    <div className="h-auto flex font-[Oswald]">
      {/* Color Picker - Sticky to left, with fixed width */}
      <div className="sticky top-0 h-auto p-4 text-white flex flex-col w-1/8">
        <div className="flex flex-col space-y-2">
          {/* Color buttons with border indicating the selected color */}
          <button
            className={`w-12 h-12 bg-red-500 ${
              selectedColor === "bg-red-500" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-red-500")}
          />
          <button
            className={`w-12 h-12 bg-blue-500 ${
              selectedColor === "bg-blue-500" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-blue-500")}
          />
          <button
            className={`w-12 h-12 bg-green-500 ${
              selectedColor === "bg-green-500" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-green-500")}
          />
          <button
            className={`w-12 h-12 bg-yellow-500 ${
              selectedColor === "bg-yellow-500" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-yellow-500")}
          />
          <button
            className={`w-12 h-12 bg-orange-500 ${
              selectedColor === "bg-orange-500" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-orange-500")}
          />
          <button
            className={`w-12 h-12 bg-white border border-gray-400 ${
              selectedColor === "bg-white" ? "border-4 border-white" : ""
            }`}
            onClick={() => handleColorPick("bg-white")}
          />

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
              <div className="grid grid-cols-3 gap-1 w-[180px] h-[180px] bg-gray-800">
                {colors[faceIndex].map((color, squareIndex) => (
                  <div
                    key={squareIndex}
                    onClick={() => handleSquareClick(faceIndex, squareIndex)}
                    className={`w-[58px] h-[58px] border rounded-md border-gray-500 cursor-pointer ${
                      color ? color : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
              {/* Label below each square */}
              <div className="text-white mt-2 lg:mb-6">{face}</div>
            </div>
          ))}
        </div>

        {/*Solve Button below the cubes*/}
        <div className="relative flex justify-center items-center m-8 mt-8">
          <button className="bg-red-600 text-yellow-100 h-11 w-[100px] rounded-lg">
            Solve
          </button>
        </div>
      </div>
    </div>
  );
};

export default CubeFaces;
