function range(start, end) {
return Array.from({ length: end - start }, (_, i) => start + i);
}

export default range;