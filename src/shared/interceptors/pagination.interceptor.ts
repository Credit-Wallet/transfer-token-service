import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pagination } from 'nestjs-typeorm-paginate';
import { SendResponse } from '../helpers/send.response';

@Injectable()
export class PaginationInterceptor<T> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        return next.handle().pipe(
            map(data => {
                if (data.result instanceof Pagination) {
                    const customMeta = {
                        pageCount: data.result.meta.totalPages,
                        itemCount: data.result.meta.totalItems,
                        page: data.result.meta.currentPage,
                        limit: data.result.meta.itemsPerPage,
                    };

                    return SendResponse.success({
                        data: data.result.items,
                        meta: customMeta,
                        links: data.result.links,
                    });
                }
                return data;
            })
        );
    }
}