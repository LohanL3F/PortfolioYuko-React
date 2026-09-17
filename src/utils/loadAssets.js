function loadFolder(globResult) {
  return Object.keys(globResult)
    .sort() 
    .map((path) => {
      const src = globResult[path].default;
      const isVideo = /\.(mp4|webm|mov)$/i.test(path);
      return { src, type: isVideo ? "video" : "image", path };
    });
}

export const drawings = loadFolder(
  import.meta.glob("../assets/Images/Drawings/*.{png,jpg,jpeg,gif,webp}", {
    eager: true,
  })
);

export const sketches = loadFolder(
  import.meta.glob("../assets/Images/Sketches/*.{png,jpg,jpeg,gif,webp}", {
    eager: true,
  })
);

export const animations = loadFolder(
  import.meta.glob(
    "../assets/Images/Animations/*.{png,jpg,jpeg,gif,webp,mp4,webm,mov}",
    { eager: true }
  )
);

export const timelapses = loadFolder(
  import.meta.glob(
    "../assets/Images/Timelapses/*.{png,jpg,jpeg,gif,webp,mp4,webm,mov}",
    { eager: true }
  )
);