import PDFMerger from "pdf-merger-js";

const mergePDFs = async (pdfFiles) => {
  const merger = new PDFMerger();
  for (const pdfFile of pdfFiles) {
    await merger.add(pdfFile);
  }

  let d = new Date().getTime();
  let mergedFileName = `merged_${d}.pdf`;
  await merger.save(`public/${mergedFileName}`);

  return mergedFileName;
};

export default mergePDFs;
