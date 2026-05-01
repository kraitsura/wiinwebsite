'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

interface ImmersivePdfViewerProps {
	file: string
}

export function ImmersivePdfViewer({ file }: ImmersivePdfViewerProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [numPages, setNumPages] = useState<number>(0)
	const [pageWidth, setPageWidth] = useState<number>(0)

	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				setPageWidth(containerRef.current.clientWidth)
			}
		}
		updateWidth()
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	return (
		<div
			ref={containerRef}
			className="bg-background w-full"
		>
			<Document
				file={file}
				onLoadSuccess={({ numPages }) => setNumPages(numPages)}
				loading={
					<div className="flex h-screen w-full items-center justify-center">
						<span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
							Loading deck…
						</span>
					</div>
				}
				error={
					<div className="flex h-screen w-full items-center justify-center">
						<span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
							Failed to load deck.
						</span>
					</div>
				}
			>
				{pageWidth > 0 &&
					Array.from({ length: numPages }, (_, i) => (
						<Page
							key={`page-${i + 1}`}
							pageNumber={i + 1}
							width={pageWidth}
							renderAnnotationLayer={false}
							renderTextLayer={false}
							className="!bg-background"
						/>
					))}
			</Document>
		</div>
	)
}
