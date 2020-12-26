export class Location {
  constructor(public query: string, public sort: string, public perPage: number, public page: number) {
    // nothing to do
  }

  movePrev(): Location {
    return new Location(this.query, this.sort, this.perPage, this.page - 1);
  }

  moveNext(): Location {
    return new Location(this.query, this.sort, this.perPage, this.page + 1);
  }

  moveTo(page: number): Location {
    return new Location(this.query, this.sort, this.perPage, page);
  }
}

export function parse(hash: string): Location {
  const parsed = new Location('', '', 0, 0);

  // hash maybe #?foo=...&bar=...&baz=...
  const params = new URLSearchParams(hash.startsWith('#') ? hash.substring(1) : hash);

  if (params.has('q')) {
    parsed.query = decodeURIComponent(params.get('q'));
  }
  if (params.has('sort')) {
    parsed.sort = decodeURIComponent(params.get('sort'));
  }
  if (params.has('per_page')) {
    parsed.perPage = +decodeURIComponent(params.get('per_page'));
  }
  if (params.has('page')) {
    parsed.page = +decodeURIComponent(params.get('page'));
  }

  return parsed;
}

export function toHashString(location: Location): string {
  return `#?q=${encodeURIComponent(location.query)}&sort=${encodeURIComponent(
    location.sort,
  )}&per_page=${encodeURIComponent(location.perPage)}&page=${encodeURIComponent(location.page)}`;
}
